//global variables for food and price
var foods =[];
var prices= [];
var tax = 1.04712;
localStorage.setItem('Store1', "");
localStorage.setItem('Store2', "");
localStorage.setItem('Store3', "");
localStorage.setItem('Store4', "");
localStorage.setItem('Store5', "");
localStorage.setItem('Store6', "");
localStorage.setItem('P1', "");
localStorage.setItem('P2', "");
localStorage.setItem('P3', "");
localStorage.setItem('P4', "");
localStorage.setItem('P5', "");
localStorage.setItem('P6', "");
//JSON file function. attacch json objects
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var Storedata = JSON.parse(this.responseText);
    //food number 1
    var foodN1= Storedata.foods[0].name;
    foods.push(foodN1);
    var priceD1 = Storedata.foods[0].price;
    prices.push(priceD1);
    document.getElementById('food1Name').innerHTML = Storedata.foods[0].name;
    document.getElementById('food1price').innerHTML = "$" + Storedata.foods[0].price;
    //food number 2
    var foodN2= Storedata.foods[1].name;
    foods.push(foodN2);
    var priceD2 = Storedata.foods[1].price;
    prices.push(priceD2);
    document.getElementById('food2Name').innerHTML = Storedata.foods[1].name;
    document.getElementById('food2price').innerHTML = "$" + Storedata.foods[1].price;
    //food number 3
    var foodN3= Storedata.foods[2].name;
    foods.push(foodN3);
    var priceD3 = Storedata.foods[2].price;
    prices.push(priceD3);
    document.getElementById('food3Name').innerHTML = Storedata.foods[2].name;
    document.getElementById('food3price').innerHTML = "$" + Storedata.foods[2].price;
    //food number 4
    var foodN4= Storedata.foods[3].name;
    foods.push(foodN4);
    var priceD4 = Storedata.foods[3].price;
    prices.push(priceD4);
    document.getElementById('food4Name').innerHTML = Storedata.foods[3].name;
    document.getElementById('food4price').innerHTML = "$" + Storedata.foods[3].price;
    //food number 5
    var foodN5= Storedata.foods[4].name;
    foods.push(foodN5);
    var priceD5 = Storedata.foods[4].price;
    prices.push(priceD5);
    document.getElementById('food5Name').innerHTML = Storedata.foods[4].name;
    document.getElementById('food5price').innerHTML = "$" + Storedata.foods[4].price;
    //food number 6
    var foodN6= Storedata.foods[5].name;
    foods.push(foodN6);
    var priceD6 = Storedata.foods[5].price;
    prices.push(priceD6);
    document.getElementById('food6Name').innerHTML = Storedata.foods[5].name;
    document.getElementById('food6price').innerHTML = "$" + Storedata.foods[5].price;
}
};
xmlhttp.open("GET" , "store.json", true);
xmlhttp.send();

//following are the button for purchase

//button 1
function ShowResult1(){
  var P1beforeT = prices[0];
  var Result1 = document.getElementById('food1Quatity').value;
  document.getElementById('food1Quatity').value = "";
  var PT1P = Result1 * P1beforeT;
  var T1P = PT1P * tax;
  var F1P = T1P.toFixed(2);
     var Save1 = Result1 + " " + foods[0] + " $" + F1P;
    localStorage.setItem('Store1', Save1);
    var load1 = localStorage.getItem('Store1');
    localStorage.setItem('P1', F1P);
  if(Result1 >0){
  window.alert('Item has been added, Please scroll down to finish your purchase');
    document.getElementById('show1').innerHTML = load1;
  }
  else if(Result1 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
  localStorage.setItem("foodS1", F1P);
  AP1=0;
}

//button 2
function ShowResult2(){
  var P2beforeT = prices[1];
  var Result2 = document.getElementById('food2Quatity').value;
  document.getElementById('food2Quatity').value = "";
  var PT2P = Result2 * P2beforeT;
  var T2P = PT2P * tax;
  var F2P = T2P.toFixed(2);
  var Save2 = Result2 + " " + foods[1] + " $" + F2P;
  localStorage.setItem('Store2', Save2);
  var load2 = localStorage.getItem('Store2');
  localStorage.setItem('P2', F2P);
  if(Result2 >0){
  window.alert('Item has been added, Please scroll down to finish your purchase');
    document.getElementById('show2').innerHTML = load2;
  }
    else if(Result2 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
}

//button 3
function ShowResult3(){
  var P3beforeT = prices[2];
  var Result3 = document.getElementById('food3Quatity').value;
  document.getElementById('food3Quatity').value = "";
  var PT3P = Result3 * P3beforeT;
  var T3P = PT3P * tax;
  var F3P = T3P.toFixed(2);
     var Save3 = Result3 + " " + foods[2] + " $" + F3P;
    localStorage.setItem('Store3', Save3);
    var load3 = localStorage.getItem('Store3');
    localStorage.setItem('P3', F3P);
  if(Result3 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');

    document.getElementById('show3').innerHTML = load3;
  }
    else if(Result3 === ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
}

//button 4
function ShowResult4(){
  var P4beforeT = prices[3];
  var Result4 = document.getElementById('food4Quatity').value;
  document.getElementById('food4Quatity').value = "";
  var PT4P = Result4 * P4beforeT;
  var T4P = PT4P * tax;
  var F4P = T4P.toFixed(2);
   var Save4 = Result4 + " " + foods[3] + " $" + F4P;
  localStorage.setItem('Store4', Save4);
  var load4 = localStorage.getItem('Store4');
  localStorage.setItem('P4', F4P);
  if(Result4 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
 document.getElementById('show4').innerHTML = load4;
  }
    else if(Result4 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
}

//button 5
function ShowResult5(){
  var P5beforeT = prices[4];
  var Result5 = document.getElementById('food5Quatity').value;
  document.getElementById('food5Quatity').value = "";
  var PT5P = Result5 * P5beforeT;
  var T5P = PT5P * tax;
  var F5P = T5P.toFixed(2);
  var Save5 = Result5 + " " + foods[4] + " $" + F5P;
  localStorage.setItem('Store5', Save5);
  var load5 = localStorage.getItem('Store5');
  localStorage.setItem('P5', F5P);
  if(Result5 >0){
  window.alert('Item has been added, Please scroll down to finish your purchase');
  document.getElementById('show5').innerHTML = load5;
  }
    else if(Result5 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
 
 
}

//button 6
function ShowResult6(){
  var P6beforeT = prices[5];
  var Result6 = document.getElementById('food6Quatity').value;
  document.getElementById('food6Quatity').value = "";
  var PT6P = Result6 * P6beforeT;
  var T6P = PT6P * tax;
  var F6P = T6P.toFixed(2);
  var Save6 = Result6 + " " + foods[5] + " $" + F6P;
  localStorage.setItem('Store6', Save6);
  var load6 = localStorage.getItem('Store6');
  localStorage.setItem('P6', F6P);
  if(Result6 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
  document.getElementById('show6').innerHTML = load6;
  }
    else if(Result6 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
}


//page2 java script codes
var load1 = localStorage.getItem('Store1');
var load2 = localStorage.getItem('Store2');
var load3 = localStorage.getItem('Store3');
var load4 = localStorage.getItem('Store4');
var load5 = localStorage.getItem('Store5');
var load6 = localStorage.getItem('Store6');
var AP1 = Number(localStorage.getItem('P1'));
var AP2 = Number(localStorage.getItem('P2'));
var AP3 = Number(localStorage.getItem('P3'));
var AP4 = Number(localStorage.getItem('P4'));
var AP5 = Number(localStorage.getItem('P5'));
var AP6 = Number(localStorage.getItem('P6'));
var ToTal = AP1 + AP2 + AP3 + AP4 + AP5 + AP6;
var sTotal = ToTal.toFixed(2);
var ol = document.getElementById('Slist');

//add item
//first
var li1 = document.createElement('li');
var liText1 = document.createTextNode(load1);
li1.appendChild(liText1);
ol.appendChild(li1);
if(AP1 <= 0 ){
   ol.removeChild(li1);
}
//second
var li2 = document.createElement('li');
var liText2 = document.createTextNode(load2);
li2.appendChild(liText2);
ol.appendChild(li2);
if (AP2 <= 0) {
  ol.removeChild(li2);
}
//third
var li3 = document.createElement('li');
var liText3 = document.createTextNode(load3);
li3.appendChild(liText3);
ol.appendChild(li3);
if (AP3 <= 0) {
  ol.removeChild(li3);
}
//forth
var li4 = document.createElement('li');
var liText4 = document.createTextNode(load4);
li4.appendChild(liText4);
ol.appendChild(li4);
if (AP4 <= 0) {
  ol.removeChild(li4);
}
//fifth
var li5 = document.createElement('li');
var liText5 = document.createTextNode(load5);
li5.appendChild(liText5);
ol.appendChild(li5);
if (AP5 <= 0) {
  ol.removeChild(li5);
}
//sixth
var li6 = document.createElement('li');
var liText6 = document.createTextNode(load6);
li6.appendChild(liText6);
ol.appendChild(li6);
if (AP6 <= 0) {
  ol.removeChild(li6);
}
//subtotal
document.getElementById('subtotal').innerHTML = "Your total is " + "$" +sTotal;
//button transform to next page
function nextpage() {
 location.href = "result.html";
}
