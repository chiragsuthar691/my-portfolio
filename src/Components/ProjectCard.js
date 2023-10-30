import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="title" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>{" "}
          <a href={url}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="" />
          </a>
        </div>
      </div>
    </Col>
  );
};
