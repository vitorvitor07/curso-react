import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import RenderCalc from './components/Calc'

import "./App.css";

function App() {
  return (
    <div>
      <h1>Fundamentos</h1>
      <p>Importando Componente</p>
      <FirstComponent></FirstComponent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>
      <RenderCalc></RenderCalc>
    </div>
  );
}

export default App;
