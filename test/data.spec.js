global.window = window;
global.assert = require('chai').assert;
global.expect = require('chai').expect;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');

<<<<<<< HEAD
describe('dataImg', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataImg, 'function');
  });
  it('Deberia retornar la tercera  imagen', () => {
    let img = window.dataImg(window.data);
    assert.equal(img[2], 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png');
  });
});

describe('dataName', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataName, 'function');
  });
  it('Deberia retornar el primer nombre Aatrox', () => {
    let name = window.dataName(window.data);
    assert.equal(name[0], 'Aatrox');
  });
});

describe('dataSplash', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataSplash, 'function');
  });
  it('Deberia retornar la imagen en la posicion quinta', () => {
    let splash = window.dataSplash(window.data);
    assert.equal(splash[4], 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg');
  });
});

describe('dataTitle', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataTitle, 'function');
  });
  it('Deberia retornar el primer titulo de la lista de los personajes', () => {
    let title = window.dataTitle(window.data);
    assert.equal(title[0], 'the Darkin Blade');
  });
});

describe('dataBlurb', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataBlurb, 'function');
  });
  it('Deberia retornar la cuarta descripcion de la lista de los personajes', () => {
    let blurb = window.dataBlurb(window.data);
    assert.equal(blurb[1], 'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...');
  });
});

describe('filterData', () => {
  it('Deberia ser una función', () => {
    assert.equal(typeof window.filterData, 'function');
  });
  it('Deberia retornar el primer personaje de tipo Mago(Ahri)', () => {
    let filterMage = window.filterData(window.data, 'Mage');
    assert.equal(filterMage[0].name, 'Ahri');
  });

  it('Debería retornar el segundo personaje de tipo tanque(Alistar)', () => {
    let filterTank = window.filterData(window.data, 'Tank');
    assert.equal(filterTank[1].name, 'Alistar');
  });
});

describe('dataBlurb', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataBlurb, 'function');
  });
  it('Deberia retornar la cuarta descripcion de la lista de los personajes', () => {
    let blurb = window.dataBlurb(window.data);
    assert.equal(blurb[1], 'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...');
  });
});

describe('dataInfo', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataInfo, 'function');
  });
  it('Deberia retornar la informacion de ataque del personaje en la posicion segunda', () => {
    let info = window.dataInfo(window.data);
    assert.equal(info[1].attack,'3');
  });
});

describe('dataInfoAttack', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataInfoAttack, 'function');
  });
  it('Deberia retornar el ataque de Ahri', () => {
    let attack = window.dataInfoAttack(window.dataInfo);
    assert.equal(attack[1],'3');
  });
});
describe('dataInfoDefense', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataInfoDefense, 'function');
  });
  it('Deberia retornar la defensa de Ahri', () => {
    let defense = window.dataInfoDefense(window.data);
    assert.equal(defense[1].defense, 4);
  });
});

describe('dataInfoMagic', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataInfoMagic, 'function');
  });
  it('Deberia retornar la magia de Ahri', () => {
    let magic = window.dataInfoMagic(window.data);
    assert.equal(magic[1].magic, 8);
  });
});

describe('dataInfoDifficulty', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.dataInfoDifficulty, 'function');
  });
  it('Deberia retornar la dificultad de Ahri', () => {
    let difficulty = window.dataInfoDifficulty(window.data);
    assert.equal(difficulty[1].difficulty, 5);
=======
//const data = window.LOL;


describe('dataName', () => {
 it('Debería ser una función', () => {
   assert.equal(typeof window.dataName, 'function');
 });
 it('Deberia retornar el primer nombre Aatrox', () => {
   let name = window.dataName(window.data);
  assert.equal(name[0], 'Aatrox');
 });
});

describe('filterData', () => {
 it('Deberia ser una función', () => {
   assert.equal(typeof window.filterData, 'function');
 });
 it('Deberia retornar el primer personaje de tipo Mago(Ahri)', () =>{
  let filterMage = window.filterData(window.data,'Mage');
  assert.equal(filterMage[0].name, 'Ahri');
 });

 it('Debería retornar el segundo personaje de tipo tanque(Alistar)', () => {
   let filterTank = window.filterData(window.data, 'Tank');
   assert.equal(filterTank[1].name, 'Alistar');
 });
});

describe('dataSearch', () => {
 it('deberia ser una función', () => {
   assert.equal(typeof window.dataSearch, 'function');
 });

  it('Debería retornar el nombre de Gnar', () => {
   let filterName = window.dataSearch(window.name,'Gnar');
   assert.equal(filterName[0].name,'Gnar');
 });
});

describe('dataTitle',() => {
  it('deberia ser una función',() => {
    assert.equal(typeof window.dataTitle, 'function');
>>>>>>> 9d47590739d6d0c7d79301314e9d57a25e14240a
  });
});

<<<<<<< HEAD
describe('dataSearch', () => {
  it('deberia ser una función', () => {
    assert.equal(typeof window.dataSearch, 'function');
=======
  it('Deberia retornar el titulo (the Fist of Shadow)', () => {
    let filterTitle = window.dataTitle(window.data);
    assert.equal(filterTitle[2], 'the Fist of Shadow');
>>>>>>> 9d47590739d6d0c7d79301314e9d57a25e14240a
  });
});

describe('dataSplash',() => {
  it('debería ser una función', () => {
  assert.equal(typeof window.dataSplash, 'function');
});
 it('debería arrojar un string', () => {
   let filterSplash = window.dataSplash(window.data);
   assert.equal(typeof filterSplash[1],'string' );
 });
});

<<<<<<< HEAD
  it('Debería retornar el nombre de Ahri', () => {
    let filterSearch = window.dataSearch(window.data, 'Ahri');
    assert.equal(filterSearch[1].name, 'Ahri');
  });
});
=======
describe('dataBlurb',() => {
  it('deberia ser una función',() => {
    assert.equal(typeof window.dataBlurb, 'function');
  });
  it('debería arrojar un string', () => {
    let filterBlurb = window.dataBlurb(window.data);
    assert.equal(typeof filterBlurb[1],'string' );
  });
 });
describe('dataInfo',() => {
    it('deberia ser una función',() => {
      assert.equal(typeof window.dataInfo, 'function');
    });
    it('debería arrojar un objeto', () => {
      let filterInfo = window.dataInfo(window.data);
      assert.equal(typeof filterInfo[1],'object' );
    });
   });
   describe('dataInfoAttack',() => {
       it('deberia ser una función',() => {
         assert.equal(typeof window.dataInfoAttack, 'function');
       });
       it('debería arrojar un número', () => {
         let filterInfoAttack = window.dataInfoAttack(window.dataInfo(window.data));
         assert.equal(typeof filterInfoAttack[0],'number' );
       });
      });
      describe('dataInfoDefense',() => {
          it('deberia ser una función',() => {
            assert.equal(typeof window.dataInfoDefense, 'function');
          });
          it('debería arrojar un número', () => {
            let filterInfoDefense = window.dataInfoDefense(window.dataInfo(window.data));
            assert.equal(typeof filterInfoDefense[0],'number' );
          });
         });
         describe('dataInfoMagic',() => {
             it('deberia ser una función',() => {
               assert.equal(typeof window.dataInfoMagic, 'function');
             });
             it('debería arrojar un número', () => {
               let filterInfoMagic = window.dataInfoMagic(window.dataInfo(window.data));
               assert.equal(typeof filterInfoMagic[0],'number' );
             });
            });
          describe('dataInfoDifficulty',() => {
                it('deberia ser una función',() => {
                  assert.equal(typeof window.dataInfoDifficulty, 'function');
                });
                it('debería arrojar un número', () => {
                  let filterInfoDifficulty = window.dataInfoDifficulty(window.dataInfo(window.data));
                  assert.equal(typeof filterInfoDifficulty[0],'number' );
                });
               });
               describe('dataStats',() => {
                     it('deberia ser una función',() => {
                       assert.equal(typeof window.dataStats, 'function');
                     });
                     it('debería arrojar un objeto', () => {
                       let filterDataStats = window.dataStats(window.data);
                       assert.equal(typeof filterDataStats[1],'object' );
                     });
                    });
>>>>>>> 9d47590739d6d0c7d79301314e9d57a25e14240a
