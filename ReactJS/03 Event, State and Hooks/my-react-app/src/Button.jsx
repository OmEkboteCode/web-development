function handleClick(event) {
//   console.log(event);

  console.log(event);
}
function handleChange(event) {
  console.log(event);
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Submit</button>;
    </div>
  );
}
