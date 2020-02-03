import path from 'path';
import pluginTerser from 'babel-plugin-tester';
import removeImportExport from '../src';

pluginTerser({
  plugin: removeImportExport,
  fixtures: path.join(__dirname, '__fixtures__')
});
