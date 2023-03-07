import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { Container } from "react-bootstrap";
import "./Style.css";
import NavBar from "../../Components/NavBar/NavBar";
function Docs() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function fetchReadme() {
      const response = await fetch(
        "https://api.github.com/repos/mathieusantiago/react-easy-oauth2/readme"
      );
      const data = await response.json();
      const markdown = atob(data.content);

      setMarkdown(markdown);
    }

    fetchReadme();
  }, []);

  return (
    <div>
      <>
        <div className="nav" style={{ top: "3%", left: "50%" }}>
          <NavBar />
        </div>
        <Container className="bg-light docs mt-5 mb-5">
          <Markdown>{markdown}</Markdown>
        </Container>
      </>
    </div>
  );
}
export default Docs;
