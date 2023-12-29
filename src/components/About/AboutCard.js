import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ynez Dias </span>
            from  <span className="purple"> Mumbai.</span>
            <br />
            I am currently a student at St. Francis Institue of Technology
            <br />
            Pursuing Bachelors of Engineering in Computer Engineering
            <br />
            <br />
            Apart from coding, I also have great managemnet skills
          </p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
