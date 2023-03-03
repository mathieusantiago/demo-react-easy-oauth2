import { FormConnect } from "react-easy-oauth2";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Col, Container, Form, Row } from "react-bootstrap";
import {  useState } from "react";

function App() {
  const catchPayload = (payload) => {
    console.log("catchPayload", payload);
  };
  const [signUp, setSignUp] = useState("signUp");
  const [lang, setLang] = useState("En");
  const [provider, setProvider] = useState([]);
  const [field, setField] = useState([
    "fname",
    "lname",
    "email",
    "passwd",
    "add1",
    "add2",
    "phone",
    "city",
    "zip",
  ]);
  const split = (string) => {
     return string.split(",");
  }
  const FormConnectComponent = () => {
    return (
      <FormConnect
        logo={"https://cdn-icons-png.flaticon.com/512/3387/3387987.png"}
        url={"https://wpxvwfcdmgcsvczglefh.supabase.co"}
        apiKey={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweHZ3ZmNkbWdjc3ZjemdsZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyODQ5NTIsImV4cCI6MTk5Mjg2MDk1Mn0.n84d9xUJmuxdigF8aFstFW4DRVw1dBLDx4Lb4JorMts"
        }
        catchPayload={catchPayload}
        useDefault={signUp}
        field={field}
        provider={
          provider
        }
        theme={{
          bgComponent: {
            backgroundColor: "#ffffff",
          },
          textStyle: {
            color: "#6b7280",
          },
          h1Style: {
            color: "red",
          },
          btnStyle: {
            backgroundColor: "red",
          },
          linkStyle: {
            color: "red",
          },
        }}
        lang={lang}
      />
    );
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FormConnectComponent />
          </Col>
          <Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>useDefault</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default SignIn"
                  onChange={(e) => setSignUp(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Lang</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default En"
                  onChange={(e) => setLang(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Provider</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default All"
                  onChange={(e) => setProvider(split(e.target.value))}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Filed</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default All"
                  onChange={(e) => setField(split(e.target.value))}
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
