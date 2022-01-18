
let h1 = document.querySelector('h1');
let btn = document.querySelector('button');

function setName() {
    let name = prompt();

    localStorage.setItem('name', name);

    h1.textContent = name
}

if (!localStorage.getItem('name')) {
    setName()
} else {
    h1.textContent = localStorage.getItem('name')
}

btn.onclick = function (){
    setName()
}
