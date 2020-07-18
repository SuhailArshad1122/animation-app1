var cloudElement = document.getElementById("cloud-div")

var animatedElem = cloudElement.animate(
    [{ transform: 'translate(600px,0)'}, { transform: 'translate(-600px,0)'}],
    {
        duration: 6000,
        iterations: Infinity,
        playbackRate: -6,
    }
);

var planeElement = document.getElementById('plane-div')

var planeInAnimation = planeElement.animate(
    [{ transform: 'translate(0,0)'}, { transform: 'translate(900px,0)'}], 
    {
        duration: 3000,
        iterations: Infinity,
        playbackRate: -6,
    }
);

var birdElement = document.getElementById("bird-div")

var birdInAnimation = birdElement.animate(
    [{ transform: 'translate(0,0)'}, { transform: 'translate(600px,0)'}],
    {
        duration: 6000,
        iterations: Infinity,
        playbackRate: -6,
    }
);
