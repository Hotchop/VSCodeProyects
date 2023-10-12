var parrafo = document.getElementById('miParrafo');
parrafo.textContent = 'Hola, mundo!'

var resaltado = document.getElementById('miDiv');
resaltado.className= 'resaltado';

var borralista = document.getElementById('miLista')
var padreBorraLista =  borralista.parentNode
padreBorraLista.removeChild(borralista);

var button = document.createElement('button')
button.textContent = 'No me toques!'
resaltado.appendChild(button);
button.onclick = function(){
    alert('TE DIJE QUE NO ME TOQUES!!!')
}

var basicColor = resaltado.style.backgroundColor;
resaltado.onmouseenter = function(){
    resaltado.style.backgroundColor = 'grey'
}
resaltado.onmouseleave = function(){
    resaltado.style.backgroundColor = basicColor;
}

var newDiv = document.createElement('div')
var newForm = document.createElement('form')
var newInput = document.createElement('input')
newInput.type = 'text'
var newButton = document.createElement('input')
newButton.type = 'button'
var newP = document.createElement('p')

document.body.appendChild(newDiv);
newDiv.appendChild(newForm);
newDiv.appendChild(newP);
newForm.appendChild(newInput);
newForm.appendChild(newButton);

newButton.addEventListener('click',function(){
    newP.textContent = newInput.innerText
})