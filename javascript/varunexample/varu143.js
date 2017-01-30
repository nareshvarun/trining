var varu=function(n,a,array){
  var counter=0;
array.forEach(function(item){
    if(item==a){
      counter+=1;
    }
});
    if(counter==n){
      return true;
    }
    else{
      return false;
    }
  };
  console.log(varu(4,"raju",["raju","raju","raju","rani"]));
