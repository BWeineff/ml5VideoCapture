let mobilenet;
let video;
let label = '';

function modelReady() {
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        mobilenet.predict(gotResults);
    }
}

function imageReady() {
    image(puffin, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
    image(video, 0, 0);
    fill(255);
    textSize(64);
    text(label, 10, height, - 20);
}