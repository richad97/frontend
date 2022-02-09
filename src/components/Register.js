import { Form, Button } from "react-bootstrap";

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="input" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="input" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="input" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <Button variant="primary">Already have an account?</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
