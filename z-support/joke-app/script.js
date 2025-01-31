const header = document.getElementById("header");
const text = document.getElementById("content");
function Blague(){
fetch("https://api.blablagues.net/?rub=blagues")
.then((res) => res.json())
.then((info)=>{
console.log(info.data);
const blague=info.data.content
header.textContent = blague.text_head;
text.textContent = blague !==""
?blague.text_hidden
: blague.text
;
})
}
Blague();
btn.addEventListener('click', Blague);