import { useState } from "react";
import Stepper from "./components/Stepper";
import PersonalDetails from "./pages/PersonalDetails";
import CreateWorkspace from "./pages/CreateWorkspace";
import Workspace from "./pages/Workspace";
import CompleteSetup from "./pages/CompleteSetup";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const goToNextPage = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  const stepPages = [
    <PersonalDetails nextPage={goToNextPage} />,
    <Workspace nextPage={goToNextPage} />,
    <CreateWorkspace nextPage={goToNextPage} />,
    <CompleteSetup nextPage={goToNextPage} />,
  ];
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Stepper steps={4} activeItem={currentStep + 1} />
        <div className="page-container">{stepPages[currentStep]}</div>
      </div>
    </div>
  );
}

export default App;
