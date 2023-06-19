import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      {/* Your routes go here */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

