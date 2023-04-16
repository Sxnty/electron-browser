import { useContext, useRef } from "react";
import "./styles/index.scss";
import Bar from "./components/Bar";
import { UrlContext } from "./context/UrlContext";

function App() {
  const { url } = useContext(UrlContext);
  console.log(url)
  const myRef = useRef(null);
  const goBack = () => {
    myRef.current.goBack();
  };
  const goForward = () => {
    myRef.current.goForward();

  }
  return (
    <>
      <Bar back={goBack} forward={goForward} />
      <webview
        src={url}
        className="webview"
        partition="persist:webview1"
        ref={myRef}
      ></webview>
    </>
  );
}

export default App;
