# HTML Snippets

## Form
A fully formed form element in HTML taking advantage of `fieldset`, `legend`, and `input` types. The `name` attribute is used to set the key of the key, value pair when submitting data from the client's form to a server.

![Full Form Screenshot](screenshots/FullForm.png)

## Link
External link that opens in a new tab. `target="_blank"` implicitly adds `rel="noopener"` in newer versions of Firefox, but you should add it anyways to protect people using inferior browsers from `window.opener` API exploits. You can also add `rel="prefetch"` or `rel="preload"` to do some eager loading of resources.

## Table
A very basic table with way more markup than needed. Specifically, `scope` in a `th` element can be used to determine if a header cell is the header for a row or column, and `headers` within a `td` element can denote what column and row a cell belongs to.