const userInout =document.getElementById("userInput");
var experssion = "";
function press(num){
  experssion += num;
  userInput.value=experssion;
}
function equal(){
  userInput.value = eval(experssion);

}
function erase(){
experssion='';
userInput.value=experssion;
}