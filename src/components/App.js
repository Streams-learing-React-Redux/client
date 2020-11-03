import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { HashRouter, Route, Link } from "react-router-dom";
// import { MemoryRouter, Route, Link } from "react-router-dom";
//dummy component
const PageOne = () => {
  return (
    <div>
      page 1<Link to="/page2">Navigate to page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      page 2<Link to="/">Navigate to page 1</Link>
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

      {/* <HashRouter>  //this injects a # befor curretn path route
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/page2" component={PageTwo} />
        </div>
      </HashRouter> */}

      {/* <MemoryRouter> // this doesnot changes the url on clicking on different page link
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/page2" component={PageTwo} />
        </div>
      </MemoryRouter> */}
    </div>
  );
};

export default App;
