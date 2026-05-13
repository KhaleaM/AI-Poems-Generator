function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");

    new Typewriter("#poem", {
      strings: "Take me to the moon",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener("submit", generatePoem);