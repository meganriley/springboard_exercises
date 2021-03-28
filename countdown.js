function countdown(num){
  var startNum = num;

  var fn = function(){
    startNum--;

    if(startNum === 0){
      clearInterval(timerId);
      console.log("DONE!");
    } else (
      console.log(startNum)
    )
}

  var timerId = setInterval(
     fn , 1000);

 }

 countdown(4)
