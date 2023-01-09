let addcard = document.getElementsByClassName('addcard');
let delcard = document.getElementsByClassName("delcard");
let form = document.getElementsByClassName('form')[0];
let viewcard = document.getElementsByClassName('viewcard')[0];
let question = document.querySelector("#ques");
let answer   = document.querySelector("#anser");
 function  addcards() {
  form.style.display='block';
}
function closecard() {
  form.style.display='none';
}
function addviewcard(){
  let formview =document.createElement('div');
  let a = document.createElement('a');
  let br =document.createElement('br');
  let label1 = document.createElement('label');
  let label2 = document.createElement('label');
  let input1 = document.createElement('input');
  let input2 = document.createElement('input');
  let i = document.createElement('i');
  //add class 
  formview.className="formview";
  i.className="fas";
  i.className="fas fa-times";
  input1.className="ques";
  input2.className="ans";
  input1.disabled=true;
  input2.disabled=true;
  input1.value=question.value;
  input2.value=answer.value;
  label1.innerText="Question";
  label2.innerText="answer";

  a.appendChild(i); 
  formview.appendChild(a);
  formview.appendChild(label1);
  formview.appendChild(br);
  formview.appendChild(input1);
  formview.appendChild(br);
  formview.appendChild(label2);
  formview.appendChild(br);
  formview.appendChild(input2);
  formview.appendChild(br);
 viewcard.appendChild(formview);
 question.value='';
 answer.value='';
 a.addEventListener('click', function(){
  formview.remove();
 });


}
function closeAll(){
  viewcard.remove();
}
