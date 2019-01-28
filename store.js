//global variables for food and price
var foods =[];
var prices= [];
var tax = 4.712;
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
  var PbeforeT = prices[0];
  var ActualP = (PbeforeT * tax).tofixed(2);
  var Result1 = document.getElementById('food1Quatity').value;
  document.getElementById('food1Quatity').value = "";
  if(Result1 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result1 +" " + foods[0] + " $ " + ActualP);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

//button 2
function ShowResult2(){
    var PbeforeT = prices[1];
  var ActualP = (PbeforeT * tax).tofixed(2);
  var Result2 = document.getElementById('food2Quatity').value;
  document.getElementById('food2Quatity').value = "";
  if(Result2 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result2 +" " + foods[1] + " $ " + ActualP);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

//button 3
function ShowResult3(){
  var Result3 = document.getElementById('food3Quatity').value;
  document.getElementById('food3Quatity').value = "";
  if(Result3 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result3 +" " + foods[2]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

//button 4
function ShowResult4(){
  var Result4 = document.getElementById('food4Quatity').value;
  document.getElementById('food4Quatity').value = "";
  if(Result4 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result4 +" " + foods[3]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

//button 5
function ShowResult5(){
  var Result5 = document.getElementById('food5Quatity').value;
  document.getElementById('food5Quatity').value = "";
  if(Result5 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result5 +" " + foods[4]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

//button 6
function ShowResult6(){
  var Result6 = document.getElementById('food6Quatity').value;
  document.getElementById('food6Quatity').value = "";
  if(Result6 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result6 +" " + foods[5]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}

function nextpage(){
  location.href="result.html";
  document.getElementById('menu1').innerHTML = localStorage.getItem('Result1');
}