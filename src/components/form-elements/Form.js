import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormInfo() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3 btn-set" controlId="formBasicEmail">
            <Form.Label>Appointment for</Form.Label>
            <ButtonGroup aria-label="Basic example">
              <Button variant="light">My Self</Button>
              <Button variant="primary">Other Person</Button>
            </ButtonGroup>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3 btn-set" controlId="formBasicEmail">
            <Form.Label>Relation to the Patient</Form.Label>
            <Form.Select>
              <option>Spouse</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Patient Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3 btn-set" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Select>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          
        </Col>
      </Row>

    </Form>
  );
}

export default FormInfo;
