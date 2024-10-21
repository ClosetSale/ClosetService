var vote = [1,2,3,4,5,6,7,8,9,10,11,12];
var copyvote = [0,0,0,0,0,0,0,0,0,0,0,0];
var max = 0;
var result=[0,0,0];

var btn1 = document.getElementById("monthcody1");

btn1.addEventListener("click", function (){
  var idx = 0;
  vote[0] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn2 = document.getElementById("monthcody2");
btn2.addEventListener("click", function (){
  var idx = 0;
  vote[1] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]===copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn3 = document.getElementById("monthcody3");
btn3.addEventListener("click", function (){
  var idx = 0;
  
  vote[2] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn4 = document.getElementById("monthcody4");
btn4.addEventListener("click", function (){
  var idx = 0;
  
  vote[3] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn5 = document.getElementById("monthcody5");
btn5.addEventListener("click", function (){
  var idx = 0;
  
  vote[4] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn6 = document.getElementById("monthcody6");
btn6.addEventListener("click", function (){
  var idx = 0;
  
  vote[5] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn7 = document.getElementById("monthcody7");
btn7.addEventListener("click", function (){
  var idx = 0;
  
  vote[6] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn8 = document.getElementById("monthcody8");
btn8.addEventListener("click", function (){
  var idx = 0;
  
  vote[7] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn9 = document.getElementById("monthcody9");
btn9.addEventListener("click", function (){
  var idx = 0;
  
  vote[8] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn10 = document.getElementById("monthcody10");
btn10.addEventListener("click", function (){
  var idx = 0;
  
  vote[9] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn11 = document.getElementById("monthcody11");
btn11.addEventListener("click", function (){
  var idx = 0;
  
  vote[10] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});

var btn12 = document.getElementById("monthcody12");
btn12.addEventListener("click", function (){
  var idx = 0;
  
  vote[11] += 1;
  copyvote = vote.slice();
  copyvote.sort(function compare(a,b){
    return a-b;
  });
  for(var i = copyvote.length-1; i>=copyvote.length-3; i--){
    for(var j = 0; j<copyvote.length; j++)
    {
      if(vote[j]==copyvote[i])
      {
        result[idx] = j;
        idx++;
        break;
      }
    }
  }
  document.getElementById("monthbest1").src = "../image/fall/fall" + Number(1+result[0]) + ".jpg"
  document.getElementById("monthbest2").src = "../image/fall/fall" + Number(1+result[1]) + ".jpg"
  document.getElementById("monthbest3").src = "../image/fall/fall" + Number(1+result[2]) + ".jpg"
});