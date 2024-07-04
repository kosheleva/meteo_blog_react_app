import ListGroup from 'react-bootstrap/ListGroup';
import './contacts.css';


function Contacts() {
  return (
    <>
      <div className="container">
        <div className="panel panel_contacts_info text_shadow">
          <p>
            You can contact us, using the following contacts:
          </p>
          <br />
          <ListGroup className="contacts_list">
            <ListGroup.Item>Email: email@email.com</ListGroup.Item>
            <ListGroup.Item>Tel: +112 233 44 55</ListGroup.Item>
            <ListGroup.Item>WhatsUp: +999 888 77 66</ListGroup.Item>
            <ListGroup.Item>Skype: @meteo_blog</ListGroup.Item>
          </ListGroup>
        </div> 
      </div>
    </>
  )
}

export default Contacts;
