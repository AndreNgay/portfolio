import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <section id="home" className="jumbotron">
        <Container>
          <div>
            <h1 className="display-4">Hi, I'm Andre!</h1>
            <p className="lead">I am an aspiring developer. Welcome to my portfolio.</p>
          </div>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h2 className="section-heading">About Me</h2>
                <p className="text-muted">
                  I'm Andre John B. Ngay, a 20-year-old aspiring developer based in La Trinidad, Benguet. I'm passionate about creating innovative solutions through coding and exploring the vast world of technology.
                </p>
                <p className="text-muted">
                  Education has been a cornerstone of my journey. I completed my primary education at Lucban Elementary School, pursued my secondary education at Benguet State University, and I'm currently honing my skills at the University of Baguio for my tertiary level education.
                </p>
                <p className="text-muted">
                  Beyond the realm of programming, I have a keen interest in leveraging technology to address real-world problems. In my free time, I find joy in playing video games, strumming the guitar, and staying updated with the latest trends in the tech industry.
                </p>
                <p className="text-muted">
                  My goal is to contribute meaningfully to the ever-evolving field of software development, continuously learning and adapting to emerging technologies.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
