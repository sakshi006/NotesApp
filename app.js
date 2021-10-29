const textArea = document.querySelector("#add-text");
const addButton = document.querySelector("#add-btn");
const searchTxt = document.querySelector("#search-txt")
showNotes()

// adding notes
function addNote() {

    let noteDate = new Date();
    console.log(noteDate)

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let text = textArea.value;
    // console.log(text)
    if (text !== "") {
        notesObj.push(text);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        textArea.value = ""

    }
    else {
          textArea.innerText= "Please Enter Something !!"
    }

    showNotes();
}

// deleting a note

function deleteNote(index) {
    console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}



//  showing notes

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach((element, index) => {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
          <hr>
          <div id="date">${new Date()}</div>
        </div>
      </div>`
    });


    let notesELement = document.getElementById("notes");
    if (notesObj.length != 0)
        notesELement.innerHTML = html;
    else
        notesELement.innerHTML = `Nothing to show! Use "Add note" section to add some notes!!`
}

function searchItems(e) {
    let inputVal = (e.target.value.toLowerCase());
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach((element) => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        if (cardTxt.includes(inputVal))
            element.style.display = "block"
        else
            element.style.display = "none"
        //   console.log(cardTxt)
    })
}


// event listeners

searchTxt.addEventListener("input", (e) => searchItems(e));
addButton.addEventListener("click", () => addNote())

















//     let newNote = document.createElement("div")
//     newNote.setAttribute("class","noteCard my-2 mx-2 card")
//     newNote.setAttribute("id",`note${count}`);
//     newNote.setAttribute("style","width: 18rem;")

//     let insideNewNote = document.createElement("div");
//     insideNewNote.setAttribute("class","card-body")
//     newNote.appendChild(insideNewNote);

//     let noteHeading = document.createElement("h5");
//     noteHeading.setAttribute("class","card-title")
//     insideNewNote.appendChild(noteHeading);
//     noteHeading.innerText="Note";

//     let noteText = document.createElement("p");
//     noteText.setAttribute("class","card-text")
//     insideNewNote.appendChild(noteText);
//     let newNoteText = document.createTextNode(text);
//     noteText.appendChild(newNoteText);

//     let addNoteBUtton = document.createElement("button");
//     addNoteBUtton.setAttribute("class","btn btn-outline-danger")
//     addNoteBUtton.setAttribute("id",`btn${count}`);
//     insideNewNote.appendChild(addNoteBUtton);
//     addNoteBUtton.innerText="Delete Note";


//     notesSection.appendChild(newNote)
//     // console.log(textArea)

//     count++;

// console.log(addNoteBUtton, newNote)

