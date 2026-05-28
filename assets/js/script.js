  const openBtn =
    document.getElementById("openBtn");

  const modal =
    document.getElementById("modal");

  const closeBtn =
    document.getElementById("closeBtn");

  const cancelBtn =
    document.getElementById("cancelBtn");

  const confirmBtn =
    document.getElementById("confirmBtn");

  // OPEN MODAL

  openBtn.addEventListener("click", () => {

    modal.style.display = "flex";

  });

  // CLOSE BUTTON

  closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

  });

  // CANCEL BUTTON

  cancelBtn.addEventListener("click", () => {

    modal.style.display = "none";

  });

  // CONFIRM BUTTON

  confirmBtn.addEventListener("click", () => {

    alert("Action Confirmed!");

    modal.style.display = "none";

  });

  // OUTSIDE CLICK CLOSE

  window.addEventListener("click", (e) => {

    if(e.target === modal){

      modal.style.display = "none";

    }

  });

  // ESC KEY CLOSE

  document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

      modal.style.display = "none";

    }

  });