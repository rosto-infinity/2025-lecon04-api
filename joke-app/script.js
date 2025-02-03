const headerBlague =document.getElementById("header")
const textBlague =document.getElementById("content")

function Blague(){
  fetch("https://api.blablagues.net/?rub=blagues")
  .then((resp) => resp.json())
  .then((info) =>{

    headerBlague.textContent =info.data.content.text_head
    textBlague.textContent =info.data.content.text
  })
}
Blague()
btn.addEventListener('click', Blague)



