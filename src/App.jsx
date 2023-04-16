import styled from "styled-components";
import "./styles/index.scss";
import Bar from "./components/Bar";

function App() {
  return (
    <>
      <Bar />
      <webview src="https://www.google.com" className="webview"></webview>
    </>
  );
}

export default App;
