import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./Home.css";

const Home = () => {
  return (
    <Container className="Container">
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc_DRIPwmjeiIAXqCglqvDe0OYkKh5YncNmU5vTApAly0E3yuhL2XEx4IYBO0IPy8PB8&usqp=CAU"
            fluid
          />
        </Col>
        <Col md={6} className="d-flex align-items-left">
          <div>
            <br></br>
            <br></br>

            <h1>
              Welcome to Our Online Store!{" "}
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cannabis_leaf.svg/120px-Cannabis_leaf.svg.png"></Image>
            </h1>
            <p>
              Cannabis, also known as marijuana among other names, is a
              psychoactive drug from the cannabis plant. Native to Central or
              South Asia, the cannabis plant has been used as a drug for both
              recreational and entheogenic purposes and in various traditional
              medicines for centuries. Tetrahydrocannabinol (THC) is the main
              psychoactive component of cannabis, which is one of the 483 known
              compounds in the plant, including at least 65 other cannabinoids,
              such as cannabidiol (CBD). Cannabis can be used by smoking,
              vaporizing, within food, or as an extract. Cannabis has various
              mental and physical effects, which include euphoria, altered
              states of mind and sense of time, difficulty concentrating,
              impaired short-term memory, impaired body movement (balance and
              fine psychomotor control), relaxation, and an increase in
              appetite.{" "}
            </p>
            <p>
              {" "}
              Onset of effects is felt within minutes when smoked, but may take
              up to 90 minutes when eaten. The effects last for two to six
              hours, depending on the amount used. At high doses, mental effects
              can include anxiety, delusions (including ideas of reference),
              hallucinations, panic, paranoia, and psychosis.{" "}
            </p>
            <p>
              {" "}
              There is a strong relation between cannabis use and the risk of
              psychosis, though the direction of causality is debated. Physical
              effects include increased heart rate, difficulty breathing,
              nausea, and behavioral problems in children whose mothers used
              cannabis during pregnancy; short-term side effects may also
              include dry mouth and red eyes. Long-term adverse effects may
              include addiction, decreased mental ability in those who started
              regular use as adolescents, chronic coughing, susceptibility to
              respiratory infections, and cannabinoid hyperemesis syndrome.
            </p>
            <Button variant="primary" linl>
              Shop Now
            </Button>
          </div>
        </Col>
      </Row>

      <br></br>

      <ProductSlider></ProductSlider>
    </Container>
  );
};

export default Home;
