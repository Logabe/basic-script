function turn(sprite, degrees) {
 var Els = document.getElementsByClassName(sprite);
 for (var i = 0; i < Els.length; i++) {
  Els[i].style.transform = 'rotate(' + degrees + 'deg)';
 }
}
