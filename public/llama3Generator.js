function toggleSpinner1(show) {
  const spinner = document.getElementById("loading-spinner-1");
  if (show) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
}

function toggleButton1(disable) {
  const button = document.getElementById("generateButton-1");
  if (disable) {
    button.classList.add("d-none");
  } else {
    button.classList.remove("d-none");
  }
}

async function messageGenerator() {
  const prompt = document.getElementById("prompt").value;
  const field = document.getElementById("result");
  field.value = "";
  toggleSpinner1(true);
  toggleButton1(true);
  try {
    const response = await axios.post(
      "http://localhost:3333/llama3/createMessage",
      {
        prompt: prompt,
      }
    );
    if (response.status === 201) {
      field.value = response.data;
    } else {
      console.error("Erro na resposta da API");
    }
  } catch (error) {
    console.error("Erro ao conectar à API:", error);
  } finally {
    toggleSpinner1(false);
    toggleButton1(false);
  }
}
