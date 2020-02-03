module.exports = function() {
  /* Return a function that removes the path */
  function createRemoveMethod() {
    return path => path.remove();
  }

  // AST methods we want to remove
  const methods = [
    'ImportDeclaration',
    'ExportDefaultDeclaration'
  ];

  // Variable for babel
  const visitor = {};

  // Iterate through every methods entry
  // and add a remove method for each
  for (var method = 0; method < methods.length; method++) {
    visitor[methods[method]] = createRemoveMethod();
  }

  // We're done
  return { name: 'babel-remove-import-export', visitor };
};
