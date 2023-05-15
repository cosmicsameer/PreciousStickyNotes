const styles = {
  titleInput: {
    width: 232,
    backgroundColor: "pink",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex"
  },

  desInput: {
    width: 233,
    padding: 10,
    backgroundColor: "cyan",
    height: 200,
    border: "none",
  },
  dateTimeCont: {
    backgroundColor: "orange",
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
  },
  noteButton: {
    color: "white",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 10,
    padding: 5,
    background: "green",
    borderRadius: 4,
  },
  noteHeader: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    width: 234
  },
  formCont: {
    backgroundColor: "#A77FB3",
    width: 600,
    padding: 30,
    borderRadius: 15
  },
  createHeader: {
    color: "white",
    fontWeight: "700",
    marginBottom: 20
  },
  enterTitle: {
    backgroundColor: "#ffd73f",
    width: 400,
    padding: 30,
    borderRadius: 8,
    border: "none",
  },
  enterDes: {
    backgroundColor: "#ffd78f",
    width: 400,
    padding: 30,
    borderRadius: 8,
    border: "none",
  },
  createButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    color: "white",
    fontWeight: "700",
    width: 100,
    textAlign: "center",
    borderRadius: 8
  },
  headerCont: {
    backgroundColor: "purple",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0
  },
  stickyNotes: {
    color: "white",
    textAlign: "center"
  },
  listOfNotes: {
    color: "black",
    fontWeight: "700",
    marginBottom: 20
  },
  listCont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  listOfNotesParent: (color) => {
    return {
      display: "flex",
      flexDirection: "row",
      margin: 24,
      backgroundColor: color,
      padding: 20
    }
  },
  noteCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100
  },
  listSectionCont: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100
  }



}

export default styles