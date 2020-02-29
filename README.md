# babel-plugin-ignore-import-export
A simple Babel plugin to ignore import, export default and named exports of your files.

## Plugin options
Set `keepNamedExport` option to `false` to ignore named exports (by default is `true`).

E.g. *.babelrc*
```
{
  "plugins": [
    ["ignore-import-export", { "keepNamedExport": false }]
  ]
}
```
