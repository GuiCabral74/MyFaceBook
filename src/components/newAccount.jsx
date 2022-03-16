import {
  ContainerNewAccount,
  ContainerForm,
  Form,
  DateSpan,
  GenderSection,
  SelecGender,
} from "./style/newAccountStyle";
import { Link } from "react-router-dom";

function NewAccount() {
  return (
    <ContainerNewAccount id="containerNewAccount">
      <h1>facebook</h1>
      <ContainerForm id="containerForm">
        <h2>Create a new account</h2>
        <p>It's easy and fast</p>
        <Form>
          <span>
            <label>
              <input placeholder="Name" type="text" />
            </label>
            <label>
              <input placeholder="Last name" type="text" />
            </label>
          </span>
          <label>
            <input placeholder="Email" type="email" />
          </label>
          <label>
            <input placeholder="Password" type="password" id="" />
          </label>
          <DateSpan>
            <label>Birthday:</label>
            <input placeholder="Birthday" type="date" name="" id="" />
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
