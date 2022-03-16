import GlobalStyle from "./components/style/globalStyle";
import Study from "./components/study";
import Rotas from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Rotas />
      <Study />
    </div>
  );
}

export default App;
