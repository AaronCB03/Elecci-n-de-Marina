// Variables para gestionar los votos
let userHasVoted = false;
let votes = [0, 0, 0, 0]; // Contador de votos para cada madrina

// Evento para el botón "Inicia sesión con Instagram"
document.getElementById("loginWithInstagram").addEventListener("click", function() {
  window.open("https://www.instagram.com/forbet.oficial?igsh=OWhqYnM0YXVyejY4", "_blank");
});

// Manejo de la votación
document.querySelectorAll(".vote-btn").forEach(button => {
  button.addEventListener("click", function() {
    if (!userHasVoted) {
      const participant = button.getAttribute("data-participant");
      votes[participant - 1] += 1;
      userHasVoted = true;
      alert("¡Gracias por tu voto!");

      // Mostrar los resultados
      showResults();
    } else {
      alert("Ya has votado, no puedes votar nuevamente.");
    }
  });
});

// Mostrar los resultados de la votación
function showResults() {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; // Limpiar la lista antes de mostrarla

  votes.forEach((vote, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Madrina ${index + 1}: ${vote} votos`;
    resultList.appendChild(listItem);
  });
}
