/*automatic title toogle inside*/

/*let titleMessage = false;
const title = "Welcome in my Laboratory";
const message = "Enjoy it !";
const changeTitle = setInterval(() => {
    document.title = titleMessage
        ? title
        : message;
    titleMessage = !titleMessage;
}, 1667);*/

/*let titleMessage = false;
setInterval(() => {
    document.title = titleMessage
        ? 'Welcome in my Laboratory' 
        : 'Enjoy it !';
    titleMessage = !titleMessage;
}, 1667);*/

/*let titleMessage = false;
setInterval(() => {
    document.title = titleMessage    
        ? documentTitle
        : "Enjoy it !";
    titleMessage = !titleMessage;
}, 1667);*/

/*let titleMessage = false;
const message = "Enjoy it !";
const changeTitle = setInterval(() => {
    document.title = titleMessage    
        ? documentTitle
        : message;
    titleMessage = !titleMessage;
}, 1667);*/

/*let titleMessage = ["Welcome in my Laboratory", "Enjoy it !", ];
let counter = 0;
setInterval(function() {
    document.title = titleMessage [counter % titleMessage.length]; counter++
}, 1667);*/


/*title toogle outside*/

let documentTitle = document.title; 
window.addEventListener("focus", () => {
    document.title = documentTitle;
});
window.addEventListener("blur", () => {
    document.title = "OH, No Way... Come Back HERE !"; 
});

/*window.addEventListener("focus", function() {
    this.document.title = "Welcome in my Laboratory";
});
window.addEventListener("blur", function() {
    this.document.title = "OH, No Way... Come Back HERE !"; 
});*/


/*automatic url toogle*/

let Emoji= [
    "🤗",
    "😱",
    "🤔",
    "😵",
    "😯",
    "😮",
    "😲",
    "😬",
    "🤨",
    "😐",
    "🙂",
    "😉",
    "😁",
    "😊",
    "😳",
    "😀",
    "😃",
    "😆",
    "😄",
    "😅",
    "😂",
    "🤣",
    "🤭",
    "🤓",
    "🤩",
    "🤩",
    "🤩",
];
let urlAnimate = ()=> {
    window.location.hash = Emoji[Math.floor((Date.now() / 500) % Emoji.length)];
    setTimeout(urlAnimate, 70);
};
urlAnimate();


/*overlapping chars with shadow*/

const overlapEls = document.querySelectorAll(".overlap") || [];
overlapEls.forEach(el => {
    const chars = [...el.textContent];
    el.innerHTML = "";
    chars.forEach((char,index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--index", index);
        el.append(span);
    });
});