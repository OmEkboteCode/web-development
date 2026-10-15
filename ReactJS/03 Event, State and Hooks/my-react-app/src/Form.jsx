function handleFormSubmit() {
  event.preventDefault();
  console.log("Form Was Submitted");
}

export default function Form() {
  return (
    <form action="/">
      <input type="text" placeholder="Enter Name" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
