import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'pages/SignIn';
import Dashboard from 'pages/Dashboard';
import LandingPage from 'pages/LandingPage';

function App() {
  const [user, setUser] = useState(null);

  return (
      <Switch>
        <Route path="/signin" render={(props) => <SignIn setUser={setUser} {...props} />} />
        <Route path="/dashboard" render={(props) => <Dashboard user={user} setUser={setUser} {...props} />} />
        <Route path="/" component={LandingPage} />  {/* Add LandingPage route */}
      </Switch>
  );
}

export default App;
