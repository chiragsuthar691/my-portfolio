import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm.js";
import logo6 from "../assets/img/logo6.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo6} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chirag-suthar-b93302147/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#!">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/chirag.suthar.55/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>@ Chirag Suthar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
