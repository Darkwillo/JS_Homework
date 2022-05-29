//Задание 1
var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);
var firstButton = document.getElementsByTagName('button')[0];
firstButton.addEventListener('click', childSearch, false);
function childSearch() {
    for (var i = 0; ; i++) {
        var firstLinks = firstPar.children[i];
        firstLinks.classList.add('childSearcher')
    }
}
for (var i = 0; ; i++) {
var secondParagraph = secondPar.children[i];
secondParagraph.onclick = secondLinks;
}

function secondLinks() {
        event.preventDefault()
        alert(event.target);
    }

