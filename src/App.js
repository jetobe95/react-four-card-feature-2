import React from 'react';
import CardFeatureItem from './components/card-feature';
import supervisorIcon from './assets/icon-supervisor.svg'
import teamBuilderIcon from './assets/icon-team-builder.svg'
import karmaIcon from './assets/icon-karma.svg'
import calculatorIcon from './assets/icon-calculator.svg'
function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Reliable, efficient delivery</h1>
      <h2 className="subtitle">Powered by Technology</h2>
      <p className="body-message">Our Artificial Intelligence powered tool use millions of project data point to ensure that your project is successfull</p>
      <div className="card-list">
        <CardFeatureItem
          title="Supervisor"
          subtitle="Monitors activity to identity  project roadblock"
          icon={supervisorIcon}
          borderColor="cian"
          />
        <CardFeatureItem
          title="Team Builder"
          borderColor="red"
          subtitle={"Scans our talent network to create the optimal team for your project"}
          icon={teamBuilderIcon}
        />
        <CardFeatureItem
          title="Karma"
          borderColor="orange"
          subtitle={"Regularly evaluated our talet to ensure quality"}
          icon={karmaIcon}
        />
        <CardFeatureItem
          title="Calculator"
          borderColor="blue"
          subtitle="Uses data from past projects to provide better delivery estimates"
          icon={calculatorIcon}
        />
      </div>
    </div>
  );
}

export default App;
