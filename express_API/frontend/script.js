const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const handleClick = evt => {
  console.log(evt.target.id);
  let num;
  if(evt.target.id == "btn0") num = 0;
  if(evt.target.id == "btn1") num = 1;
  if(evt.target.id == "btn2") num = 2;
  if(evt.target.id == "btn3") num = 3;

  
  let url = `http://localhost:3000/api?id=${num}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);
});
}



btn0.addEventListener('click', handleClick);
btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);