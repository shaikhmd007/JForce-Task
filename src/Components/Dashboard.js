import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Dashboard.css";
const Dashboard = ({ title }) => {
  return (
    <Card
      style={{ width: "15rem", margin: "0.2rem", height: "" }}
      className="cards"
    >
      <Card.Img variant="top" src="/images/screenshot.avif" alt="screenshot" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Prof. Dipti Gupta - Essentials of HRM session 15 -Syllabus Completion
          / Doubt Clearing / Revsion / Case Study discussion
          <ListGroup.Item>
            <ListGroup.Item>Monday, 21-Nov-2022</ListGroup.Item>
            <ListGroup.Item>Weekday Batch</ListGroup.Item>
          </ListGroup.Item>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dashboard;
