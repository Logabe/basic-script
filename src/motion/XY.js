function setX (sprite, x){
 var els = document.getElementsByClassName(sprite);
 for (var i = 0; i < els.length; i++) {
  document.els.style.position = "fixed";
  document.els.style.right = x + "px";    
}}
function setY (sprite, y){
 var els = document.getElementsByClassName(sprite);
 for (var i = 0; i < els.length; i++) {
  document.els.style.position = "fixed";
  document.els.style.bottom = y + "px";    
}}
function setPosition (sprite, x, y){
 var els = document.getElementsByClassName(sprite);
 for (var i = 0; i < els.length; i++) {
  document.els.style.position = "fixed";
  document.els.style.right = x + "px";
  document.els.style.right = y + "px";
}}
