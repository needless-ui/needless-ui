'use client';

import {
  nuiGridBareOperator,
  type NuiGridColumn,
  type NuiGridColumnState,
  type NuiGridFilter,
  nuiGridFilterDraft,
  type NuiGridFilterOp,
  nuiGridFilterOf,
  type NuiGridLabels,
  type NuiGridLayoutColumn,
  nuiGridOperators,
  type NuiGridSort,
} from '@needless-ui/core/grid';
import { type MouseEvent, type ReactNode, useState } from 'react';

/** What the column panel changes, through the grid's model. */
export interface GridPanelModel<T> {
  layout: readonly NuiGridLayoutColumn<T>[];
  byId: ReadonlyMap<string, NuiGridColumn<T>>;
  state: readonly NuiGridColumnState[];
  sort: readonly NuiGridSort[];
  filters: Readonly<Record<string, NuiGridFilter>>;
  setSort(id: string, direction: 'asc' | 'desc' | null, add: boolean): void;
  setFilter(id: string, filter: NuiGridFilter | null): void;
  pin(id: string, pinned: 'start' | 'end' | null): void;
  canMove(id: string, delta: -1 | 1): boolean;
  move(id: string, delta: -1 | 1): void;
  hide(id: string, hidden: boolean): void;
}

/**
 * The column panel's content: sort, filter, pin, move, fit and hide one column,
 * and show or hide the others. The grid puts it in a popover.
 */
export function GridPanel<T>(props: {
  model: GridPanelModel<T>;
  /** The column shown. It changes here when `pick` is on. */
  columnId: string;
  onColumnIdChange(id: string): void;
  labels: NuiGridLabels;
  locale: string;
  /** Opened from the toolbar, not a header: a select picks the column. */
  pick: boolean;
  /** Rows show as cards, which have no pinned edges or widths. */
  cards: boolean;
  /** Fit the column to its content: the grid measures it. */
  onFit(): void;
  /** Hide the column: the grid moves focus away first. */
  onHide(): void;
}): ReactNode {
  const { model, columnId, labels: text, locale } = props;
  const column = model.byId.get(columnId)!;
  const type = column.type ?? 'text';
  const filter = model.filters[columnId] ?? null;
  const operators = nuiGridOperators(column);
  const direction = model.sort.find((sort) => sort.column === columnId)?.direction ?? null;
  const pinned = model.layout.find((entry) => entry.id === columnId)?.pinned ?? null;
  const lastVisible = model.layout.length <= 1;
  /** The columns to pick from: the visible ones, and the one shown even when it's hidden. */
  const visible = model.layout.map((entry) => entry.column);
  const choices = visible.includes(column) ? visible : [...visible, column];

  /**
   * The chosen operator and the typed values. They start from the column's filter
   * and then follow the form alone, so the filter they make never rewrites what's
   * being typed ("1." stays "1."), and emptying the value keeps the operator.
   */
  const fresh = () => ({
    columnId,
    op: filter?.op ?? operators[0],
    draft: nuiGridFilterDraft(filter, type, locale),
  });
  const [form, setForm] = useState(fresh);
  let current = form;
  if (form.columnId !== columnId) {
    current = fresh();
    setForm(current);
  }
  const { op, draft } = current;
  const bare = nuiGridBareOperator(op);

  /** Turns the form into the column's filter, or none while it's empty. */
  const apply = (nextOp: NuiGridFilterOp, nextDraft: { value: string; to: string }) => {
    setForm({ columnId, op: nextOp, draft: nextDraft });
    model.setFilter(columnId, nuiGridFilterOf(nextOp, nextDraft, type, locale));
  };

  const sortBy = (next: 'asc' | 'desc', event: MouseEvent) =>
    model.setSort(columnId, direction === next ? null : next, event.shiftKey);

  const setIs = (value: boolean) => {
    const same = filter?.op === 'is' && filter.value === value;
    model.setFilter(columnId, same ? null : { op: 'is', value });
  };

  const chosen = (value: unknown) =>
    filter?.op === 'in' && (filter.value as readonly unknown[]).includes(value);

  /** Ticking a choice filters to the ticked ones; none ticked is no filter. */
  const choose = (value: unknown) => {
    const list = filter?.op === 'in' ? (filter.value as readonly unknown[]) : [];
    const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
    model.setFilter(columnId, next.length ? { op: 'in', value: next } : null);
  };

  const clearFilter = () => {
    model.setFilter(columnId, null);
    setForm({ columnId, op, draft: { value: '', to: '' } });
  };

  const field = (part: 'value' | 'to', name: string) => (
    <input
      className="nui-grid-panel-input"
      type={type === 'date' ? 'date' : 'text'}
      inputMode={type === 'number' ? 'decimal' : undefined}
      aria-label={name}
      value={draft[part]}
      onChange={(event) => apply(op, { ...draft, [part]: event.target.value })}
    />
  );

  return (
    <div className="nui-grid-panel-body">
      {props.pick ? (
        <label className="nui-grid-panel-section">
          <span className="nui-grid-panel-label">{text.column}</span>
          <select
            className="nui-grid-panel-select"
            value={columnId}
            onChange={(event) => props.onColumnIdChange(event.target.value)}
          >
            {choices.map((choice) => (
              <option key={choice.id} value={choice.id}>
                {choice.header}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <p className="nui-grid-panel-title">{column.header}</p>
      )}

      {column.sortable !== false && (
        <div className="nui-grid-panel-section" role="group" aria-label={text.sort}>
          <span className="nui-grid-panel-label" aria-hidden="true">
            {text.sort}
          </span>
          <div className="nui-grid-panel-buttons">
            <button
              type="button"
              className="nui-grid-panel-button"
              data-icon="asc"
              aria-pressed={direction === 'asc'}
              onClick={(event) => sortBy('asc', event)}
            >
              {text.ascending}
            </button>
            <button
              type="button"
              className="nui-grid-panel-button"
              data-icon="desc"
              aria-pressed={direction === 'desc'}
              onClick={(event) => sortBy('desc', event)}
            >
              {text.descending}
            </button>
          </div>
        </div>
      )}

      {column.filterable !== false && (
        <div className="nui-grid-panel-section" role="group" aria-label={text.filter}>
          <span className="nui-grid-panel-label" aria-hidden="true">
            {text.filter}
          </span>
          {type === 'enum' ? (
            <div className="nui-grid-panel-choices">
              {(column.options ?? []).map((option, i) => (
                <label key={i} className="nui-grid-panel-choice">
                  <input
                    type="checkbox"
                    checked={chosen(option.value)}
                    onChange={() => choose(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : type === 'boolean' ? (
            <div className="nui-grid-panel-buttons">
              <button
                type="button"
                className="nui-grid-panel-button"
                aria-pressed={filter?.op === 'is' && filter.value === true}
                onClick={() => setIs(true)}
              >
                {text.yes}
              </button>
              <button
                type="button"
                className="nui-grid-panel-button"
                aria-pressed={filter?.op === 'is' && filter.value === false}
                onClick={() => setIs(false)}
              >
                {text.no}
              </button>
            </div>
          ) : (
            <>
              <select
                className="nui-grid-panel-select"
                aria-label={text.filter}
                value={op}
                onChange={(event) => apply(event.target.value as NuiGridFilterOp, draft)}
              >
                {operators.map((option) => (
                  <option key={option} value={option}>
                    {text.operators[option]}
                  </option>
                ))}
              </select>
              {!bare && field('value', op === 'between' ? text.value : text.filter)}
              {op === 'between' && field('to', text.to)}
            </>
          )}
          {filter && (
            <button type="button" className="nui-grid-panel-link" onClick={clearFilter}>
              {text.clearFilter}
            </button>
          )}
        </div>
      )}

      {/* Cards have no edges to pin to, and no widths. */}
      {!props.cards && (
        <div className="nui-grid-panel-section" role="group" aria-label={text.pin}>
          <span className="nui-grid-panel-label" aria-hidden="true">
            {text.pin}
          </span>
          <div className="nui-grid-panel-buttons">
            <button
              type="button"
              className="nui-grid-panel-button"
              aria-pressed={pinned === 'start'}
              onClick={() => model.pin(columnId, 'start')}
            >
              {text.pinStart}
            </button>
            <button
              type="button"
              className="nui-grid-panel-button"
              aria-pressed={pinned === null}
              onClick={() => model.pin(columnId, null)}
            >
              {text.unpin}
            </button>
            <button
              type="button"
              className="nui-grid-panel-button"
              aria-pressed={pinned === 'end'}
              onClick={() => model.pin(columnId, 'end')}
            >
              {text.pinEnd}
            </button>
          </div>
        </div>
      )}

      <div className="nui-grid-panel-actions">
        <button
          type="button"
          className="nui-grid-panel-action"
          data-icon="back"
          disabled={!model.canMove(columnId, -1)}
          onClick={() => model.move(columnId, -1)}
        >
          {text.moveBack}
        </button>
        <button
          type="button"
          className="nui-grid-panel-action"
          data-icon="forward"
          disabled={!model.canMove(columnId, 1)}
          onClick={() => model.move(columnId, 1)}
        >
          {text.moveForward}
        </button>
        {column.resizable !== false && !props.cards && (
          <button
            type="button"
            className="nui-grid-panel-action"
            data-icon="fit"
            onClick={props.onFit}
          >
            {text.fit}
          </button>
        )}
        {column.hideable !== false && (
          <button
            type="button"
            className="nui-grid-panel-action"
            data-icon="hide"
            disabled={lastVisible}
            onClick={props.onHide}
          >
            {text.hide}
          </button>
        )}
      </div>

      <details className="nui-grid-panel-columns">
        <summary>{text.columns}</summary>
        {model.state.map((entry) => {
          const other = model.byId.get(entry.id)!;
          return (
            <label key={entry.id} className="nui-grid-panel-choice">
              <input
                type="checkbox"
                checked={!entry.hidden}
                disabled={other.hideable === false || (!entry.hidden && lastVisible)}
                onChange={(event) => model.hide(entry.id, !event.target.checked)}
              />
              {other.header}
            </label>
          );
        })}
      </details>
    </div>
  );
}
