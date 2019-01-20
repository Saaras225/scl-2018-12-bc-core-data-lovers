window.modal = (character)=>{
  return  '<div class="modal-content" style="background-image: url(' + character.splash + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
    '<span class="close">&times;</span>' +
    '<h1>' + character.name + '</h1>' +
    '<h3>' + character.title + '</h3>' +
    '<p>' + character.blurb + '</p>' +
    '<p id="tag">' + "Tag: " + character.tags + '</p>' +
    //
    '<div class="info">' +
    '<br>Attack  <meter min="0" low="4" value="' + character.info.attack + '" high="6" max="10" optimum= "10"></meter><br>' +
    '<br>Defense <meter min="0" low="4" value="' + character.info.defense + '" high="6" max="10" optimum= "10"></meter><br>' +
    '<br>Mage <meter min="0" low="4" value="' + character.info.magic + '" high="6" max="10" optimum= "10"></meter><br>' +
    '<br>Difficulty <meter min="0" low="4" value="' + character.info.difficulty + '" high="6" max="10" optimum= "10"></meter><br>' +
    '</div>' +
    //
    '<div class="statistics">' +
    '<br>Hp <meter min="300" low="500" value="' + character.stats.hp + '" high="580" max="700" optimum= "700"></meter><br>' +
    '<br>Hp Regen <meter min="0" low="4" value="' + character.stats.hpregen + '" high="6" max="10" optimum= "10"></meter><br>' +
    '<br> Mp <meter min="90" low="270" value="' + character.stats.mp + '" high="400" max="500" optimum= "500"></meter><br>' +
    '<br>Mp Regen <meter min="0" low="5" value="' + character.stats.mpregen + '" high="7" max="13" optimum= "13"></meter><br>' +
    '<br>Movespeed <meter min="300" low="310" value="' + character.stats.movespeed + '" high="320" max="350" optimum= "350"></meter><br>' +
    '<br>Armor <meter min="20" low="22" value="' + character.stats.armor + '" high="24" max="30" optimum= "30"></meter><br>' +
    '<br>Attack  Range <meter min="90" low="250" value="' + character.stats.attackrange + '" high="400" max="600" optimum= "600"></meter><br>' +
    '</div>' +
    '</div>';
}
//function create
window.createCharacter=(data)=>{
  for (let i = 0; i < data.length; i++) {
      document.getElementById('root').innerHTML += '<button id="btn-' + data[i].id + '"><img src="' + data[i].img + '"><p>' + data[i].name + '</p></button>';
  }
  for (let i = 0; i < data.length; i++) {
      document.getElementById('btn-' + data[i].id + '').addEventListener('click', (event) => {
          event.preventDefault();
          const modal = document.getElementById('myModal');
          modal.style.display = "block";
          document.getElementById('myModal').innerHTML = window.modal(data[i]);
          const span = document.getElementsByClassName("close")[0];
          span.onclick = function () {
              modal.style.display = "none";
          }
      })
  }
}
window.generateFilter=(elementId, condition)=>{
  document.getElementById(elementId).addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('root').innerHTML = " ";
      const resultFilterData = window.filterData(window.data, condition);
      window.datafiltered = resultFilterData;
      window.createCharacter(window.datafiltered);
    });
}
// )se dibuja al entrar en la pagina
window.createCharacter(window.data);

document.getElementById('btn-todos').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('root').innerHTML = " ";
    window.datafiltered = window.data;
    window.createCharacter(window.data);
});

window.generateFilter('btn-tank','Tank');
window.generateFilter('btn-fighter','Fighter');
window.generateFilter('btn-mage','Mage');
window.generateFilter('btn-assassin','Assassin');
window.generateFilter('btn-support','Support');
window.generateFilter('btn-marksman','Marksman');

//z-a filtro
document.getElementById('btn-desc').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('root').innerHTML = " ";
    window.createCharacter(window.datafiltered.reverse());
});
//a-z
document.getElementById('btn-asc').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('root').innerHTML = " ";
    window.createCharacter(window.datafiltered);
});
//
document.getElementById('btn-search').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = document.getElementById('search').value;
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.dataSearch(window.data, condition);
    window.datafiltered = resultFilterData;
    window.createCharacter(window.datafiltered);
});
