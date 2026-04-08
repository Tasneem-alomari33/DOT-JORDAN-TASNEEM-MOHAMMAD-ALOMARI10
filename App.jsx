import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>

    <Link to="/login">Go to Login</Link>
    <br />
    <Link to="/register">Go to Register</Link>
  </div>
);

const Login = () => (
  <div>
    <h1>Login</h1>
    <Link to="/">Back to Home</Link>
  </div>
);

const Register = () => (
  <div>
    <h1>Register</h1>
    <Link to="/">Back to Home</Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;