let helpCards = document.querySelector(".rightHelp");
let data = [
  {
    id: 1,
    label: "How do i sign up for the project?",
    button: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus pariatur tempora, quisquam veritatis temporibus,
    iste placeat quia blanditiis repellendus sequi quis est! Vero
    atque fuga, veritatis aliquid suscipit ut vitae?`,
  },
  {
    id: 2,
    label: "What thing that i should prepare before starting?",
    button: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus pariatur tempora, quisquam veritatis temporibus,
    iste placeat quia blanditiis repellendus sequi quis est! Vero
    atque fuga, veritatis aliquid suscipit ut vitae?`,
  },
  {
    id: 3,
    label: "Does my company need help for marketing advices?",
    button: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus pariatur tempora, quisquam veritatis temporibus,
    iste placeat quia blanditiis repellendus sequi quis est! Vero
    atque fuga, veritatis aliquid suscipit ut vitae?`,
  },
];

function innerHTMLfunc() {
  helpCards.innerHTML = "";
  data.map((elem) => {
    helpCards.innerHTML += `
        <div class="helpCard">
            <div class="textBtn">
                <h1>${elem.label}</h1>
                <button class="btnPlus">+</button>
            </div>
            <p class="helpP">${elem.text}</p>
        </div>
        `;
  });
}

innerHTMLfunc();

// let plusBtn =(i)=>{
//   data = data.map((elem)=>{
//     elem.id === data[i].id ? {...elem, button: !elem.button} : elem
//   })
//   innerHTMLfunc()
// }

let btnPlus = document.querySelectorAll(".btnPlus"),
  text = document.querySelectorAll(".helpP");
function innerRemove() {
  btnPlus.forEach((btn) => {
    btn.innerHTML = "+";
  });
  text.forEach((p) => {
    p.classList.remove("active");
  });
}

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    innerRemove();
    text[index].classList.add("active");
    btnPlus[index].innerHTML = "-";
  });
});

let menu = document.querySelector(".hamburgerMenu i");
let hamMenu = document.querySelector("nav .links");
let menuham = document.querySelector(".hamburgerMenu")

menu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  if (hamMenu.classList === "active") {
    menuham.style.cssText = `
      position: absolute;
    `;
  }
});
