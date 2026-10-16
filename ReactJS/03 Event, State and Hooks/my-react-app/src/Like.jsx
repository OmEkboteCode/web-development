import { useState } from "react";

export default function Like() {
  const [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

//   let likeStyle = { color: "red" };
  let buttonStyle = {border: "1px solid",
    backgroundColor: isLiked? "red": "white",
    color: isLiked? "white": "black",
    borderColor: isLiked?"red":"black",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  }
  return (
    <div>
      <button onClick={toggleLike} style={buttonStyle}>
        {isLiked ? 
          <i className="fa-solid fa-heart" ></i> 
         : 
          <i className="fa-regular fa-heart"></i> 
        }
        {isLiked? "Liked": "Like"}
      </button>
      <p>Preview State: {isLiked? "Liked": "Not Liked"}</p>
    </div>
  );
}
