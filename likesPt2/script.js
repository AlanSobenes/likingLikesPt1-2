function increaseLikes(id){
    console.log("im here");
    var likes = document.querySelector(id);
    var count = parseInt(likes.innerHTML);
    likes.innerHTML = count + 1;
}