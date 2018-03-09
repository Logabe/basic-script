function setX (sprite, x){
document.getElementsByClassName(sprite).style.position = "fixed";
document.getElementsByClassName(sprite).style.right = x + "px";
}
function setY (sprite, y){
document.getElementsByClassName(sprite).style.position = "fixed";
document.getElementsByClassName(sprite).style.bottom = y + "px";
}
function setXY (sprite, x, y){
document.getElementsByClassName(sprite).style.position = "fixed";
document.getElementsByClassName(sprite).style.right = x + "px";
document.getElementsByClassName(sprite).style.bottom = y + "px";
}
