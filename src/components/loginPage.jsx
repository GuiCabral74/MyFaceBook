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

function LoginPage() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container id="initial-page">
      <Presentation id="presentation">
        <Title>facebook</Title>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </Presentation>

      <ContainerLogin id="login-area">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input placeholder="Email or phone number" name="email" type="email" {...register("email")} />
          </label>
          <label>
            <input placeholder="Password" name="password" type="password" {...register("password")} />
          </label>
          <BtnLogin href="./NewAccount/newAccount">Log In</BtnLogin>
        </Form>
        <BtnNewAccount to="new-account">Create New Account</BtnNewAccount>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
