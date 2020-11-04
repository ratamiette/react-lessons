import React, { useContext } from "react";
import UserContext from "./context/userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  return <div>{currentUser.name}</div>;
}

export default MovieRow;
