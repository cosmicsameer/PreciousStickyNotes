import { useEffect, useRef, useState } from 'react';
import styles from '../styles';

const Note = (props) => {
  const desRef = useRef();
  const titleRef = useRef();

  const [isEditable, setEditable] = useState(false);

  useEffect(() => {
    desRef.current.value = props.noteData.des;
    titleRef.current.value = props.noteData.title
  }, [props.noteData]);

  const onSave = () => {
    setEditable(false)

    props.edit(props.noteData.id, desRef.current.value, titleRef.current.value);
  }

  const onFeatured = () => {
    props.setFeatured(props.noteData.id);
  }

  const onDelete = () => {
    props.deleteNote(props.noteData);
  }

  const onEdit = () => {
    setEditable(true)
  }

  const getTime = () => {
    let time = new Date(props.noteData.ts);
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  }

  const getDate = () => {
    let date = new Date(props.noteData.ts);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }

  return (
    <div style={{ margin: 30 }}>
      <div style={styles.noteHeader}>

        {!props.noteData.isFeatured && <div onClick={() => onFeatured()} style={styles.noteButton}>{"Mark Featured"}</div>}

        <div onClick={() => onEdit()} style={styles.noteButton}>{"Edit"}</div>

        <div onClick={() => onDelete()} style={styles.noteButton}>{"Delete"}</div>

        {isEditable && <div onClick={() => onSave()} style={styles.noteButton}>{"Save"}</div>}

      </div>

      <div contentEditable="false">
        <textarea ref={titleRef} disabled={!isEditable} style={styles.titleInput}>{props.noteData.title}</textarea>
        <textarea ref={desRef} disabled={!isEditable} type='text' contentEditable style={styles.desInput}></textarea>
        <div style={styles.dateTimeCont}>
          <div>{getTime()}</div>
          <div>{getDate()}</div>
        </div>
      </div>
    </div>

  );
}

export default Note;