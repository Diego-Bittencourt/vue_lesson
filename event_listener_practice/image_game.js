window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = "./media/" + name + ".jpg";
    image.src = name;

}
