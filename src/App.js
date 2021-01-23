import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './HomePage'

function App() {
  return (
  <Router>
  <Switch>
    <Route exact path="/offer-app">
      <LoginForm/>
    </Route>
    <Route path="/HomePage">
      <HomePage />
    </Route>
  </Switch>
  </Router>
  );
  
}

function LoginForm() {
  return (<form class="login-form" action="javascript:void(0);">
    <h1>Logowanie</h1>
    <div class="form-input-material">
      <input type="input" class="form__field" placeholder="Nazwa użytkownika" name="name" id='name' required />
    </div>
    <div class="form-input-material">
      <input type="input" class="form__field" placeholder="Hasło" name="password" id='password' required />
    </div>   
    <Link to="/HomePage">
        <button type="submit" class="btn btn-primary btn-ghost">Zaloguj się</button>
    </Link>
  </form>
  )
}


export default App;