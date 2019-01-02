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
};
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


window.dataImg = dataImg;
window.dataName = dataName;
window.dataSplash = dataSplash;
window.dataTitle = dataTitle;
window.filterData = filterData;
window.dataInfo = dataInfo;
window.dataInfoAttack = dataInfoAttack;
window.dataInfoDefense = dataInfoDefense;
window.dataInfoMagic = dataInfoMagic;
window.dataInfoDifficulty = dataInfoDifficulty;

