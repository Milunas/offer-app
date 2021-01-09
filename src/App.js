import './App.css';
import React from 'react';

function App() {
  return (
    <form class="login-form" action="javascript:void(0);">
    <h1>Logowanie</h1>
    <div class="form-input-material">
      <input type="input" class="form__field" placeholder="Nazwa użytkownika" name="name" id='name' required />
    </div>
    <div class="form-input-material">
      <input type="input" class="form__field" placeholder="Hasło" name="password" id='password' required />
    </div>
    <button type="submit" class="btn btn-primary btn-ghost">Zaloguj się</button>
  </form>
  );
}

export default App;