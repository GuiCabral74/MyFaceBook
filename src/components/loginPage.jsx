import {
  Container,
  ContainerLogin,
  Presentation,
  Title,
  Form,
  BtnLogin,
  BtnNewAccount,
} from "./style/loginPageStyle";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function LoginPage() {

  const history = useNavigate();

  //const { register, handleSubmit } = useForm();
  //const onSubmit = data => console.log(data);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [logged, setLogged] = useState (false);


  async function Login(e) {
    e.preventDafult();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      console.log(user.user.email);
      console.log("Deu certo");
      setLogged(true);
      if (logged == true) {
        <Navigate to="/pagina-teste" />
          //history.push("/pagina-teste")

      }
      
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <Container id="initial-page">
      <Presentation id="presentation">
        <Title>facebook</Title>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </Presentation>

      <ContainerLogin id="login-area">
        {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
        <Form onSubmit={(e) =>Login(e)}>
          <label>
            <input placeholder="Email or phone number" name="email" type="email"  onChange={(event) => setLoginEmail(event.target.value)} />
          </label>
          <label>
            <input placeholder="Password" name="password" type="password"  onChange={(event) => setPassword(event.target.value)}/>
          </label>
          <BtnLogin>Log In</BtnLogin>
        </Form>
        <BtnNewAccount to="new-account">Create New Account</BtnNewAccount>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
