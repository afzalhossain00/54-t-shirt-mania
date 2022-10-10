import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h3>Order summary</h3>
            <h4>Order Quantity: {cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;