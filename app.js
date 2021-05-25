let text = document.querySelector("h1")

text.addEventListener("click", function() {
    text.style.backgroundColor = text.style.backgroundColor === "red" ? "blue" : "red";
})