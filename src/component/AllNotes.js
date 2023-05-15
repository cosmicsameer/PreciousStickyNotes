import styles from "../styles";
import Note from "./Note";

const AllNotes = (props) => {
  return (
    <div style={styles.listOfNotesParent("#c9c9ff")}>
      <div style={styles.listOfNotes}>{"List Of All Notes"} </div>
      <div style={styles.listCont}>
        {props.listOfNotes.map((note) => {
          return (
            <Note noteData={note} deleteNote={props.deleteNote} key={note.id} setFeatured={props.handleFeatured} edit={props.editNote} />
          )
        })}
      </div>
    </div>
  );
}

export default AllNotes;