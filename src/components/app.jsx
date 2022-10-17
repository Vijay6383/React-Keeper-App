import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import CreateArea from "./CreateArea";

// import Notes from "../notes";

// function noteTemplate(Notes){
//     return (
//     <Note id={Notes.key} title={Notes.title} content={Notes.content} />
//     );
// }

function App() {
    const [notes, setNotes] = useState([]);
  
    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
}

export default App;