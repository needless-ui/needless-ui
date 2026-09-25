/**
 * A spreadsheet in the Office Open XML format (.xlsx), written without a
 * library: a zip (stored, not compressed, which every reader takes) of the few
 * XML parts a workbook needs.
 */

/** A column of the sheet: its header, width in characters, and how its values show. */
export interface NuiXlsxColumn {
  header: string;
  /** In characters. */
  width?: number;
  /** A number format, as Excel writes them: `#,##0.00`, `0%`, `yyyy-mm-dd`. */
  format?: string;
}

export interface NuiXlsxSheet {
  name?: string;
  columns: readonly NuiXlsxColumn[];
  /** Cells: numbers, dates (as dates), booleans, text; null or undefined for empty. */
  rows: readonly (readonly unknown[])[];
}

const XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    // XML 1.0 has no place for most control characters.
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '');

/** A column's letters: 0 is A, 26 is AA. */
function letters(index: number): string {
  let name = '';
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) {
    name = String.fromCharCode(65 + ((n - 1) % 26)) + name;
  }
  return name;
}

/** Days since 1899-12-30, Excel's date numbers, in local time as the grid shows it. */
function serial(date: Date): number {
  const local = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );
  return (local - Date.UTC(1899, 11, 30)) / 86_400_000;
}

function styles(formats: readonly string[]): string {
  // Built-in 0 (General) and 14 (date); custom formats from 164.
  const custom = formats.map(
    (code, i) => `<numFmt numFmtId="${164 + i}" formatCode="${escape(code)}"/>`,
  );
  const xfs = [
    '<xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>',
    // The header: bold, shaded, with a line under it.
    '<xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/>',
    ...formats.map(
      (_, i) =>
        `<xf numFmtId="${164 + i}" fontId="0" fillId="0" borderId="0" applyNumberFormat="1"/>`,
    ),
  ];
  return (
    XML +
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    (custom.length ? `<numFmts count="${custom.length}">${custom.join('')}</numFmts>` : '') +
    '<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts>' +
    '<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FFEEF0F3"/><bgColor indexed="64"/></patternFill></fill></fills>' +
    '<borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border>' +
    '<border><left/><right/><top/><bottom style="thin"><color rgb="FF9CA3AF"/></bottom><diagonal/></border></borders>' +
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
    `<cellXfs count="${xfs.length}">${xfs.join('')}</cellXfs>` +
    '</styleSheet>'
  );
}

function sheetXml(
  sheet: NuiXlsxSheet,
  formatStyle: (column: number, value: unknown) => number,
): string {
  const { columns, rows } = sheet;
  const last = letters(Math.max(0, columns.length - 1));
  const cols = columns
    .map(
      (column, i) =>
        `<col min="${i + 1}" max="${i + 1}" width="${column.width ?? 14}" customWidth="1"/>`,
    )
    .join('');
  const cell = (value: unknown, ref: string, style: number) => {
    const s = style ? ` s="${style}"` : '';
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'number')
      return isFinite(value) ? `<c r="${ref}"${s}><v>${value}</v></c>` : '';
    if (typeof value === 'boolean') return `<c r="${ref}"${s} t="b"><v>${value ? 1 : 0}</v></c>`;
    if (value instanceof Date) {
      return isNaN(value.getTime()) ? '' : `<c r="${ref}"${s}><v>${serial(value)}</v></c>`;
    }
    return `<c r="${ref}"${s} t="inlineStr"><is><t xml:space="preserve">${escape(String(value))}</t></is></c>`;
  };
  const header = `<row r="1">${columns.map((column, i) => cell(column.header, `${letters(i)}1`, 1)).join('')}</row>`;
  const body = rows
    .map(
      (row, r) =>
        `<row r="${r + 2}">${row
          .map((value, c) => cell(value, `${letters(c)}${r + 2}`, formatStyle(c, value)))
          .join('')}</row>`,
    )
    .join('');
  return (
    XML +
    '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    `<dimension ref="A1:${last}${rows.length + 1}"/>` +
    // The header stays in view while the rows scroll.
    '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>' +
    '<sheetFormatPr defaultRowHeight="15"/>' +
    (cols ? `<cols>${cols}</cols>` : '') +
    `<sheetData>${header}${body}</sheetData>` +
    (columns.length ? `<autoFilter ref="A1:${last}${rows.length + 1}"/>` : '') +
    '</worksheet>'
  );
}

/** The files of a workbook with one sheet. */
function parts(sheet: NuiXlsxSheet): [string, string][] {
  const formats: string[] = [];
  const styleOf = new Map<string, number>();
  const formatStyle = (column: number, value: unknown) => {
    const code = sheet.columns[column]?.format ?? (value instanceof Date ? 'yyyy-mm-dd' : null);
    if (!code || !(typeof value === 'number' || value instanceof Date)) return 0;
    if (!styleOf.has(code)) {
      formats.push(code);
      styleOf.set(code, formats.length + 1);
    }
    return styleOf.get(code)!;
  };
  const worksheet = sheetXml(sheet, formatStyle);
  const name = escape(
    (sheet.name ?? 'Sheet1').replace(/[\\/?*[\]:]/g, ' ').slice(0, 31) || 'Sheet1',
  );
  return [
    [
      '[Content_Types].xml',
      XML +
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
        '<Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
        '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
        '</Types>',
    ],
    [
      '_rels/.rels',
      XML +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
        '</Relationships>',
    ],
    [
      'xl/workbook.xml',
      XML +
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
        `<sheets><sheet name="${name}" sheetId="1" r:id="rId1"/></sheets>` +
        (sheet.columns.length
          ? `<definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">'${name.replace(/'/g, "''")}'!$A$1:$${letters(sheet.columns.length - 1)}$${sheet.rows.length + 1}</definedName></definedNames>`
          : '') +
        '</workbook>',
    ],
    [
      'xl/_rels/workbook.xml.rels',
      XML +
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '</Relationships>',
    ],
    ['xl/worksheets/sheet1.xml', worksheet],
    ['xl/styles.xml', styles(formats)],
  ];
}

let table: Uint32Array | null = null;

function crc32(bytes: Uint8Array): number {
  if (!table) {
    table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (const byte of bytes) crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

/** A zip of files, stored as they are. */
export function nuiZip(files: readonly [path: string, content: string | Uint8Array][]): Uint8Array {
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  for (const [path, content] of files) {
    const name = encoder.encode(path);
    const data = typeof content === 'string' ? encoder.encode(content) : content;
    const crc = crc32(data);
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true); // UTF-8 names
    local.setUint16(8, 0, true); // stored
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, name.length, true);
    chunks.push(new Uint8Array(local.buffer), name, data);
    const entry = new DataView(new ArrayBuffer(46));
    entry.setUint32(0, 0x02014b50, true);
    entry.setUint16(4, 20, true);
    entry.setUint16(6, 20, true);
    entry.setUint16(8, 0x0800, true);
    entry.setUint32(16, crc, true);
    entry.setUint32(20, data.length, true);
    entry.setUint32(24, data.length, true);
    entry.setUint16(28, name.length, true);
    entry.setUint32(42, offset, true);
    central.push(new Uint8Array(entry.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const size = central.reduce((sum, chunk) => sum + chunk.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, size, true);
  end.setUint32(16, offset, true);
  const all = [...chunks, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((sum, chunk) => sum + chunk.length, 0));
  let at = 0;
  for (const chunk of all) {
    out.set(chunk, at);
    at += chunk.length;
  }
  return out;
}

/**
 * A spreadsheet (.xlsx) with one sheet: a bold, frozen header row with filters,
 * column widths, and typed cells (numbers, dates, booleans, text) with their
 * number formats.
 */
export function nuiXlsx(sheet: NuiXlsxSheet): Uint8Array {
  return nuiZip(parts(sheet));
}
