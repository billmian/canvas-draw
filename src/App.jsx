import React from "react";
import "./style.css";

const App = () => {
  const Card = () => {
    return <div className="card-contianer"></div>;
  };
  const Section = () => {
    return (
      <div className="section-container">
        <div>
          <div className="section-title">这是标题</div>
        </div>
        <Card></Card>
      </div>
    );
  };
  return (
    <div className="container">
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </div>
  );
};

export default App;
