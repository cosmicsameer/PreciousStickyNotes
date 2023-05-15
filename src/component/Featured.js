import styles from "../styles";
import Note from "./Note";
const Featured = (props) => {
  return (
    <div style={styles.listOfNotesParent("#d0d3d5")}>
      <div style={styles.listOfNotes}>{"List Of Featured Notes"} </div>
      <div style={styles.listCont}>
        {props.listOfNotes.filter(note => note.isFeatured === true).map((note) => {
          return (
            <Note noteData={note} deleteNote={props.deleteNote} key={note.id} edit={props.editNote} />
          )
        })}
      </div>
    </div>
  );
}

export default Featured;