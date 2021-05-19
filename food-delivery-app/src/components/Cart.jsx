import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function Cart() {
  const [cartDetails, setCartDetails] = useState({});
  // const [finalSum, setFinalSum] = useState(0);
  let finalSum = 0;

  useEffect(() => {
    let tempCart = JSON.parse(localStorage.getItem('cart')) || {};
    console.log(tempCart, 'cart items');
    setCartDetails(tempCart);
  }, []);

  const renderSum = (item) => {
    const totalSum = item.count * item.price;
    let gst = totalSum * 0.18;
    let grandtotal = finalSum + gst + totalSum;
    finalSum = grandtotal;
    return gst + totalSum;
  };

  const renderItems = () => {
    return (
      <>
        {JSON.parse(localStorage.getItem('cart')) &&
          JSON.parse(localStorage.getItem('cart')).bucketItems.map((item) => {
            return (
              <tr>
                <td>{item.dish}</td>

                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{renderSum(item)}</td>
              </tr>
            );
          })}
      </>
    );
  };

  return (
    <div className="cart">
      {/* {JSON.parse(localStorage.getItem('cart')) && 
      JSON.parse(localStorage.getItem('cart')).bucketItems.map((item)=> {<p>{item.count}</p>})

      } */}
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Dish</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>
                Sum <em>@18% GST</em>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderItems()}

            <tr>
              <td colSpan="3">Grand Total</td>

              <td>{finalSum}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Cart;
