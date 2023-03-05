const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

button1.addEventListener('click', function() {
    document.body.style.backgroundImage = "url(Nike2.png)";
});

button2.addEventListener('click', function() {
    document.body.style.backgroundImage = "url(Nike1.png)";
});


// const button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
//     const currentBg = document.body.style.backgroundImage;
//     if (currentBg === "url(Nike1.png)") {
//         document.body.style.backgroundImage = "url(Nike2.png)";
//     } else {
//         document.body.style.backgroundImage = "url(Nike1.png)";
//     }
// });



