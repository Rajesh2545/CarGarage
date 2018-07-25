// grtting JSON data
function getJson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=getJson("data.json");
fetchedData.then(data=>{
  console.log(data);
  cars(data.car);
}).catch(new Error('error'));
// Browser Complatablity

function cars(carInfo){
var iDB=window.indexedDB || window.webkitIndexedDB || window.msIndexedDB || window.mozIndexedDB;
// open indexDB
var open=iDB.open("CarGarage",1); //indexed DB name & version

// creating Object Store
open.onupgradeneeded=function(data){
  var independent=open.result;
  var objStore=independent.createObjectStore("cars", {keyPath:"id"});
}
open.onsuccess=function(){
var independent=open.result;
var tdata=independent.transaction("cars", "readwrite");
var objStore=tdata.objectStore("cars");
for(i in carInfo){
  objStore.put({id:carInfo[i].id, data:{id:carInfo[i].id, name:carInfo[i].name, image:carInfo[i].image}});
}
var cdata=objStore.get(7);
cdata.onsuccess=function(e){
  console.log(cdata.result.data.name);
}
}
}
