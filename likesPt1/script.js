function updateLikes(id){
    var update = document.querySelector(id);
    var count = parseInt(update.innerHTML);
    update.innerHTML = count + 1;
}
