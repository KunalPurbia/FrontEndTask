import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AllPosts } from './components/Posts';
import { SinglePost } from './components/SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/posts/:id" component={SinglePost} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;