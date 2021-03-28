function randomGame(min, max){
  var num;
  var counter = 0;
  var timer = setInterval(function(){
    num = Math.random() * (max - min) + min;;
    counter++
    if(num > .75) {
      clearInterval(timer);
      console.log(counter);
    }
  },1000)
}

randomGame(0,1)