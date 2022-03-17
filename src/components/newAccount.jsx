import {
  ContainerNewAccount,
  ContainerForm,
  Form,
  DateSpan,
  GenderSection,
  SelecGender,
} from "./style/newAccountStyle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function NewAccount() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
  });

  //const [name, setName] = useState("");
  //const [lastName, setLastName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "https://my-facebook-cloneapp-default-rtdb.firebaseio.com/users.json",
        {
          user,
        },
      )
      .then((req) => console.log("Dados postados: ", req.config.data))
      .catch((err) => console.log("Este foi o ERRO: ", err));

    // setName("");
    // setLastName("");
  }

  const handleFormChange = (e) => {
    if (e.target.getAttribute("name") == "name") {
      setUser({
        name: e.target.value,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
      });
    } else if (e.target.getAttribute("name") == "lastName") {
      setUser({
        name: user.name,
        lastName: e.target.value,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
      });
    } else if (e.target.getAttribute("name") == "email") {
      setUser({
        name: user.name,
        lastName: user.lastName,
        email: e.target.value,
        password: user.password,
        birthday: user.birthday,
      });
    } else if (e.target.getAttribute("name") == "password") {
      setUser({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: e.target.value,
        birthday: user.birthday,
      });
    } else if (e.target.getAttribute("name") == "birthday") {
      setUser({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        birthday: e.target.value,
      });
    }
  };

  function teste() {
    axios
      .get("https://my-facebook-cloneapp-default-rtdb.firebaseio.com/users.json")
      .then((req) => console.log(req.data))
      .catch((err) => console.log(err));
  }

  return (
    <ContainerNewAccount
      onLoad={teste()}
      id="containerNewAccount"
      onSubmit={(event) => handleSubmit(event)}
    >
      <h1>facebook</h1>
      <ContainerForm id="containerForm">
        <h2>Create a new account</h2>
        <p>It's easy and fast</p>
        <Form>
          <span>
            <label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => handleFormChange(e)}
              />
            </label>
            <label>
              <input
                placeholder="Last name"
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={(e) => handleFormChange(e)}
              />
            </label>
          </span>
          <label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handleFormChange(e)}
            />
          </label>
          <DateSpan>
            <label>Birthday:</label>
            <input
              placeholder="Birthday"
              type="date"
              name="birthday"
              value={user.birthday}
              onChange={(e) => handleFormChange(e)}
            />
          </DateSpan>
          <GenderSection id="Genders">
            <label>Gender:</label>
            <SelecGender>
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" />
            </SelecGender>
            <SelecGender>
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" />
            </SelecGender>
            <SelecGender>
              <label htmlFor="other">Other</label>
              <input type="radio" name="gender" id="other" />
            </SelecGender>
          </GenderSection>
          <button>Register</button>
        </Form>
        <Link to="/">Already have an account?</Link>
      </ContainerForm>
    </ContainerNewAccount>
  );
}

export default NewAccount;
