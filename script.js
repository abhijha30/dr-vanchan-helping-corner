const SCRIPT_URL = "YOUR_SCRIPT_URL";

async function uploadFile() {
  const file = document.getElementById('fileInput').files[0];
  const reader = new FileReader();

  reader.onload = async function() {
    const base64 = reader.result.split(',')[1];

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: new URLSearchParams({
        file: base64,
        fileName: file.name,
        mimeType: file.type
      })
    });

    alert("Uploaded successfully!");
  };

  reader.readAsDataURL(file);
}

// Load Notes from Google Sheet / Drive API
async function loadNotes() {
  const course = document.getElementById("course").value;
  const sem = document.getElementById("semester").value;

  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "Loading...";

  // Example static (replace later with real API)
  const data = [
    {name: "DBMS Notes", course: "BCA", sem: "Sem3", link: "#"},
    {name: "Marketing Notes", course: "BBA", sem: "Sem2", link: "#"}
  ];

  const filtered = data.filter(n => n.course === course && n.sem === sem);

  notesDiv.innerHTML = "";

  if (filtered.length === 0) {
    notesDiv.innerHTML = "No notes found.";
    return;
  }

  filtered.forEach(note => {
    notesDiv.innerHTML += `
      <div class="note-card">
        📄 ${note.name} <br>
        <a href="${note.link}" target="_blank">Open</a>
      </div>
    `;
  });
}
