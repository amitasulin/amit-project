import { Card, Container } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import orderImg from "../../assets/images.png";
import packImg from "../../assets/cardboard-box-packing-peanuts-GettyImages-177495280-MLedit.jpg";
import idImg from "../../assets/istockphoto-612650934-612x612.jpg";
import "./HowToOrder.css";

function HowToOrder() {
  return (
    <Container fluid="lg">
      <CardGroup
        style={{
          margin: "auto",
          paddingTop: "50px",
          paddingBottom: "50px",
          width: "800px",
          display: "flex",
        }}
      >
        <Card>
          <Card.Img variant="top" src={orderImg} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>Order up to 30 grams of products</Card.Title>
            <Card.Text>
              Accepted Payment Options: Mastercard, Mastercard Debit, Visa, Visa
              Debit and AMEX.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={packImg}
            style={{ height: "200px" }}
            lg
          />
          <Card.Body>
            <Card.Title>
              All Products ship directly from Afula Distribution Centre.
            </Card.Title>
            <Card.Text>
              Products are typically delivered within 1 to 2 business days, with
              some exceptions. Please note that due to current challenges
              associatedwith COVID-19, order fulfillment and shipping may take
              longer than usual. Yourpatience is appreciated as we work safely
              to serve you.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={idImg} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>Receive your order with your proof of ID.</Card.Title>
            <Card.Text>
              We accept israeli Passport, Israeli Citizenship card, israeli
              Armed Forces ID or Driver’s License
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default HowToOrder;
