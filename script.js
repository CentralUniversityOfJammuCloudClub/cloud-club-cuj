const API_URL = "http://localhost:3000";

/* ================= ANIMATION ================= */
function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 120);
  });
}

/* Animate static cards on load */
document.addEventListener("DOMContentLoaded", () => {
  animateCards();
});

/* ================= EVENTS ================= */
async function loadEvents() {
  try {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();

    const container = document.getElementById("events");
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No events yet.</p>";
      return;
    }

    data.forEach(event => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      `;
      container.appendChild(card);
    });

    animateCards();
  } catch (err) {
    console.error("Events error:", err);
  }
}

/* ================= MEMBERS ================= */
async function loadMembers() {
  try {
    const res = await fetch(`${API_URL}/members`);
    const data = await res.json();

    const container = document.getElementById("members");
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>Team coming soon.</p>";
      return;
    }

    data.forEach(member => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      `;
      container.appendChild(card);
    });

    animateCards();
  } catch (err) {
    console.error("Members error:", err);
  }
}

/* ================= INIT ================= */
loadEvents();
loadMembers();



