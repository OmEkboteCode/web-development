export default function StatusBadge({ status }) {
  const Badge =
    status === "Available"
      ? {backgroundColor: "green", color: "white"}
      : status === "Busy"
        ? { backgroundColor: "orange", color: "black"}
        : { backgroundColor: "red", color: "white"};

  status;
  return <span style={Badge}>{status}</span>;
}
