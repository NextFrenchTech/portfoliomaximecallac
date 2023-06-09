/*automatic title toogle inside*/

/*let alertshow = false;
setInterval(() => {
    document.title = 
    alertshow   ? documentTitle
                : "Enjoy it !";
    alertshow = !alertshow;
}, 1000);*/

/*title toogle outside*/

let documentTitle = document.title; 
window.addEventListener("blur", () => {
    document.title = "OH, No Way... Come Back HERE !"; 
});

window.addEventListener("focus", () => {
    document.title = documentTitle;
});
