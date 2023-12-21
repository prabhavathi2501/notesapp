import { useState } from "react";
import Card from "./components/Card"
import "./App.css";
import AddNote from "./components/AddNote";
import NoteContext from "./context/NoteContext";
import IndexContext from "./context/IndexContext";


function App() {
  const [cardIndex, setCardIndex] = useState(-1);
  return (
    <>
    
      <div className="row">
        <div className="col-3">
          <h1>Notes App</h1>
          <div className="notes-btn">
           &nbsp;&nbsp;
            <label>Notes</label>
          </div>
        </div>
        <div className="col-9">
          <NoteContext>
            <IndexContext>
              <AddNote/>
            
              <Card/>
            </IndexContext>
          </NoteContext>

        </div>

      </div>
    </>
  );
}

export default App;