const list = document.querySelector(".burguers");
const botaoMostrar = document.querySelector(".mostrar");
const boxConheca = document.querySelector(".boxConheca");

let cardapioMostrado = false;

function mostrarCardapio() {
  
  let myLi = '';

  if (cardapioMostrado) {
    list.innerHTML = '';
    boxConheca.style.display = 'block';
    cardapioMostrado = false;
  } else {
    menuOptions.forEach((product) => {
      myLi +=  `
      <li class="boxburguers">
        <img src=${product.src}>
        <p class="descrition">${product.name}</p>
        <p class="price">R$${product.price}.00</p>
      </li>
      `;
    });
    
    list.innerHTML = myLi;
    boxConheca.style.display = 'none';
    cardapioMostrado = true;
  }
  
  
}

botaoMostrar.addEventListener('click', mostrarCardapio);
