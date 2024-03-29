import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../css/shippment.css";
import axios from "axios";
import { Nav, NavItem, Form, Button, Modal, ModalBody } from "reactstrap";


function CreateDispatch() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [modalPrivacy, setModalPrivacy] = useState(false);
  const [succbtn, setSuccbtn] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name,
      email,
      phone,
      password,
      //   date:fullDate,
    };

    if (name === "" || email === "" || phone === "" || password === "") {
      setError(true);
      setSuccbtn(
        <span className="" style={{ color: "red" }}>
          Please fill all the fields
        </span>
      );
    } else {
      setError(false);
      setSuccbtn("");
      axios
        .post(
          "https://shippment-dfx.onrender.com/api/addispatcher",
          dataToSubmit
        )
        .then((response) => {
          console.log(response.data);
          setSuccbtn(
            <span className="" style={{ color: "green" }}>
              Submitted Successfully
            </span>
          );
          setModalIsOpen(false);
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          setSuccbtn(
            <span className="" style={{ color: "red" }}>
              Failed to submit data
            </span>
          );
        });
    }
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} className="modal_body modal-form-body">
        <div className="card">
          <div className="">
            <div className="admin-dashboard">
              <div className="title-header">
                <h5 className="card-header-01 text-center">
                  Create Dispatcher
                </h5>
                <ModalBody className="close-icon">
                  <AiOutlineClose
                    className="main_AiOutlineClose"
                    onClick={() => setModalIsOpen(false)}
                    color="rgba(27, 38, 68, 1)"
                  />
                </ModalBody>
              </div>
              <div className="row card-holder">
                <form className="form-control-holder" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        Full name<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="full_name"
                        onChange={(e) => setName(e.target.value)}
                        id="first_name"
                        placeholder="Enter your name"
                        type="text"
                      />
                      {error && name.length <= 0 ? (
                        <span className="valid-form" style={{ color: "red" }}>
                          Please Enter full name*
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label">
                        Email<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      {error && email.length <= 0 ? (
                        <span className="valid-form" style={{ color: "red" }}>
                          Please Enter the valid Email*
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Phone Number<span className="stra-icon">*</span>
                    </label>
                    <input
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                      placeholder="Enter your phone"
                      type="number"
                    />
                    {error && phone.length <= 0 ? (
                      <span className="valid-form" style={{ color: "red" }}>
                        Please Enter the 10 Digit number*
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Password<span className="stra-icon">*</span>{" "}
                    </label>
                    <input
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder="Enter your password"
                      type="text"
                    />
                    {error && password.length <= 0 ? (
                      <span className="valid-form" style={{ color: "red" }}>
                        Create your password*
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    value="Send Message"
                  >
                    Create Dispatcher
                  </button>
                  <div className="succbtn mb-4">
                    {succbtn ? <p>{succbtn}</p> : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="d-flex create-dispatcher align-items-center">
        <div className="plus-icon">
          <button type="submit" onClick={() => setModalIsOpen(true)}>
            <img src="/Assets/dash/plus.png" />
            Dispatcher
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateDispatch;
