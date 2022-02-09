import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login(props) {
  const { setLogIn } = props;

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://ft-secret-family-recipes.herokuapp.com/auth/login",
        credentials
      )
      .then((resp) => {
        const data = resp.data;
        const token = data.token;
        const inStorage = localStorage.getItem("token");

        if (!inStorage) {
          localStorage.setItem("token", token);
          setLogIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="input"
                name="username"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant="primary">Forgot Password?</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
