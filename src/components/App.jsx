import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import Data from "./Data.jsx";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function App() {
  const [stats, setStats] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updateDetail, setUpdate] = useState({
    xname: "",
    xcity: "",
    xphone: "",
    xemail: ""
  });

  function addStat(newStat) {
    setStats((prevStat) => {
      return [...prevStat, newStat];
    });
  }

  function deleteStat(id) {
    setStats((prevStats) => {
      return prevStats.filter((stat, index) => {
        return index !== id;
      });
    });
  }

  function updateOne(toUpdateDetail) {
    setOpen(true);
    setUpdate({
      xname: toUpdateDetail.name,
      xcity: toUpdateDetail.city,
      xemail: toUpdateDetail.email,
      xphone: toUpdateDetail.phone
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUpdate((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    let newDetails = JSON.parse(JSON.stringify(stats));

    for (var i = 0; i < stats.length; i++) {
      if (updateDetail.xphone === stats[i].phone) {
        newDetails[i].name = updateDetail.xname;
        newDetails[i].city = updateDetail.xcity;
        newDetails[i].phone = updateDetail.xphone;
        newDetails[i].email = updateDetail.xemail;
        break;
      }
    }
    setStats(newDetails);
    setOpen(false);
  }

  return (
    <div>
      <Header />
      <AddUser onAdd={addStat} />
      <div>
        <button hidden="hidden">
          <Button onClick={handleOpen}>Open modal</Button>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-title">
              <Typography
                style={{ fontWeight: 600 }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Edit Details
              </Typography>
            </div>
            <Typography component={"span"} id="modal-modal-description">
              <form>
                <table>
                  <tr>
                    <label>Name : </label>
                    <input
                      name="xname"
                      value={updateDetail.xname}
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </tr>

                  <tr>
                    <label>City : </label>
                    <input
                      name="xcity"
                      value={updateDetail.xcity}
                      placeholder="City"
                      type="text"
                      onChange={handleChange}
                    />
                  </tr>

                  <tr>
                    <label>Email : </label>
                    <input
                      name="xemail"
                      value={updateDetail.xemail}
                      type="email"
                      placeholder="abc@gmail.com"
                      onChange={handleChange}
                    />
                  </tr>

                  <tr>
                    <label>Phone : </label>
                    <input
                      name="xphone"
                      value={updateDetail.xphone}
                      placeholder="Phone No"
                      type="text"
                      onChange={handleChange}
                    />
                  </tr>
                </table>
              </form>

              <div className="modal-div">
                <div className="modal-save">
                  <Button onClick={handleClick} variant="contained">
                    SAVE
                  </Button>
                </div>
                <div className="modal-cancel">
                  <Button onClick={() => setOpen(false)} variant="outlined">
                    CANCEL
                  </Button>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      {stats.map((statItem, index) => {
        return (
          <Data
            key={index}
            id={index}
            details={statItem}
            onDelete={deleteStat}
            onUpdate={updateOne}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
