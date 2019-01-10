// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*window.lol = {
  championImg: (data) => {
    let img = [];
    for (let i=0 ; i < data.length; i++){
      img.push(data[i].img);
    }
    return img;
  },
  championName: (data) => {
    let name = [];
    for (let i=0 ; i < data.length; i++){
      name.push(data[i].name);
    }
    return name;
  },
  championTop : (data) => {
    let tags = {};
    let approved = [];
    for (let i =0 ; i < data.length; i ++){
      tags = Object.values(data[i].tags);
      approved = tags.filter(tags => tags  === 'Tank' || tags === 'Fighter');
      return approved;
    }
  }
};*/

const data = Object.values(LOL.data);

const dataImg = (data) => {
  let img = [];
  for (let i = 0; i < data.length; i++) {
    img.push(data[i].img);
  }
  return img;
}
const dataName = (data) => {
  let name = [];
  for (let i = 0; i < data.length; i++) {
    name.push(data[i].name);
  }
  return name;
}
const dataSplash = (data) => {
  let splash = [];
  for (let i = 0; i < data.length; i++) {
    splash.push(data[i].splash);
  }
  return splash;
}
const dataTitle = (data) => {
  let title = [];
  for (let i = 0; i < data.length; i++) {
    title.push(data[i].title);
  }
  return title;
}
//
const dataBlurb= (data)=>{
  let blurb=[];
  for (let i =0;i<data.length;i++) {
    blurb.push(data[i].blurb);
  }
  return blurb;
  //
}
const filterData = (data,condition) => {
  const filter = data.filter(function(el){
    return el.tags[0] === condition || el.tags[1] === condition;
  });
  return filter;
}
const dataInfo = (data) => {
  let info = [];
  for (let i = 0; i < data.length; i++) {
    info.push(data[i].info);
  }
  return info;
}
const dataInfoAttack = (data) => {
  let attack = [];
  for (let i = 0; i < data.length; i++) {
    attack.push(data[i].attack);
  }
  return attack;
}
const dataInfoDefense = (data) => {
  let defense = [];
  for (let i = 0; i < data.length; i++) {
    defense.push(data[i].defense);
  }
  return defense;
}
const dataInfoMagic = (data) => {
  let magic = [];
  for (let i = 0; i < data.length; i++) {
    magic.push(data[i].magic);
  }
  return magic;
}
const dataInfoDifficulty = (data) => {
  let difficulty = [];
  for (let i = 0; i < data.length; i++) {
    difficulty.push(data[i].difficulty);
  }
  return difficulty;
}
//
const dataStats = (data) => {
  let stats= [];
  for (let i= 0; i<data.length; i++) {
    stats.push(data[i].stats);
  }
  return stats;
}
const dataStatsHp = (data) => {
  let hp = [];
  for (let i = 0; i < data.length; i++) {
    hp.push(data[i].hp);
  }
  return hp;
}
const dataStatMp = (data) => {
  let mp = [];
  for (let i = 0; i < data.length; i++) {
    mp.push(data[i].mp);
  }
  return mp;
}
const dataStatMoveSpeed = (data) => {
  let movespeed = [];
  for (let i = 0; i < data.length; i++) {
    movespeed.push(data[i].movespeed);
  }
  return movespeed;
}
const dataStatArmor = (data) => {
  let armor = [];
  for (let i = 0; i < data.length; i++) {
    armor.push(data[i].armor);
  }
  return armor;
}
const dataStatAttackRange = (data) => {
  let attackrange = [];
  for (let i = 0; i < data.length; i++) {
    attackrange.push(data[i].attackrange);
  }
  return attackrange;
}
const dataStatHpRegen = (data) => {
  let hpregen = [];
  for (let i = 0; i < data.length; i++) {
    hpregen.push(data[i].hpregen);
  }
  return hpregen;
}
const dataStatMpRegen = (data) => {
  let mpregen = [];
  for (let i = 0; i < data.length; i++) {
    mpregen.push(data[i].mpregen);
  }
  return mpregen;
}
const dataStatTags = (data) => {
  let tags = [];
  for (let i = 0; i < data.length; i++) {
    tags.push(data[i].tags);
  }
  return tags;
}
const filterSearch = (data,condition) => {
  let search= data.filter(function(el){
    return el.name.toUpperCase().indexOf(condition.toUpperCase())>= 0;
  });
  return search;
}

/*  window.lol= {
  dataImg = (data) => {
    let img = [];
    for (let i = 0; i < data.length; i++) {
      img.push(data[i].img);
    }
    return img;
  }
  dataName = (data) => {
    let name = [];
    for (let i = 0; i < data.length; i++) {
      name.push(data[i].name);
    }
    return name;
  }
  dataSplash = (data) => {
    let splash = [];
    for (let i = 0; i < data.length; i++) {
      splash.push(data[i].splash);
    }
    return splash;
  }
  dataTitle = (data) => {
    let title = [];
    for (let i = 0; i < data.length; i++) {
      title.push(data[i].title);
    }
    return title;
  }
  //

 dataBlurb= (data)=>{
    let blurb=[];
    for (let i =0;i<data.length;i++) {
      blurb.push(data[i].blurb);
    }
    return blurb;
    //
  }
filterData = (data,condition) => {
    const filter = data.filter(function(el){
      return el.tags[0] === condition || el.tags[1] === condition;
    });
    return filter;
  },
dataInfo = (data) => {
    let info = [];
    for (let i = 0; i < data.length; i++) {
      info.push(data[i].info);
    }
    return info;
  }
dataInfoAttack = (data) => {
    let attack = [];
    for (let i = 0; i < data.length; i++) {
      attack.push(data[i].attack);
    }
    return attack;
  }
 dataInfoDefense = (data) => {
    let defense = [];
    for (let i = 0; i < data.length; i++) {
      defense.push(data[i].defense);
    }
    return defense;
  }
 dataInfoMagic = (data) => {
    let magic = [];
    for (let i = 0; i < data.length; i++) {
      magic.push(data[i].magic);
    }
    return magic;
  }
 dataInfoDifficulty = (data) => {
    let difficulty = [];
    for (let i = 0; i < data.length; i++) {
      difficulty.push(data[i].difficulty);
    }
    return difficulty;
  }
  //
  dataStats = (data) => {
    let stats= [];
    for (let i= 0; i<data.length; i++) {
      stats.push(data[i].stats);
    }
    return stats;
  }
  dataStatsHp = (data) => {
    let hp = [];
    for (let i = 0; i < data.length; i++) {
      hp.push(data[i].hp);
    }
    return hp;
  }
  dataStatMp = (data) => {
    let mp = [];
    for (let i = 0; i < data.length; i++) {
      mp.push(data[i].mp);
    }
    return mp;
  }
  dataStatMoveSpeed = (data) => {
    let movespeed = [];
    for (let i = 0; i < data.length; i++) {
      movespeed.push(data[i].movespeed);
    }
    return movespeed;
  }
  dataStatArmor = (data) => {
    let armor = [];
    for (let i = 0; i < data.length; i++) {
      armor.push(data[i].armor);
    }
    return armor;
  }
  dataStatAttackRange = (data) => {
    let attackrange = [];
    for (let i = 0; i < data.length; i++) {
      attackrange.push(data[i].attackrange);
    }
    return attackrange;
  }
  dataStatHpRegen = (data) => {
    let hpregen = [];
    for (let i = 0; i < data.length; i++) {
      hpregen.push(data[i].hpregen);
    }
    return hpregen;
  }
  dataStatMpRegen = (data) => {
    let mpregen = [];
    for (let i = 0; i < data.length; i++) {
      mpregen.push(data[i].mpregen);
    }
    return mpregen;
  }
  dataStatTags = (data) => {
    let tags = [];
    for (let i = 0; i < data.length; i++) {
      tags.push(data[i].tags);
    }
    return tags;
  }
  filterSearch = (data,condition) => {
    let search= data.filter(function(el){
      return el.name.toUpperCase().indexOf(condition.toUpperCase())>= 0;
    });
    return search;
  }
};*/

window.data= data;
window.dataImg = dataImg;
window.dataName = dataName;
window.dataSplash = dataSplash;
window.dataTitle = dataTitle;
window.filterData = filterData
window.dataInfo = dataInfo;
window.dataInfoAttack = dataInfoAttack;
window.dataInfoDefense = dataInfoDefense;
window.dataInfoMagic = dataInfoMagic;
window.dataInfoDifficulty = dataInfoDifficulty;
window.dataBlurb = dataBlurb;
window.dataStats = dataStats;
window.dataStatHp = dataStatsHp;
window.dataStatMp = dataStatMp;
window.dataStatMoveSpeed = dataStatMoveSpeed;
window.dataStatArmor = dataStatArmor;
window.dataStatAttackRange = dataStatAttackRange;
window.dataStatHpRegen = dataStatHpRegen;
window.dataStatMpRegen = dataStatMpRegen;
window.dataSearch = filterSearch;
window.dataStatTags = dataStatTags;
