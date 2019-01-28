var foods =[];
var prices= []; 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var Storedata = JSON.parse(this.responseText);
    var foodN1= Storedata.foods[0].name;
    foods.push(foodN1);
    var priceD1 = Storedata.foods[0].price;
    prices.push(priceD1);
    document.getElementById('food1Name').innerHTML = Storedata.foods[0].name;
    document.getElementById('food1price').innerHTML = "$" + Storedata.foods[0].price;
    var foodN2= Storedata.foods[1].name;
    foods.push(foodN2);
    var priceD2 = Storedata.foods[1].price;
    prices.push(priceD2);
    document.getElementById('food2Name').innerHTML = Storedata.foods[1].name;
    document.getElementById('food2price').innerHTML = "$" + Storedata.foods[1].price;
}
};
xmlhttp.open("GET" , "store.json", true);
xmlhttp.send();
function ShowResult1(){
  var Result1 = document.getElementById('food1Quatity').value;
  document.getElementById('food1Quatity').value = "";
  if(Result1 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result1 +" " + foods[0]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}
function ShowResult2(){
  var Result2 = document.getElementById('food2Quatity').value;
  document.getElementById('food2Quatity').value = "";
  if(Result2 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result2 +" " + foods[1]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}
function nextpage(){
  location.href="result.html";
  document.getElementById('menu1').innerHTML = localStorage.getItem('Result1');
}
