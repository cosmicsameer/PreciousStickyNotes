import { useRef } from 'react';
import styles from '../styles';
const InputForm = (props) => {
  const desRef = useRef();
  const titleRef = useRef();

  const onCreate = () => {
    props.onCreate(titleRef.current.value, desRef.current.value);
    titleRef.current.value = "";
    desRef.current.value = "";
  }

  return (
    <div style={styles.formCont}>
      <div style={styles.createHeader}>{"Create a Note here"} </div>
      <textarea ref={titleRef} style={styles.enterTitle} placeholder='enter your title'></textarea>
      <textarea ref={desRef} style={styles.enterDes} placeholder='enter your Description'></textarea>
      <div onClick={() => onCreate()} style={styles.createButton}>{"Create"}</div>
    </div>
  );
}

export default InputForm;