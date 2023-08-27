import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import img from "../assets/CLHpktmI5_QCEAE=.webp";
import { MyContainer } from "../components/MyContainer";

function FAQ() {
  return (
    <MyContainer>
      <Container fluid="lg" style={{ maxWidth: "80%", paddingBottom: "50px" }}>
        <img
          className="img-fluid"
          src={img}
          alt="logo"
          style={{ height: "300px" }}
        />
        <Accordion fluid="lg" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Do I have to be home to receive my order?
            </Accordion.Header>
            <Accordion.Body>
              If you choose Same-Day or Express Delivery at checkout, you will
              need to be home to receive your order and provide valid
              government-issued photo ID which proves you are 19 years of age or
              older. For Canada Post delivery, if no one is home, the Canada
              Post delivery agent will leave a delivery notice card with
              instructions for pickup. Anyone who is 19 years of age or older
              may accept your order, as long as they show valid
              government-issued photo ID. If your package is being picked up
              from a Canada Post outlet by someone other than you, they must
              show valid government-issued photo ID (or a document such as a
              utility bill) that shows they have the same address as you. If
              they do not live at the same address, they must show valid
              government-issued photo ID and either the notice card (signed by
              you and with their name printed on it) or a letter of
              authorization or a legal document (such as power of attorney)
              demonstrating their authority to act on your behalf.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What will happen to my Same-Day or Express Delivery order if I use
              a PO box as my shipping address?
            </Accordion.Header>
            <Accordion.Body>
              Same-Day and Express Delivery orders placed with a PO Box shipping
              address will be sent back to the OCS warehouse. Once we receive
              your package and process the return, a refund will be credited via
              the original method of payment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>How will my order be delivered?</Accordion.Header>
            <Accordion.Body>
              Our delivery options have changed as we react to COVID-19. For the
              latest information on delivery and shipping methods, timing and
              fee
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I change or cancel my order after I’ve placed it?
            </Accordion.Header>
            <Accordion.Body>
              Because our team assembles your order very soon after you place
              it, if you notice an error right after receiving your order
              confirmation, you should immediately call our customer service
              line at 0542116116 to see if the order can be changed.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Will I have to show my ID when I receive my order?
            </Accordion.Header>
            <Accordion.Body>
              Yes. If you choose Same-Day or Express Delivery at checkout, you
              will need show valid government-issued photo ID which proves you
              are 19 years of age or older to the delivery driver. To accept a
              delivery from a Canada Post delivery agent, you must show original
              valid government-issued photo ID and sign for the package (due to
              ongoing COVID-19 restrictions, they may ask for a verbal signature
              instead). An order can only be delivered to an adult 19 years of
              age or older.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </MyContainer>
  );
}

export default FAQ;
