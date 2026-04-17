// 📅 Show today's date
const today = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById("date").innerText =
  today.toLocaleDateString('en-IN', options);

// 🔗 Open Google Drive link
function openDrive(link) {
  window.open(link, "_blank");
}
