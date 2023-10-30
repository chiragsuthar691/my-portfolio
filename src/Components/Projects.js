import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import calc from "../assets/img/calc.png";
import projImg3 from "../assets/img/project-img3.png";
import POMODORO from "../assets/img/POMODORO.png";
import drumMachine from "../assets/img/drumMachine.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import MarkdownPreviewer from "../assets/img/MarkdownPreviewer.png";
import QuoteMachine from "../assets/img/QuoteMachine.png";
import TodoApp from "../assets/img/TodoApp.png";
import sona from "../assets/img/Sona.png";
import bagguru from "../assets/img/bagguru.png";
import collective from "../assets/img/collective.png";
import gpsx from "../assets/img/gpsx.png";
import dualwireAdmin from "../assets/img/dualwire-admin.png";
import dualwire from "../assets/img/dualwire.png";
import solarmatrix from "../assets/img/solarmatrix.png";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  Tab,
  TabContent,
  TabPane,
} from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Calculator",
      description: "Design & Web Development",
      imgUrl: calc,
      url: "https://codepen.io/Coding_star/pen/jOKEEoz",
    },
    {
      title: "Pomodoro Clock",
      description: "Design & Web Development",
      imgUrl: POMODORO,
      url: "https://codepen.io/Coding_star/pen/xxzGExY",
    },
    {
      title: "Drum Machine",
      description: "Design & Web Development",
      imgUrl: drumMachine,
      url: "https://codepen.io/Coding_star/pen/RwJwoVL",
    },
    {
      title: "Markdown Previewer",
      description: "Design & Web Development",
      imgUrl: MarkdownPreviewer,
      url: "https://codepen.io/Coding_star/pen/OJELOpJ?editors=0010",
    },
    {
      title: "Quote Machine",
      description: "Design & Web Development",
      imgUrl: QuoteMachine,
      url: "https://codepen.io/Coding_star/pen/xxjvQqa?editors=0011",
    },
    {
      title: "Todo App",
      description: "Design & Web Development",
      imgUrl: TodoApp,
      url: "https://codepen.io/Coding_star/pen/XWYKRQE?editors=0110",
    },
  ];
  const projects2 = [
    {
      title: "Sona Jewellers",
      description: "Ecommerce Jewels Store",
      imgUrl: sona,
      url: "https://sona-jewellers.netlify.app/",
    },
    {
      title: "Nakhair Collective",
      description: "Collective events",
      imgUrl: collective,
      url: "https://collective.nakhair.com.au/",
    },
    {
      title: "DualWire",
      description: "Social Media Giveaway tool",
      imgUrl: dualwire,
      url: "https://polite-malasada-80ea59.netlify.app/",
    },
    {
      title: "GPS-X",
      description: "GPS Tracking System",
      imgUrl: gpsx,
      url: "http://18.208.157.106:3000/",
    },
    {
      title: "Solar Metrix",
      description: "Solar Panel Management System",
      imgUrl: solarmatrix,
      url: "http://18.208.157.106:3000/",
    },
    {
      title: "BagGuru",
      description: "CRMS",
      imgUrl: bagguru,
      url: "http://15.206.89.254:5500",
    },
    {
      title: "DualWire Admin Panel",
      description: "Admin Panel with Horizon UI",
      imgUrl: dualwireAdmin,
      url: "https://dualwire-admin.netlify.app/auth/sign-in",
    },
  ];
  const projects3 = [
    {
      title: "Business Startup",
      description: "Design & Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Web Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <>
      <section id="projects" className="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Let's Build Something Together Amazing Together</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <NavItem>
                    <NavLink title="first" eventKey="first">
                      Tab One
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink title="second" eventKey="second">
                      Tab Two
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink title="third" eventKey="third">
                      Tab Three
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent>
                  <TabPane title="first" eventKey="first">
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </TabPane>
                  <TabPane title="second" eventKey="second">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </TabPane>
                  <TabPane title="third" eventKey="third">
                    <Row>
                      {projects3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </TabPane>
                </TabContent>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-right"
          src={colorSharp2}
          alt={"colour sharp2"}
        />
      </section>
    </>
  );
};
