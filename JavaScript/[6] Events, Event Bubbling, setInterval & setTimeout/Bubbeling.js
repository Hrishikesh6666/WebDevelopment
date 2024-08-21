// Use the correct selector for the child element
document.querySelector("#child").addEventListener("click", () => {
    alert("Button clicked");
});

// Use getElementById for the parent element as it's already correctly done
document.getElementById("parent").addEventListener("click", () => {
    alert("Div clicked");
});

//                                 TO STOP THE BUBBLING 



// document.querySelector("#child").addEventListener("click", () => {
//     alert("Button clicked");
//     event.stopPropagation()
// });

// // Use getElementById for the parent element as it's already correctly done
// document.getElementById("parent").addEventListener("click", () => {
//     alert("Div clicked");
// });

// NOTE : to stop the BUBBELING use the `event.stopPropagation`