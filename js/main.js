/*automatic title toogle inside*/

/*let titleMessage = false;
const title = "Welcome in my Laboratory";
const message = "Enjoy it !";
const changeTitle = setInterval(() => {
    document.title = 
    titleMessage    ? title
                    : message ;
    titleMessage = !titleMessage;
}, 1667);*/

/*let titleMessage = false;
setInterval(() => {
    document.title = 
    titleMessage   ? documentTitle
                : "Enjoy it !";
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
