//Creamos una variable video = usamos un selector de querys para traer el id del video
var video = document.querySelector("#videoElement");

//Permite manejar todos los elementos del dispositivo nativo (del navegador)
//Chrome || navegadores que no son compatibles con android 3.0 || Mozilla || Microsoft Services tal vez || Opera
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
	//Parametros que utiliza la funcion getUserMedia para manejar el video
	//video: true - getUserMedia solo se fija en el video
	//handleVideo - se va a manejar con javascript
	//videoError - si hay un error
	navigator.getUserMedia({video: true}, handleVideo, videoError);
};

//stream = secuencia de frames
function handleVideo(stream) {
	//le ponemos una propiedad al video
	//crea una ventana y se la proporciona a la propiedad src
	video.src = window.URL.createObjectURL(stream);
}

function videoError(){
	//Do something
	alert("Hola este error es incontrolable");
}