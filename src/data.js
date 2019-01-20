const data = Object.values(LOL.data);

const filterData = (data,condition) => {
  const filter = data.filter(function(el){
    return el.tags[0] === condition || el.tags[1] === condition;
  });
  return filter;
}
const filterSearch = (data,condition) => {
  let search= data.filter(function(el){
    return el.name.toUpperCase().indexOf(condition.toUpperCase())>= 0;
  });
  return search;
}

window.data= data;
window.filterData = filterData
window.datafiltered=data;
window.dataSearch = filterSearch;

