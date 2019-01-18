document.getElementById('food1Name').innerHTML = "Curry CHICKEN KATSU";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var Storedata = JSON.parse(this.responseText);
    document.getElementById('food1Name').innerHTML = Storedata.food[0].name;
  }
};
xmlhttp.open("GET" , "store.json",true);
xmlhttp.send();
