// Module definition
module.exports = () => ({
  name: 'babel-plugin-ignore-import-export',
  visitor: {
    // Always remove/ignore import
    ImportDeclaration: path => path.remove(),

    // Always remove/ignore export default
    ExportDefaultDeclaration: path => path.remove(),

    // Keep named export declaration if specified in options
    ExportNamedDeclaration: (path, { opts }) => {
      const { keepNamedExport = true } = opts;

      keepNamedExport && path.node.declaration
        ? path.replaceWith(path.node.declaration)
        : path.remove();
    }
  }
});
