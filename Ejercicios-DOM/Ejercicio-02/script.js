// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div1 = document.createElement('div');
document.body.appendChild(div1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement('div');
const p2 = document.createElement('p');
p2.textContent = 'Hola, estoy dentro del div';
div2.appendChild(p2);
document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo número ${i}`;
  div3.appendChild(p);
}

document.body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p4 = document.createElement('p');
p4.textContent = 'Soy dinámico!';
document.body.appendChild(p4);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodes = document.querySelectorAll('.fn-remove-me');

removeNodes.forEach(node => node.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.

const allDivs = document.querySelectorAll('div');

const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';

allDivs[0].insertAdjacentElement('afterend', pMiddle);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDivs = document.querySelectorAll('.fn-insert-here');

insertDivs.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});