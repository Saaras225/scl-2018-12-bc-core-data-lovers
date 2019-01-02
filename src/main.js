const resultDataImg = dataImg(data);
const resultDataName = dataName(data);

for (let i = 0; i < resultDataImg.length; i++) {
    document.getElementById('root').innerHTML += '<button id="btn-'+ resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
}
document.getElementById('btn-tank').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Tank';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
document.getElementById('btn-fighter').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Fighter';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
document.getElementById('btn-mage').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Mage';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
document.getElementById('btn-assassin').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Assassin';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
document.getElementById('btn-support').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Support';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
document.getElementById('btn-marksman').addEventListener('click', (event) => {
    event.preventDefault();
    const condition = 'Marksman';
    document.getElementById('root').innerHTML = " ";
    const resultFilterData = filterData(data,condition);
    const resultDataImg = dataImg(resultFilterData);
    const resultDataName = dataName(resultFilterData);
    for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
    }

});
for (let i =0 ; i < resultDataName.length; i++){
    document.getElementById('btn-'+ resultDataName[i] +'').addEventListener('click', (event) => {
        event.preventDefault();
        const resultDataSplash = dataSplash(data);
        const resultDataTitle = dataTitle(data);
        const resultDataInfo = dataInfo(data);
        const resultDataInfoAttack = dataInfoAttack(resultDataInfo);
        const resultDataInfoDefense = dataInfoDefense(resultDataInfo);
        const resultDataInfoMagic = dataInfoMagic(resultDataInfo);
        const resultDataInfoDifficulty = dataInfoDifficulty(resultDataInfo);
        console.log(resultDataInfoAttack + " " + resultDataInfoDefense + " " + resultDataInfoMagic + " " + resultDataInfoDifficulty)
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
        document.getElementById('myModal').innerHTML =
        '<div class="modal-content" style="background-image: url(' + resultDataSplash[i] + '); width: 80%; height: 600; background-size: 100%;background-repeat: no-repeat;" >' +
            '<span class="close">&times;</span>' +
            '<h1>' + resultDataName[i] + '</h1>' + 
            '<h3>' + resultDataTitle[i] + '</h3>' +
            '<p>Some text in the Modal..</p>' +
            '<meter min="0" low="16" value="' + resultDataInfoAttack[i] + '" high="92" max="10">Alex</meter>Attack<br>' +
            '<meter min="0" low="16" value="' + resultDataInfoDefense[i] + '" high="92" max="10">Brandon</meter>Defense<br>' +
            '<meter min="0" low="16" value="' + resultDataInfoMagic[i] + '" high="92" max="10">Charlotte</meter>Magic<br>' +
            '<meter min="0" low="16" value="' + resultDataInfoDifficulty[i] + '" high="92" max="10">Sam</meter>Difficulty' +
        '</div>';
        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
        modal.style.display = "none";
      }
    })
    
}

