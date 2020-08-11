import React, { useState } from "react";
import "./like.css";

const Like = () => {
  const [like, setLike] = useState("favorite_border");
  const [cls,setCls]=useState("material-icons like");

  const handleLike = (e) => {
    if (like === "favorite_border") {    
      setLike("favorite");
      setCls("material-icons like-active");

    } else {
      setLike("favorite_border");
      setCls("material-icons like");

    }
    e.preventDefault();
  };
  return (
    <span className={cls} onClick={e=>handleLike(e)} id={like}>
      {like}
    </span>
  );
};

export default Like;
