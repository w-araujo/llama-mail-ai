function toggleSpinner2(show) {
  const spinner = document.getElementById("loading-spinner-2");
  if (show) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
}

function toggleButton2(disable) {
  const button = document.getElementById("generateButton-2");
  if (disable) {
    button.classList.add("d-none");
  } else {
    button.classList.remove("d-none");
  }
}

function toggleAlert(type) {
  const alertSuccess = document.getElementById("alert-success");
  const alertDanger = document.getElementById("alert-danger");

  if (type === "success") {
    alertSuccess.classList.remove("d-none");
    setTimeout(() => {
      alertSuccess.classList.add("d-none");
    }, 5000);
  }

  if (type === "danger") {
    alertDanger.classList.remove("d-none");
    setTimeout(() => {
      alertDanger.classList.add("d-none");
    }, 5000);
  }
}

async function sendEmail() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const text = document.getElementById("text").value;

  toggleSpinner2(true);
  toggleButton2(true);

  const emailsTo = to.split(",").map((email) => email.trim());

  try {
    const response = await axios.post("http://localhost:3333/email/send", {
      email: {
        from: from,
        to: emailsTo,
        subject: subject,
        text: text,
        html: text,
      },
    });
    if (response.status === 200) {
      toggleAlert("success");
    }
  } catch (error) {
    toggleAlert("danger");
    console.error("Erro ao conectar à API:", error);
  } finally {
    toggleSpinner2(false);
    toggleButton2(false);
  }
}
