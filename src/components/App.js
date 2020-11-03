import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//dummy component
const PageOne = () => {
  return <div>page 1</div>;
};

const PageTwo = () => {
  return (
    <div>
      page 2<button>click</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/page2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
