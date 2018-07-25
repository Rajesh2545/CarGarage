// function JsonFile(file,callback){
//   var cars=new XMLHttpRequest();
//   cars.overrideMimeType("application/json");
//   cars.open("GET",file,true);
//   cars.onreadystatechange=function(){
//     if (cars.readyState===4 && cars.status=="200") {
//       callback(cars.responseText);
//     }
//   }
//   cars.send(null);
// };
// JsonFile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   getCardata(data.car);
// })

// Fetch & Promises method

function JsonFile(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(Error,"Error");
      }
    })
  })
}
var text=JsonFile('data.json');
text.then(data=>{
  console.log(data);
  getCardata(data.car);
})

function Contact_us(){

}

var body=document.querySelector("#body");
var h1=document.createElement("h1");
h1.textContent="Car Garage";
body.appendChild(h1);

var nav=document.createElement("div");
nav.classList.add("navbar");
var a=document.createElement("a");
a.href="#";
a.classList.add("active");
a.textContent="About";
nav.appendChild(a);
var a1=document.createElement("a");
a1.click=Contact_us();
a1.href="indexdb.html";
a1.textContent="Contact Us";
nav.appendChild(a1);
body.appendChild(nav);
function getCardata(carInfo){
  var mainDiv=document.createElement("div");
  mainDiv.classList.add("mainDiv");
  body.appendChild(mainDiv);
  for(i in carInfo){
    var childDiv=document.createElement("div");
    childDiv.classList.add("childDiv");
    mainDiv.appendChild(childDiv);
    var name=document.createElement("h4");
    name.textContent=carInfo[i].name;
    childDiv.appendChild(name);

    var image=document.createElement("img");
    image.src=carInfo[i].image;
    image.alt=carInfo[i].name;
    childDiv.appendChild(image);
    var price=document.createElement("p");
    price.classList.add("para");
    price.textContent=carInfo[i].price;
    price.style.fontWeight="550";
    childDiv.appendChild(price);
    var type=document.createElement("p");
    price.classList.add("para");
    type.textContent=carInfo[i].type;
    childDiv.appendChild(type);
    var link=document.createElement("a");
    link.href="details.html?id="+carInfo[i].id;
    link.textContent="GET ON ROAD PRICE";
    childDiv.appendChild(link);

  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
