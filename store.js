//global variables for food and price
var foods =[];
var prices= [];
var tax = 1.04712;
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
  if(Result1 >0){
  window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
  var newText = document.createTextNode(Result1 + " " + foods[0] + " $" + F1P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
  else if(Result1 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
  localStorage.setItem("foodS1", F1P);
}

//button 2
function ShowResult2(){
  var P2beforeT = prices[1];
  var Result2 = document.getElementById('food2Quatity').value;
  document.getElementById('food2Quatity').value = "";
  var PT2P = Result2 * P2beforeT;
  var T2P = PT2P * tax;
  var F2P = T2P.toFixed(2);
  if(Result2 >0){
  window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result2 +" " + foods[1] + " $" + F2P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
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
  if(Result3 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
    var newText = document.createTextNode(Result3 + " " + foods[2] + " $" + F3P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
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
  if(Result4 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
    var newText = document.createTextNode(Result4 + " " + foods[3] + " $" + F4P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
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
  if(Result5 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
    var newText = document.createTextNode(Result5 + " " + foods[4] + " $" + F5P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
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
  if(Result6 >0){
    window.alert('Item has been added, Please scroll down to finish your purchase');
  var newli = document.createElement('li');
  var newText = document.createTextNode(Result6 + " " + foods[5] + " $" + F6P);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
    else if(Result6 == ""){
  window.alert('please select your quantity');
  }
  else{
    window.alert("quantity can't be zero");
  }
  localStorage.setItem('test', F6P);
}

//button transform to next page
function nextpage(){
  location.href="result.html";
  
}

//page2 java script codes
document.getElementById('menu1').innerHTML = localStorage.getItem('test');