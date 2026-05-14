function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "e2t5dd99b4cfa003ed9aaof63c44d73c";
  let prompt = `User instructions: Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating poem about ${instructionInput.value}...</div>`;
}

let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener("submit", generatePoem);
