import Navi from "./components/Navi";
import Categorylist from "./components/Categorylist";
import Productlist from "./components/Productlist";
import { Badge, Col, Container, Row } from "reactstrap";



function App() {
  return (
    <Container>
      <Row>
        <Navi  color='dark' dark='true' expand='sm'/>
      </Row>
      <Row>
        <Col xs="4">
        <Badge color="danger" style={{width:'100%'}}>
        <Categorylist title='Categorylist' />
        </Badge>
        </Col>
        <Col xs="8">
        <Badge color="primary" style={{width:'100%'}}>
        <Productlist />
        </Badge>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
