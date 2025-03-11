// #todo

import { fileToVariable } from './file-to-variable.js';

describe('Replace file name', () => {
  describe('replace from "kebab-case" to "camel-case"', () => {
    it('is file name have dashes and extention Test 1', () => {
      const actual = fileToVariable('do-magic.js');
      expect(actual).toEqual('doMagic');
    });
    it('is file name have dashes and extention Test 2', () => {
      const actual = fileToVariable('file-to-variable.js');
      expect(actual).toEqual('fileToVariable');
    });
  });
});
