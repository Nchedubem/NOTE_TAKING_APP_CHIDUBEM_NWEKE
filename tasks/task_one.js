const form = document.getElementById('note-form');
const notes = document.getElementById('notes');
const noteInput = document.getElementById('note');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newNote = { text: noteInput.value };
    saveNote(newNote);
    renderNotes();
    noteInput.value = '';
});

function saveNote(note) {
    const notesArray = getSavedNotes();
    notesArray.push(note);
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

function getSavedNotes() {
    const notesStr = localStorage.getItem('notes');
    return JSON.parse(notesStr) || [];
}

function renderNotes() {
    const notesArray = getSavedNotes();
    const noteElements = notesArray.map((note) => `<div class="note">${note.text}</div>`);
    notes.innerHTML = noteElements.join('\n');
}

renderNotes();