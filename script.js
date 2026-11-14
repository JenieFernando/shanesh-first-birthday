// Personalise the greeting with a link such as ?name=Mrs.Sumeiya
const params = new URLSearchParams(window.location.search);
const guest = params.get("name");
const guestName = document.getElementById("guestName");
if (guest) guestName.textContent = guest.replace(/[<>]/g, "").replace(/[._+]/g, " ").slice(0, 60);
else guestName.textContent = "dear friend";

// Event time: 21 November 2026, 7:00 PM Sri Lanka time (UTC+05:30)
const eventTime = new Date("2026-11-21T19:00:00+05:30").getTime();
const pad = n => String(n).padStart(2, "0");
function updateCountdown() {
  const distance = eventTime - Date.now();
  if (distance <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.getElementById("countdownMessage").textContent = "It's party time! Happy birthday, Shanesh! 🎉";
    return;
  }
  document.getElementById("days").textContent = Math.floor(distance / 86400000);
  document.getElementById("hours").textContent = pad(Math.floor(distance % 86400000 / 3600000));
  document.getElementById("minutes").textContent = pad(Math.floor(distance % 3600000 / 60000));
  document.getElementById("seconds").textContent = pad(Math.floor(distance % 60000 / 1000));
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("openInvite").addEventListener("click", () => {
  document.getElementById("invitation").scrollIntoView({behavior:"smooth"});
});

// Replace the placeholder with the family's WhatsApp number in international format,
// digits only (example format: 94771234567; do not include + or spaces).
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
const rsvpText = `Hello! I would like to RSVP for Shanesh's 1st birthday celebration on 21 November 2026 at 7:00 PM.`;
const rsvpButton = document.getElementById("rsvpButton");
rsvpButton.href = WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER"
  ? "https://wa.me/?text=" + encodeURIComponent(rsvpText)
  : "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(rsvpText);

// Browsers require a guest's tap before audio can play.
const audio = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); musicToggle.textContent = "♫ Pause music"; }
    catch { musicToggle.textContent = "Add birthday-music.mp3"; }
  } else {
    audio.pause(); musicToggle.textContent = "♫ Play music";
  }
});
