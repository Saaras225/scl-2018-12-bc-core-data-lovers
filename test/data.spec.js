/*require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
//

global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../src/data/lol/lol.js');
//test

describe ('data',()=> {
  it('Debería ser un objeto',()=>{
    assert.equal(typeof window.data, 'object')
  });

describe ('dataName', () => {
  it('Debería ser una función',()=> {
    assert.equal(typeof window.dataName,'function');
  });

  it ('Debería retornar el nombre del primer personaje',()=>{
    const filterData= window.dataName (dataTest,'name')
    assert.equal(typeof window.dataName[0], 'Aatrox');
  });

  describe ('data.filterData',()=>{
    it('deberia ser una función',()=>[
      assert.equal(typeof window.filterData, 'function');
  });

  it ('Debería retornar el segundo personaje de tipo tanque',()=>{
    const filterData=window.filterData (dataTest,'Tank');
    assert.equal(typeof window.filterData[1], 'Alistar');
  });
