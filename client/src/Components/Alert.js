import React from "react";
import { useAppContext } from "../Context/AppContext";

//import the files from the bootstrap folder
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return (
    <>
      <div className={`alert alert-${alertType}`}>{alertText}</div>
    </>
  );
}
