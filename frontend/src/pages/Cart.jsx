import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, total, removeFromCart, increaseQty, decreaseQty, setQty, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [placing, setPlacing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) return alert('Cart is empty');
    // Normally you'd send order to backend here.
    setPlacing(true);
    setTimeout(() => {
      setPlacing(false);
      alert('Order placed (demo) — implement backend POST /orders to complete');
      clearCart();
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {items.length === 0 && <div className="text-gray-600">Your cart is empty</div>}

        {items.map(item => (
          <div key={item.id} className="bg-white rounded border p-4 flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <img
                src={item.image || '/assets/placeholder.jpg'}
                alt={item.title}
                className="w-24 h-32 object-cover rounded"
                onError={(e) => { e.currentTarget.src = '/assets/placeholder.jpg'; }}
              />
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <div className="text-sm text-gray-500">Qty: <strong>{item.qty}</strong></div>
                <div className="text-sm text-gray-500 mt-1">₹{item.price}</div>

                <div className="mt-3 flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 border rounded"
                    aria-label={`Decrease ${item.title}`}
                  >−</button>

                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => setQty(item.id, e.target.value)}
                    className="w-16 px-2 py-1 border rounded text-center"
                  />

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 border rounded"
                    aria-label={`Increase ${item.title}`}
                  >+</button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-sm text-red-600"
                  >Remove</button>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold">₹{item.price * item.qty}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">Total:</div>
          <div className="text-xl font-bold">₹{total}</div>
        </div>

        <form onSubmit={handlePlaceOrder} className="max-w-xl">
          <h2 className="font-semibold mb-2">Customer details</h2>

          <input
            className="w-full border rounded p-2 mb-3"
            placeholder="Name"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
          <input
            className="w-full border rounded p-2 mb-3"
            placeholder="Email"
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          />
          <textarea
            className="w-full border rounded p-2 mb-3"
            placeholder="Address"
            rows="3"
            value={customer.address}
            onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
          />

          <div className="flex items-center space-x-3">
            <button type="submit" disabled={placing || items.length === 0} className="px-4 py-2 bg-blue-600 text-white rounded">
              {placing ? 'Placing...' : 'Place order'}
            </button>
            <button type="button" onClick={() => clearCart()} className="px-4 py-2 border rounded">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
