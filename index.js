let helpCards = document.querySelector(".rightHelp");
let data = [
  {
    id: 1,
    name: "How do i sign up for the project?",
    button: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus pariatur tempora, quisquam veritatis temporibus,
    iste placeat quia blanditiis repellendus sequi quis est! Vero
    atque fuga, veritatis aliquid suscipit ut vitae?`,
  },
  {
    id: 2,
    name: "What thing that i should prepare before starting?",
    button: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus pariatur tempora, quisquam veritatis temporibus,
    iste placeat quia blanditiis repellendus sequi quis est! Vero
    atque fuga, veritatis aliquid suscipit ut vitae?`,
  },
  {
    id: 3,
    name: "Does my company need help for marketing advices?",
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
                <h1>${elem.name}</h1>
                <button class="btnPlus">+</button>
            </div>
            <p class="helpP">${elem.text}</p>
        </div>
        `;
  });
}

innerHTMLfunc();

let btnPlus = document.querySelector(".btnPlus"),
  text = document.querySelector(".helpP");

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    innerRemove();
    text[index].classList.add("active");
    btnPlus[index].innerHTML = "-";
  });
});
function innerRemove() {
  btnPlus.forEach((btn) => {
    btn.innerHTML = "+";
  });
  text.forEach((p) => {
    p.classList.remove("active");
  });
}
