import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                A Keen learner with communication skills, good listener, good
                analyst improving on a daily basis. Have good technical
                concepts. Wants to improve technical skills and knowledge.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt={"a"} />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"b"} />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"b"} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"b"} />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"b"} />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"s"} />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={"d"} />
                  <h5>Java script</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={"w"} />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={"w"} />
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={"w"} />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={"w"} />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={"q"} />
                  <h5>Web development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt={"colour sharp"}
      />
    </section>
  );
};
