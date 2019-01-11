const resultDataImg = window.dataImg(window.data);
const resultDataName = window.dataName(window.data);
const resultDataSplash = window.dataSplash(window.data);
const resultDataTitle = window.dataTitle(window.data);
const resultDataInfo = window.dataInfo(window.data);
const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
const resultDataBlurb = window.dataBlurb(window.data);
const resultDataStats = window.dataStats(window.data);
const resultDataStatHp = window.dataStatHp(resultDataStats);
const resultStatMp = window.dataStatMp(resultDataStats);
const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
const resultDataStatArmor = window.dataStatArmor (resultDataStats);
const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
const resultDataStatTags = window.dataStatTags (window.data);

for (let i = 0; i < resultDataImg.length; i++) {
    document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
}
document.getElementById('search').addEventListener('keypress',(event)=> {
  let tecla = (document.all) ? event.keyCode :event.which;
  if (tecla==13){
    document.getElementById("btn-search").click();
    event.preventDefault();
  } else {
    return false;
  }
});
document.getElementById('btn-tank').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Tank';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
document.getElementById('btn-fighter').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Fighter';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
document.getElementById('btn-mage').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Mage';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
document.getElementById('btn-assassin').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Assassin';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
document.getElementById('btn-support').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Support';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
document.getElementById('btn-marksman').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Marksman';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.filterData(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
});
//z-a filtro
document.getElementById('btn-desc').addEventListener('click', (event) => {
    event.preventDefault();
//const condition = 'name';
    document.getElementById('root').innerHTML = " ";
    const resultDataImg = window.dataImg(window.data);
    const resultDataName = window.dataName(window.data);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i= window.data.length-1; i >= 0; i--) {
    document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
  }
});
document.getElementById('btn-search').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = document.getElementById('search').value;
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = window.dataSearch(window.data,condition);
    const resultDataImg = window.dataImg(resultFilterData);
    const resultDataName = window.dataName(resultFilterData);
    const resultDataSplash = window.dataSplash(resultFilterData);
    const resultDataTitle = window.dataTitle(resultFilterData);
    const resultDataInfo = window.dataInfo(resultFilterData);
    const resultDataInfoAttack = window.dataInfoAttack(resultDataInfo);
    const resultDataInfoDefense = window.dataInfoDefense(resultDataInfo);
    const resultDataInfoMagic = window.dataInfoMagic(resultDataInfo);
    const resultDataInfoDifficulty = window.dataInfoDifficulty(resultDataInfo);
    const resultDataBlurb = window.dataBlurb(window.data);
    const resultDataStats = window.dataStats(window.data);
    const resultDataStatHp = window.dataStatHp(resultDataStats);
    const resultStatMp = window.dataStatMp(resultDataStats);
    const resultDataStatMoveSpeed = window.dataStatMoveSpeed (resultDataStats);
    const resultDataStatArmor = window.dataStatArmor (resultDataStats);
    const resultDataStatAttackRange = window.dataStatAttackRange (resultDataStats);
    const resultDataStatHpRegen = window.dataStatHpRegen (resultDataStats);
    const resultDataStatMpRegen = window.dataStatMpRegen (resultDataStats);
    const resultDataStatTags = window.dataStatTags (window.data);
    for (let i = 0; i < resultDataImg.length; i++) {
    document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    for (let i =0 ; i < resultDataName.length; i++){
        document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('myModal').innerHTML =
            '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
                '<span class="close">&times;</span>' +
                '<h1>' + resultDataName[i] + '</h1>' +
                '<h3>' + resultDataTitle[i] + '</h3>' +
                '<p>'  + resultDataBlurb [i] + '</p>' +
                '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
                //
                '<div class="info">'+
                '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '</div>'+
    //
                '<div class="statistics">'+
                '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
                '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
                '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
                '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
                '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
                '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
                '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
                '</div>'+
            '</div>'
            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
          }
        })
    }
    }
});
for (let i =0 ; i < resultDataName.length; i++){
    document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
        event.preventDefault();
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
        document.getElementById('myModal').innerHTML =
        '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; background-size: 100%;background-repeat: no-repeat;" >' +
            '<span class="close">&times;</span>' +
            '<h1>' + resultDataName[i] + '</h1>' +
            '<h3>' + resultDataTitle[i] + '</h3>' +
            '<p>'  + resultDataBlurb [i] + '</p>' +
            '<p id="tag">'+ "Tag: " + resultDataStatTags[i]+ '</p>' +
            //
            '<div class="info">'+
            '<br>Attack<meter min="0" low="4" value="' + resultDataInfoAttack[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
            '<br>Defense <meter min="0" low="4" value="' + resultDataInfoDefense[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
            '<br>Mage <meter min="0" low="4" value="' + resultDataInfoMagic[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
            '<br>Difficulty <meter min="0" low="4" value="' + resultDataInfoDifficulty[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
            '</div>'+
//
            '<div class="statistics">'+
            '<br>Hp <meter min="300" low="500" value="' + resultDataStatHp[i] + '" high="580" max="700" optimum= "700"></meter><br>' +
            '<br>Hp Regen <meter min="0" low="4" value="' + resultDataStatHpRegen[i] + '" high="6" max="10" optimum= "10"></meter><br>' +
            '<br> Mp <meter min="90" low="270" value="' + resultStatMp[i] + '" high="400" max="500" optimum= "500"></meter><br>' +
            '<br>Mp Regen <meter min="0" low="5" value="' + resultDataStatMpRegen[i] + '" high="7" max="13" optimum= "13"></meter><br>' +
            '<br>Movespeed <meter min="300" low="310" value="' + resultDataStatMoveSpeed[i] + '" high="320" max="350" optimum= "350"></meter><br>' +
            '<br>Armor <meter min="20" low="22" value="' + resultDataStatArmor[i] + '" high="24" max="30" optimum= "30"></meter><br>' +
            '<br>Attack Range <meter min="90" low="250" value="' + resultDataStatAttackRange[i] + '" high="400" max="600" optimum= "600"></meter><br>' +
            '</div>'+
        '</div>'
        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
        modal.style.display = "none";
      }
    })
}
