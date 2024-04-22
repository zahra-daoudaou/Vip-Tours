import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function GuidesServices() {
  return (
    <Card style={{ width: '18rem', border:'0' }}>
      <Card.Img variant="top" src="guides.jpeg" />
      <div class="align-self-center">
        <Card.Body>
          <div class="d-grid gap-2">
            <Button style={{ border:'0', height: '3rem', width: '18rem', backgroundColor: '#F68712', color: '#24265D', fontWeight: 'bold', fontSize: 'large' }} >Guides</Button>
            <Button style={{ border:'0', height: '3rem', width: '18rem', backgroundColor: '#51ADE5', color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }} >
            <Link to="/guides" class="nav-link px-2 link-light"> Know more </Link>
            </Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default GuidesServices;