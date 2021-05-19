import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Myaccount() {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    let tempEmail = localStorage.getItem('Email') || '';
    let tempName = localStorage.getItem('Username') || '';
    let tempUser = { name: tempName, email: tempEmail };
    // console.log(tempCart, 'cart items');
    setUserDetails(tempUser);
  }, []);
  return (
    <div>
      <h6 className="welcomenote">Welcome to your profile</h6>
      <div className="acntdiv">
        <Card className="cardnote" border="primary" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://i.stack.imgur.com/l60Hf.png/100px180" />
          <Card.Body>
            <Card.Title>Account Details</Card.Title>
            <Card.Text>Username: {userDetails.name}</Card.Text>
            <Card.Text>Email: {userDetails.email}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <em>Number one Rated Food Ordering Site</em>
            </small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default Myaccount;
