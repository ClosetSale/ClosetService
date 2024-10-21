function FindIDpopup(){
  var url = "/forgot/id";
  var name = "";
  var option = "width = 400, height = 270, top = 100, left = 200, location = no";
  var popup = window.open(url,name,option);
}

var SignUp = new Array(10);
var idx = 0;

for(var i =0; i<SignUp.length; i++){
  SignUp[i] = new Array(3);
}

var compare = [['tnsrb486','2018038035','순규'],['tpdus486','2018038027','세연'],['dusrb486','2018038038','연규'],['tjsghd486','2018038028','선홍']]
console.log(compare[0][0]);

function findid(){
  console.log("qwer")
  var check = false;
  var Nickname = document.getElementById("infoNick").value;
  for(var i=0; i<compare.length; i++){
    if(Nickname == compare[i][2])
    {
      alert(Nickname+"님의 아이디는 "+compare[i][0]+"입니다.");
      window.close();
    }
  }
}
