# Dropzone

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A place to drop files, or choose them (`nui-dropzone`): a zone (`nui-dropzone-button`, a button with an icon, its text and a hint), an optional folder button (`nui-dropzone-folder`), the reasons files were turned away (`nui-dropzone-problems`), and the list of files (`nui-dropzone-files`). Each file (`nui-dropzone-file`, `data-status`) shows a preview for images (`nui-dropzone-preview`), its name with its folder, its size or state (`nui-dropzone-meta`), a progress bar while it uploads (`nui-dropzone-progress`), and its actions (`nui-dropzone-action`: cancel, retry, remove).

Without an `upload` function, the dropzone holds files for a form. With one, it uploads them a few at a time.

## API

| CSS hook        | Angular                    | Values                                                              | Default  |
| --------------- | -------------------------- | ------------------------------------------------------------------- | -------- |
| —               | `[(files)]`                | the files held, in order                                            | `[]`     |
| —               | `accept`                   | the kinds of file to take, as `<input type="file">`: `image/*,.pdf` | any      |
| —               | `multiple`                 | more than one file                                                  | true     |
| —               | `directory`                | offers a button to choose a folder                                  | false    |
| —               | `maxFiles`                 | how many files it holds                                             | no limit |
| —               | `maxSize`, `minSize`       | the largest and smallest file, in bytes                             | —        |
| —               | `validate`                 | checks each file; a message turns it away                           | —        |
| `data-status`   | `upload`                   | sends a file: `(file, { signal, progress }) => Promise`             | —        |
| —               | `concurrency`              | uploads at once                                                     | 3        |
| —               | `hint`                     | a line under the zone's text                                        | —        |
| `data-dragging` | —                          | files are held over the zone                                        | —        |
| `data-disabled` | `disabled`                 | takes no files                                                      | false    |
| —               | `(uploaded)`, `(rejected)` | a file finished uploading; files turned away, with why              | —        |
| —               | `queue`, `take(files)`     | the upload queue (cancel, retry, progress); adds files from code    | —        |
| —               | `labels`                   | every text it shows or announces, for translation                   | —        |

The queue (`NuiUploadQueue`) works on its own too, and `nuiDroppedFiles(dataTransfer)` reads the files in dropped folders.

## Behavior

- Files come from a drop, the file chooser, the folder chooser, or a paste while the zone has focus. Folders dropped are read through, and each file keeps its path (`photos/2026/beach.jpg`).
- Each file is checked against `accept`, the sizes, `validate` and `maxFiles`; the ones turned away are listed with the reason, and emitted.
- Images get a preview (an object URL, released when the file goes).
- An upload's `signal` aborts when it's canceled or removed: pass it to `fetch`. A failed upload shows its error and can be retried.

## Keyboard

| Key         | Behavior                                       |
| ----------- | ---------------------------------------------- |
| Enter/Space | On the zone, opens the file chooser            |
| Ctrl/⌘ + V  | On the zone, adds the files pasted             |
| Tab         | Moves through the zone and each file's actions |

## Accessibility

- The zone is a button, so it's reachable and works without a pointer; the hint describes it.
- Files added, and files turned away, are announced. Each progress bar is a `progressbar` named for its file, and each action is named for what it does to which file ("Remove beach.jpg").
- Previews are decorative (`alt=""`): the name says which file it is.
