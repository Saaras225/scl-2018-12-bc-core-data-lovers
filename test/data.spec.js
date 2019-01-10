global.window = window;
global.assert = require('chai').assert;
global.expect = require('chai').expect;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');

//const data = window.LOL;



describe('dataName', () => {
  it('Debería ser una fuction', () => {
    assert.equal(typeof window.dataName, 'function');
  });
  it('Deberia retornar el primer nombre', () => {
    assert.equal(typeof window.dataName[0], 'Aatrox');
  });
});

describe('filterData', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.filterData, 'function');
  });
  it('Devuelve el primer Mago de la Lista', () =>{
   let filterMage = window.filterData(window.data,'Mage');
   expect(filterMage[0]).toBe('Ahri');
  });

  it('Debería retornar el segundo personaje de tipo tanque', () => {
    const filterData = window.filterData(window.data, 'Tank');
    assert.equal(typeof window.filterData[1], 'Alistar');
  });
});

describe('dataSearch', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataSearch, 'function');
  });

  it('Debería el nombre de Ahri', () => {
    assert.equal(typeof window.dataSearch, 'Ahri');
  });
});