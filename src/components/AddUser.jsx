import React, { useState } from "react";
import Button from "@mui/material/Button";

function AddUser(props) {
  const [details, setDetails] = useState({
    name: "",
    city: "",
    phone: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitStat(event) {
    props.onAdd(details);
    setDetails({
      name: "",
      city: "",
      phone: "",
      email: ""
    });
    event.preventDefault();
  }

  return (
    <div className="detail">
      <form>
        <label className="label">Name : </label>
        <input
          onChange={handleChange}
          value={details.name}
          name="name"
          type="text"
          placeholder="Name"
          required
        />

        <label className="label-city">City : </label>
        <input
          onChange={handleChange}
          name="city"
          placeholder="City"
          type="text"
          value={details.city}
        />

        <label className="label">Email : </label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="abc@gmail.com"
          value={details.email}
        />

        <label className="label">Phone : </label>
        <input
          onChange={handleChange}
          name="phone"
          placeholder="Phone No"
          type="text"
          value={details.phone}
        />
      </form>

      <div className="btn">
        <Button
          onClick={submitStat}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
