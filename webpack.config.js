const path = require('path');
const pkg = require('./package.json');

const buildFileName = `free-palestine-banner-${pkg.version}.js`;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: buildFileName,
    globalObject: 'this',
    library: {
      name: 'freePalestine',
      type: 'umd',
    },
  },
};