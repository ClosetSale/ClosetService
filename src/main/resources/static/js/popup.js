function popup(){
  var url = "/join";
  var name = "popup test";
  var option = "width = 450, height = 500, top = 100, left = 200, location = no";
  var popup = window.open(url,name,option);
}

var SignUp = new Array(10);
var idx = 0;

for(var i =0; i<SignUp.length; i++){
  SignUp[i] = new Array(3);
}

var compare = [['tnsrb486','1234','순규'],['tpdus486','1234','세연'],['dusrb486','1234','연규'],['tjsghd486','1234','선홍']]
console.log(compare[0][0]);

function infopush(){
  var id = document.getElementById("infoID").value;
  var pw = document.getElementById("infoPW").value;
  var nick = document.getElementById("infoNick").value;
  if(id =="" || pw == "" || nick == "")
  {
    alert("모든 정보를 입력해주세요");
  }
  else
  {
    SignUp[idx][0]= id;
    SignUp[idx][1]= pw;
    SignUp[idx][2]= nick;
    const info = [id,pw,nick];
    compare.push(info);
    idx++;
    alert("회원가입이 완료되었습니다.");
    window.close();
  }
}

function opencheck(chk){
  var obj = document.getElementsByName("sexual");
  for(var i = 0; i<obj.length; i++){
    if(obj[i] != chk){
      obj[i].checked = false;
    }
  }
}

function IDcheck(){
  var id = document.getElementById("infoID").value;
  var check;
  for(var i=0; i<compare.length; i++){
    if(id === compare[i][0]){
      alert("다시 입력하세요");
      break;
    }
  }
  for(var i = 0; i<compare.length; i++){
    if(id === compare[i][0]){
      check=true;
      break;
    }
  }
  if(check != true)
  {
    check=false;
  }
  if(check==false && id != ""){
    document.getElementById("infoID").disabled = true;
  }
}

function Nickcheck(){
  var Nickname = document.getElementById("infoNick").value;
  var check;
  for(var i=0; i<compare.length; i++){
    if(Nickname === compare[i][2]){
      alert("다시 입력하세요");
      break;
    }
  }
  for(var i = 0; i<compare.length; i++){
    if(Nickname === compare[i][2]){
      check=true;
      break;
    }
  }
  if(check != true)
  {
    check=false;
  }
  if(check==false){
    document.getElementById("infoNick").disabled = true;
  }
}