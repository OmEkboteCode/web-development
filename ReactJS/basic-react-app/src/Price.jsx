export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "50px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    marginTop: "auto",
    padding: "12px 10px"
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
