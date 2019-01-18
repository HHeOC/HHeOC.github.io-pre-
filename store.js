var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var Storedata = JSON.parse(this.responseText);
    document.getElementById('food1Name').innerHTML = Storedata.foods[0].name;
     document.getElementById('food1price').innerHTML = Storedata.foods[0].price;
  }
};
xmlhttp.open("GET" , "store.json", true);
xmlhttp.send();