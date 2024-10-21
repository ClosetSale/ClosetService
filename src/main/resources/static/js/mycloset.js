   function drag_drop(ball){
      let currentDroppable = null;

      ball.onmousedown = function(event) {

        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;
        var idlist = document.getElementById("list");
        ball.style.position = 'absolute';
        ball.style.zIndex = 400;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
          ball.style.left = pageX - shiftX + 'px';
          ball.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);

          ball.hidden = true;
          let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
          ball.hidden = false;

          if (!elemBelow) return;

          let droppableBelow = elemBelow.closest('.droppable');
          if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
              leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
              // (maybe just left the droppable)
              enterDroppable(currentDroppable);
            }
          }
        }

        document.addEventListener('mousemove', onMouseMove);

        ball.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          ball.onmouseup = null;
        };

      };

      function enterDroppable(elem) {
s
      }

      function leaveDroppable(elem) {
        elem.style.background = '';
      }

      ball.ondragstart = function() {
        return false;
      };
  }
  function drop_list(target){
    var imgclass = document.getElementsByClassName("img_cloth");
    target.appendChild(document.getElementById("list"));
  }

  const fileInput = document.getElementById("fileUpload");

  const handelFiles = (e) => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile[0]);

    fileReader.onload = function(){
      var list = document.querySelector("#list");
      var img = document.createElement("img");
      
      var width = document.getElementById("width_cloth").value;
      var height = document.getElementById("height_cloth").value;
      var opacity = document.getElementById("opacity_cloth").value;
      img.src = fileReader.result;
      img.className = "img_cloth";
      img.style.width = width + "px";
      img.style.height = height + "px";
      img.style.opacity = opacity;
      img.addEventListener("mousedown",function(){drag_drop(this)});
      list.appendChild(img);
    };

    
  };

  fileInput.addEventListener("change",handelFiles);


  //캡쳐
  var capture = document.getElementById("capture_cody");
  $('#captureBtn').click((e) => { html2canvas(document.querySelector("#list")).then(canvas => { capture.appendChild(canvas) }); });

  //다운로드
  var download = document.getElementById("capture_cody")
  $('#downBtn').click((e) => {
  html2canvas(document.querySelector("#capture_cody")).then(canvas => {
    // jsPDF 객체 생성 생성자에는 가로, 세로 설정, 페이지 크기 등등 설정할 수 있다. 자세한건 문서 참고.
    // 현재 파라미터는 기본값이다 굳이 쓰지 않아도 되는데 저것이 기본값이라고 보여준다.
    const doc = new jsPDF({
      //orientation: "landscape",
      orientation:"landscape",
      //format: "a4"
      format:"a3"
      });
      
      
    // html2canvas의 canvas를 png로 바꿔준다.
    var imgData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기

    // image 추가
    doc.addImage(imgData, 'PNG', 0, 0);

    // pdf로 저장
    doc.save('mycody.pdf');
  });
});

function deletefuc(){
  var list = document.querySelector(".img_cloth");
  list.remove();
}
