import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message = [];
    if (cart.length === 0) {
        message = <p>Plese buy at least one item</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno ekta</h3>
            <p>Tomar jonno ekta</p>
            <p><small>Tar jonno arekta, please</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying!</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order summary</h3>
            <h4 className={`bold ${cart.length === 2 ? 'green' : 'orange'}`}>Order Quantity: {cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }

            {
                message
            }
            {cart.length === 3 ? <p>Gift dibo</p> : <p>kine felo</p>}
            <p>and operator</p>
            {cart.length === 2 && <h2>Double iterm</h2>}
            <p>OR Operator</p>
            {cart.length === 4 || <p>4 ta item na</p>}
        </div>
    );
};

export default Cart;

/* 
Conditional Rendering:
1. use element in a variable and then use if-else to set value
2. ternary operator condition ? ture : false
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/