var food1 =[];
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var Storedata = JSON.parse(this.responseText);
    var foodN1= Storedata.foods[0].name;
    food1.push(foodN1);
    document.getElementById('food1Name').innerHTML = Storedata.foods[0].name;
    document.getElementById('food1price').innerHTML = "$" + Storedata.foods[0].price;
}
};
xmlhttp.open("GET" , "store.json", true);
xmlhttp.send();
function ShowResult1(){
  var Result1 = document.getElementById('food1Quatity').value;
  document.getElementById('food1Quatity').value = "";
  if(Result1 >0){
  var newli = document.createElement('li');
  var newText = document.createTextNode( Result1 +" " + food1[0]);
 newli.appendChild(newText);
 var olTag = document.getElementsByTagName('ol')[0];
 olTag.appendChild(newli);
  }
}
function nextpage(){
  location.href="result.html";
  document.getElementById('menu1').innerHTML = localStorage.getItem('Result1');
}

