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
