const styles = {
  container: {
    minHeight: "calc(50vh - 50px)",
    minWidth: "calc(50vw - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: 5,
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
  </div>
);

export default Home;
