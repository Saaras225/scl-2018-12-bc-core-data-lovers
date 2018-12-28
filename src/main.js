
const nombresLol= (dataLol)=> {
let nombres=[];
let keys= Object.keys(dataLol)
let selectOne= document.getElementById("selectUno");
let selectTwo= document.getElementById("selectDos");
for(let i=0;i<=keys.length;i++){
  if (keys[i]!==undefined && "name" in dataLol[keys[i]]){
        let option= document.createElement("OPTION");
        let option2= document.createElement("OPTION");
        txt= document.createTextNode(dataLol[keys[i]].name);
        txt2= document.createTextNode(dataLol[keys[i]].name);
        option.appendChild(txt);
        option2.appendChild(txt2);
        option.setAttribute("value",keys[i])
        option2.setAttribute("value",keys[i])
        selectOne.appendChild(option);
        selectTwo.appendChild(option2);

  }

    }
  };

  const cargarPersonaje=(dropdown)=>{
    var value=dropdown.value;
    var id=dropdown.id;
    if (dataLol[value]!=undefined && "splash" in dataLol[value]){
        var image=document.getElementById(id+"-img");
        image.setAttribute("src",dataLol[value].splash)
      } else {
        var image=document.getElementById(id+"-img");
        image.setAttribute("src","https://i.ytimg.com/vi/w8hKmIyXXmw/maxresdefault.jpg")
      }
  }
