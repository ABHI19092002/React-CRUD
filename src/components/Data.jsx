import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Data(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="stats">
      <table>
        <tr>Name :- {props.details.name}</tr>
        <tr>City :- {props.details.city}</tr>
        <tr>Phone :- {props.details.phone}</tr>
        <tr>Email :- {props.details.email}</tr>
      </table>

      <button onClick={handleClick} className="delete">
        <DeleteForeverIcon />
      </button>
      <button onClick={() => props.onUpdate(props.details)} className="edit">
        <EditIcon />
      </button>
    </div>
  );
}

export default Data;
