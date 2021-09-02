var video = document.getElementById('video');
var mensaje = document.getElementById('mensaje');

//Función para manejar el archivo de video local
function handleFileSelect(e) {
  var file = e.target.files[0]; //archivo subido
  var reader = new FileReader();

  reader.onload = function (e) {
    var src = document.createAttribute('src');
    src.value = e.target.result;
    video.setAttributeNode(src); //añade atributo src
    mensaje.style.display = 'block';
    mensaje.innerHTML = '<p>Cargando...</p>';
  }
  video.oncanplaythrough = function () {
    //Evento se dispara cuando el video está listo para reproducirse hasta el final
    mensaje.style.display = 'none';
    document.getElementById('controlVideo').style.display = 'block';
  }
  video.onended = function () {
    //Evento se activa cuando detecta fin video
    document.querySelector('.material-icons-round').innerHTML = 'play_arrow';
  }
  reader.readAsDataURL(file);
};

//Controles video:Play, pause y volumen
document.getElementById('play/pause').addEventListener('click', function () {
  if (video.paused) {
    video.play();
    document.querySelector('.material-icons-round').innerHTML = 'pause';
  } else {
    video.pause();
    document.querySelector('.material-icons-round').innerHTML = 'play_arrow';
  }
});

document.getElementById('volumen').addEventListener('change', function () {
  video.volume = this.value;
});

document.getElementById('file').addEventListener('change', handleFileSelect);