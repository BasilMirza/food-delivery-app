import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import MenuModal from '../Modals/MenuModal';

function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const restaurants = [
    {
      id: 0,
      Restaurant: 'Hyderabadi Restaurant',
      Discription: 'Happy hour is a marketing term for a time when a venue offers discounts on alcoholic drinks. Free appetizers and discounted menu items are often served during happy hour.',
      Cuisine: 'Indian/Asian',
      Ratings: 4.1,
    },
    {
      id: 1,
      Restaurant: 'Lemon Tree',
      Discription: 'We aim to help you create mouthwatering food descriptions in less time than it would take the average restaurant to serve you drinks. ',
      Cuisine: 'Chinese/Indian/Mexican',
      Ratings: 4.3,
    },
    {
      id: 2,
      Restaurant: 'Italian Restaurant',
      Discription: 'That train of thought may have been inspired by his choice of “sausage salad,” a salad made almost entirely of bologna and raw onions drizzled with vinegar.',
      Cuisine: 'Indian/Italian',
      Ratings: 4.2,
    },
    {
      id: 3,
      Restaurant: 'Grand Hyderabadi Restaurant',
      Discription:
        'The object of the walk was a wild vineyard where the muscadine grew. Too new, too tight to have much sugar, they were eaten anyway. None of them wanted—not then—the grape’s relinquishing of all its dark juice.',
      Cuisine: 'Hyderabadi',
      Ratings: 4.5,
    },
    {
      id: 4,
      Restaurant: 'Lee Restaurant',
      Discription:
        'Bouillabaisse. This classic peasant stew was originally designed to stretch bonier and cheaper fish into a meal, but the addition of crushed garlic, herbs and fresh vegetables in balance.',
      Cuisine: 'South Indian/Chinese',
      Ratings: 4.0,
    },
    {
      id: 5,
      Restaurant: 'Mexicano',
      Discription:
        '“Sometimes a banana with coffee is nice. It ought not to be too ripe – in fact there should be a definite remainder of green along the stalk, and if there isn’t, forget about it. ',
      Cuisine: 'Mexican/Asian',
      Ratings: 3.9,
    },
  ];
  const triggerModal = (id) => {
    setShowModal(true);
    setCurrentId(id);
  };
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('Email')) {
      history.push('/signup');
    }
  }, []);

  const renderRestaurants = () => {
    return restaurants.map((res, id) => {
      return (
        <Col xs={4} key={id}>
          <Card style={{ width: '18rem', marginTop: '20px' }}>
            <Card.Header as="h5" style={{ backgroundColor: '#7a49a5', color: 'white', height: '60px', 'text-align': 'space-around' }}>
              {res.Restaurant}
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ color: 'black', 'text-align': 'justify' }}>{res.Discription}</Card.Text>
              <Card.Text>{res.Cuisine}</Card.Text>

              <Button variant="primary" onClick={() => triggerModal(res.id)}>
                Menu
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Rating: {res.Ratings}</small>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  return (
    <>
      <Container>
        <Row>{renderRestaurants()}</Row>
      </Container>
      {showModal && <MenuModal handleClose={() => setShowModal(false)} selectedRes={currentId} />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
