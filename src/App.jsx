import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);

  function incStep() {
    if (step >= 1 && step <= 2) {
      setStep(step + 1);
    }
  }

  function decStep() {
    if (step >= 2 && step <= 3) {
      setStep(step - 1);
    }
  }

  return (
    <div>
      <header>
        <h1>Multi-Step Form</h1>
      </header>

      <form>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        <div>
          <button type="button" onClick={decStep}>
            Prev
          </button>
          <button type="button" onClick={incStep}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
