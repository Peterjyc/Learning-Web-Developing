const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const contentp = document.createElement('p');
contentp.classList.add('contentp');
contentp.textContent = "Hey I'm red!";
contentp.style.color = "red";
container.appendChild(contentp);

const contenth3 = document.createElement('h3');
contenth3.textContent = "I'm a blue h3!";
contenth3.style.color = "blue";
container.appendChild(contenth3);

const contentdiv = document.createElement('div');
contentdiv.style.borderColor = "black";
contentdiv.style.backgroundColor = "pink";
container.appendChild(contentdiv);

const child1 = document.createElement('h1');
child1.textContent = "I'm in a div";
const child2 = document.createElement('p');
child2.textContent = "ME TOO!"

contentdiv.appendChild(child1);
contentdiv.appendChild(child2);

var btn = document.getElementById('btn');
console.log("test");

btn.addEventListener('click', function (e) {
    console.log(e);
  });
