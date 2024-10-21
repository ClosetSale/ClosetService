function FindPWpopup(){
  var url = "/forgot/pw";
  var name = "";
  var option = "width = 400, height = 250, top = 100, left = 200, location = no";
  var popup = window.open(url,name,option);
}

var SignUp = new Array(10);
var idx = 0;

for(var i =0; i<SignUp.length; i++){
  SignUp[i] = new Array(3);
}

var compare = [['tnsrb486','1234','순규'],['tpdus486','1234','세연'],['dusrb486','1234','연규'],['tjsghd486','1234','선홍']]

function findPW(){
  var check = false;
  var Nickname = document.getElementById("infoNick").value;
  var Id = document.getElementById("infoID").value;
  for(var i=0; i<compare.length; i++){
    if(Nickname == compare[i][2] && Id == compare[i][0])
    {
      alert(Nickname+"님의 비밀번호는 "+compare[i][1]+"입니다.");
      window.close();
    }
  }
  alert("정보를 다시 입력해주세요");
}
