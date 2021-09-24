Webcam.set({
    width:350,
    height:300,
    dest_width: 350, 
    dest_height: 300,
    image_format:'png',
    png_quality:90,
    force_flash: false, flip_horiz: true, fps: 45
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"  src="' + data_uri + '">';

    });
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bj9t-EYh8/model.json",modelLoaded);

function modelLoaded(){
console.log("modelLoaded");

}