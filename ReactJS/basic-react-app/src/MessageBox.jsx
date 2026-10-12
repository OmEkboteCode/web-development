function Message({ userName, textColor }) {
  return (
    <>
      <h1 style={{ color: textColor }}>Hello, {userName}</h1>
    </>
  );
}

export default Message;
