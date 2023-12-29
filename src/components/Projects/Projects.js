import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Health Care"
              description="A end user support and online consultation project. A web-based application that allows patient to get instand guidance on their health issues. Prediction of diseases and etc"
              ghLink="https://github.com/ynezdias/E-HealthCare"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SubsMaster"
              description="A web application made specially for managing various users with different subscriptions. With Data Handling and Activation/Deactivation and Extension of subscriptions."
              ghLink="https://github.com/ynezdias/HackXWebsite"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HackX"
              description="A Web application built for St. Francis Institute of technology for a All over Inida Hackathon."
              ghLink="https://github.com/ynezdias/HackXWebsite"
           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
