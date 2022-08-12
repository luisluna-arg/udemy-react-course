import './App.css';
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`usuario: ${email}, Password: ${password}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
      <div>
        <h2>Login</h2>
        <label>
          E-Mail
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type='submit'>
          Enter
        </button>
      </div>
      </form>
    </div>
  );
}

export default App;
