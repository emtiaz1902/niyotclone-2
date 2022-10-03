import "./App.css";
import { useState } from "react";

import Alert from "./components/Alert";
import Navbars from "./components/Navbars";
import TeaxForm from "./components/TeaxForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041634";
      showAlert("Dark Mode Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e7e9f5";
      showAlert("Light Mode Enable", "success");
    }
  };
  return (
    <>
      <Navbars title="Text Editor Form" toggleMode={toggleMode} mode={mode} />
      <div className="container">
        <Alert alert={alert} />
        <TeaxForm
          test="Write something to analyze more"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}
export default App;
