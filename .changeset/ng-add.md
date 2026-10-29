---
'@needless-ui/angular': minor
---

**`ng add`:** `ng add @needless-ui/angular` sets up an app in one command. It adds Angular Aria and the CDK for the app's Angular version, and imports `@needless-ui/css` at the top of the global stylesheet, after a layer order that keeps resets below the components. When the stylesheet imports Tailwind CSS, components go after Tailwind's base styles and before its utilities; a Sass stylesheet gets `@use '@needless-ui/css';`. Running it again changes nothing, and `--project` picks the app in a workspace with several.
