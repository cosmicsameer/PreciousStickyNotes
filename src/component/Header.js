import React from 'react';
import styles from '../styles';


function Header() {
  return (
    <header style={styles.headerCont}>
      <h1 style={styles.stickyNotes}>{"Sticky Notes"}</h1>
    </header>
  );
}

export default Header;
