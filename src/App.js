import { useState } from 'react';
import "./App.css"
import Footer from './component/Footer';
import Header from './component/Header';
import AllNotes from './component/AllNotes';
import Featured from './component/Featured';
import InputForm from './component/InputForm';
import styles from './styles';

function App() {

  const [currId, setCurrId] = useState(1);
  const [listOfNotes, setListOfNotes] = useState([]);

  const editNote = (id, des, title) => {
    const updated = listOfNotes.map((note) => {
      if (note.id === id) return { ...note, title: title, des: des };
      else return note;
    })
    setListOfNotes([...updated])
  }

  const onCreate = (title, des) => {
    setListOfNotes((prev) => [...prev, {
      ts: Date.now(),
      title: title,
      des: des,
      id: currId,
      isFeatured: false,
    }]
    )
    setCurrId((prev) => prev + 1);
  }


  const handleFeatured = (val) => {
    const updateNote = listOfNotes.map(note => {
      if (note.id === val) return { ...note, isFeatured: true };
      else return note;
    })
    setListOfNotes(updateNote);
  }

  const deleteNote = (note) => {
    let noteList = listOfNotes;
    const index = noteList.indexOf(note)
    console.log(index, listOfNotes);
    if (index > -1) {
      noteList.splice(index, 1);
      setListOfNotes([...noteList]);
    }
  }


  return (
    <>
      <Header />
      <div style={styles.noteCont}>
        <InputForm onCreate={onCreate} />
        <div style={styles.listSectionCont}>
          {listOfNotes.length && <Featured listOfNotes={listOfNotes} deleteNote={deleteNote} editNote={editNote} />}
          {listOfNotes.length && <AllNotes listOfNotes={listOfNotes} deleteNote={deleteNote} handleFeatured={handleFeatured} editNote={editNote} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
