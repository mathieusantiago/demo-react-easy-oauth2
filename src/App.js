import { FormConnect } from "react-easy-oauth2";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Brandlogo from "./assets/react-easy-oauth2.png";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [h1Color, setH1Color] = useState("#34698c");
  const [btnBgColor, setBtnBgColor] = useState("#34698c");
  const [linkColor, setLinkColor] = useState("#34698c");

  const styles = {
      bgComponent: {
        backgroundColor: bgColor,
      },
      textStyle: {
        color: textColor,
      },
      h1Style: {
        color: h1Color,
      },
      btnStyle: {
        backgroundColor: btnBgColor,
      },
      linkStyle: {
        color: linkColor,
      },
    };

  const catchPayload = (payload) => {
    console.log("catchPayload", payload);
  };
  const [signUp, setSignUp] = useState("signIn");
  const [lang, setLang] = useState("En");
  const [provider, setProvider] = useState([]);
  const [logo, setLogo] = useState(
    "https://cdn-icons-png.flaticon.com/512/3387/3387987.png"
  );

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

  if (field[0] === "") {
    setField([
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
  }

  const split = (string) => {
    return string.split(",");
  };

  const FormConnectComponent = () => {
    console.log("provider", styles);
    return (
      <FormConnect
        url={"https://wpxvwfcdmgcsvczglefh.supabase.co"}
        apiKey={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweHZ3ZmNkbWdjc3ZjemdsZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyODQ5NTIsImV4cCI6MTk5Mjg2MDk1Mn0.n84d9xUJmuxdigF8aFstFW4DRVw1dBLDx4Lb4JorMts"
        }
        catchPayload={catchPayload}
        logo={logo}
        useDefault={signUp}
        field={field}
        provider={provider}
        lang={lang}
        theme={styles}
      />
    );
  };
  return (
    <div>
      <Container>
        <Image src={Brandlogo} className="imageBrand" fluid={true} />
        <Row className="mt-5">
          <Col>
            <FormConnectComponent />
          </Col>
          <Col className="formContainer">
            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>useDefault</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default SignIn"
                  onChange={(e) => setSignUp(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Lang</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default En"
                  onChange={(e) => setLang(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Source logo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="https://cdn-icons-png.flaticon.com/512/3387/3387987.png"
                  DefaultValue="https://cdn-icons-png.flaticon.com/512/3387/3387987.png"
                  onChange={(e) => setLogo(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Provider liste</Form.Label>
                <p>please space provider with ","</p>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default All"
                  onChange={(e) => setProvider(split(e.target.value))}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Field liste</Form.Label>
                <p>please space provider with ","</p>
                <Form.Control
                  required
                  type="text"
                  placeholder="Default All"
                  onChange={(e) => setField(split(e.target.value))}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Background color:</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Text color:</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>H1 color:</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={h1Color}
                  onChange={(e) => setH1Color(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Button background color:</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={btnBgColor}
                  onChange={(e) => setBtnBgColor(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom02">
                <Form.Label>Link color:</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={linkColor}
                  onChange={(e) => setLinkColor(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
