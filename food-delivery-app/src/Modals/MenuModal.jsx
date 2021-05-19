import { React, useState } from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';

function MenuModal(props) {
  const { handleClose, selectedRes } = props;

  const [menuItems, setMenuItems] = useState([
    {
      id: 0,
      items: [
        { id: 11, dish: 'Chicken Biryani', price: 210, count: 0 },
        { id: 12, dish: 'Chicken Haleem', price: 280, count: 0 },
        { id: 13, dish: 'Butter Chicken', price: 110, count: 0 },
      ],
    },
    {
      id: 1,
      items: [
        { id: 21, dish: 'Chicken Biryani', price: 180, count: 0 },
        { id: 22, dish: 'Beijing Noodles', price: 120, count: 0 },
        { id: 22, dish: 'Chicken Moughlai', price: 250, count: 0 },
      ],
    },
    {
      id: 2,
      items: [
        { id: 31, dish: 'Shahi Biryani', price: 290, count: 0 },
        { id: 32, dish: 'Mutton Biryani', price: 250, count: 0 },
      ],
    },
    {
      id: 3,
      items: [
        { id: 41, dish: 'Chicken Biryani', price: 200, count: 0 },
        { id: 42, dish: 'Idli', price: 80, count: 0 },
        { id: 43, dish: 'Masala Dosa', price: 110, count: 0 },
      ],
    },
    {
      id: 4,
      items: [
        { id: 51, dish: 'Chicken Noodles', price: 190, count: 0 },
        { id: 52, dish: 'Chicken 65', price: 250, count: 0 },
        { id: 53, dish: 'Fried Rice', price: 210, count: 0 },
      ],
    },
    {
      id: 5,
      items: [
        { id: 61, dish: 'Irani Chai', price: 50, count: 0 },
        { id: 62, dish: 'Chicken Haleem', price: 250, count: 0 },
        { id: 63, dish: 'La Matte', price: 180, count: 0 },
      ],
    },
  ]);

  const handleIncrement = (id) => {
    let tempStore = [...menuItems];
    let bucketObj = {
      id,
      bucketItems: [],
    };

    if (!localStorage.getItem('cart') || localStorage.getItem('cart').id !== id) {
      let cartItems;
      if (!JSON.parse(localStorage.getItem('cart'))) {
        localStorage.setItem('cart', JSON.stringify(bucketObj));
        cartItems = JSON.parse(localStorage.getItem('cart'));
      } else {
        cartItems = JSON.parse(localStorage.getItem('cart'));
      }
      tempStore[selectedRes].items[id].count++;
      let tempIndex = cartItems?.bucketItems?.findIndex((val) => val.id === tempStore[selectedRes].items[id].id);
      
      if (tempIndex < 0) {
        cartItems.bucketItems.push(tempStore[selectedRes].items[id]);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } else {
        
        cartItems.bucketItems[tempIndex] = tempStore[selectedRes].items[id];
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
      setMenuItems(tempStore);
    } else {
      // tempStore[selectedRes].items[id].count++;

      // let cartItems = JSON.parse(localStorage.getItem('cart'));
      // console.log(cartItems);
      // let tempIndex = bucketObj.bucketItems.findIndex((val) => val.id === id);

      // clientsArr.push(clientObj);
      // localStorage.setItem('cart', JSON.stringify(clientsArr));
    }
    // localStorage.setItem('bucket', tempStore[selectedRes].items[id]);
    // tempStore[selectedRes].items[id].count++;
    // console.log(tempStore, 'count Increment');
    // setMenuItems(tempStore);
  };
  const handleDecrement = (id) => {
    let tempStore = [...menuItems];
    tempStore[selectedRes].items[id].count--;
    console.log(tempStore, 'count Decrement');
    setMenuItems(tempStore);
  };

  const showMenu = () => {
    let tempStore = [...menuItems];
   
    let myMenu = tempStore.filter((menu) => selectedRes === menu.id);
    return myMenu[0].items.map((item, id) => {
      return (
        <>
          <Modal.Body key={id}>
            {' '}
            <Container key={id}>
              <Row>
                <Col xs={8}>
                  Dish: {item.dish} Price: {item.price}
                </Col>
                <Col xs={4}>
                  <div className="cart-icons">
                    <Button variant="danger" size="sm" disabled={item.count < 1} onClick={() => handleDecrement(id)}>
                      -
                    </Button>
                    <span> {item.count} </span>
                    <Button variant="success" size="sm" onClick={() => handleIncrement(id)}>
                      +
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>{' '}
          </Modal.Body>
          ;
        </>
      );
    });
  };
  return (
    <div>
      <Modal show onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Menu Items {selectedRes}</Modal.Title>
        </Modal.Header>
        {showMenu()}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuModal;
