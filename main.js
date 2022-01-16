
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background('black');

    document.getElementById("square_side").innerHTML = "The width and height of the font is " + difference + "px";
        fill('green');
        stroke('red');
        textSize(difference);
        text("font size", 50, 400);
}

function modelLoaded()
{
    console.log('Posenet')
}

function gotPoses(numbers)
{
    if(numbers.length >0)
    {
        console.log(numbers)
        noseX = numbers[0].pose.nose.x;
        noseY = numbers[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY)

        leftWristX = numbers[0].pose.leftWrist.x;
        rightWristX = numbers[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("lefWrist =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference)
    }
}