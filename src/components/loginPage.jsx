import {
  Container,
  ContainerLogin,
  Presentation,
  Title,
  Form,
  BtnLogin,
  BtnNewAccount,
} from "./style/loginPageStyle";
//import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Container id="initial-page">
      <Presentation id="presentation">
        <Title>facebook</Title>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </Presentation>

      <ContainerLogin id="login-area">
        <Form>
          <label>
            <input placeholder="Email or phone number" type="text" />
          </label>
          <label>
            <input placeholder="Password" type="password" />
          </label>
          <BtnLogin href="./NewAccount/newAccount">Log In</BtnLogin>
        </Form>
        <BtnNewAccount to="new-account">Create New Account</BtnNewAccount>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
