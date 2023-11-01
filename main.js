var song = ""
var song2 = ""

function setup(){
    canvas = createCanvas(600, 600)
    canvas.center()
    background("white")
    video = createCapture(VIDEO)
    video.size(600, 600)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function preload(){
    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")
}
function draw(){
    image(video, 0, 0, 600, 600)
    fill("black")
    stroke("black")
}

var leftWristX = 0
var leftWristY = 0
var rightWristX = 0
var rightWristY = 0

function modelLoaded(){
console.log("modelo carregado!")
}
function gotPoses(){
    if(results.length > 0){
        console.log(results)
       
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y 
       
        leftWrist = results[0].pose.leftWrist.confidence
        rightWrist = results[0].pose.rightWrist.confidence
        console.log("confiança esq:" + leftWrist) 
        console.log("confiança dir:" + rightWrist)
        }
}