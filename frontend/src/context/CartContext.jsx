// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// action names kept as constants
const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  CLEAR: 'CLEAR',
  SET_QTY: 'SET_QTY'
};

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      // Accept either: payload.book (old shape) OR payload with id/title/price/image (BookCard way)
      const payload = action.payload || {};
      const book = payload.book || {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        image: payload.image
      };

      const qty = payload.qty !== undefined ? Number(payload.qty) : 1;
      const id = book._id || book.id;

      // if item exists, increase qty
      const exists = state.items.find(i => i.id === id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === id ? { ...i, qty: i.qty + qty } : i
          )
        };
      }

      // push new item
      return {
        ...state,
        items: [
          ...state.items,
          { id, title: book.title || '', price: Number(book.price) || 0, qty: qty, image: book.image || '' }
        ]
      };
    }

    case ACTIONS.REMOVE: {
      const id = action.payload.id;
      return { ...state, items: state.items.filter(i => i.id !== id) };
    }

    case ACTIONS.INCREASE: {
      const id = action.payload.id;
      return {
        ...state,
        items: state.items.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      };
    }

    case ACTIONS.DECREASE: {
      const id = action.payload.id;
      return {
        ...state,
        items: state.items.flatMap(i => {
          if (i.id !== id) return i;
          const newQty = i.qty - 1;
          if (newQty <= 0) return []; // remove if goes to zero
          return { ...i, qty: newQty };
        })
      };
    }

    case ACTIONS.SET_QTY: {
      const { id, qty } = action.payload;
      const numeric = parseInt(qty, 10) || 0;
      return {
        ...state,
        items: state.items.flatMap(i => {
          if (i.id !== id) return i;
          if (numeric <= 0) return []; // remove if zero
          return { ...i, qty: numeric };
        })
      };
    }

    case ACTIONS.CLEAR:
      return { items: [] };

    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    try {
      const raw = localStorage.getItem('cart_v1');
      return raw ? JSON.parse(raw) : initialState;
    } catch {
      return initialState;
    }
  });

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart_v1', JSON.stringify(state));
    } catch (e) {
      // ignore storage errors
    }
  }, [state]);

  // action helpers (kept for consumers that call functions)
  const addToCart = (book, qty = 1) => dispatch({ type: ACTIONS.ADD, payload: { book, qty } });
  const removeFromCart = id => dispatch({ type: ACTIONS.REMOVE, payload: { id } });
  const increaseQty = id => dispatch({ type: ACTIONS.INCREASE, payload: { id } });
  const decreaseQty = id => dispatch({ type: ACTIONS.DECREASE, payload: { id } });
  const setQty = (id, qty) => dispatch({ type: ACTIONS.SET_QTY, payload: { id, qty } });
  const clearCart = () => dispatch({ type: ACTIONS.CLEAR });

  // derived totals
  const total = state.items.reduce((s, it) => s + (Number(it.price) || 0) * (it.qty || 0), 0);
  const itemCount = state.items.reduce((s, it) => s + (it.qty || 0), 0);

  // provide dispatch as well to keep compatibility with components that call dispatch directly
  return (
    <CartContext.Provider value={{
      items: state.items,
      dispatch,            // raw dispatch (BookCard currently uses dispatch directly)
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      setQty,
      clearCart,
      total,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Compatibility hooks:
// useCart() -> returns helpful API (for components that expect it)
// useCartState() -> returns state subset (BookCard uses useCartState().items)
// useCartDispatch() -> returns raw dispatch (BookCard uses this)
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  // give the nice named API
  return {
    items: ctx.items,
    addToCart: ctx.addToCart,
    removeFromCart: ctx.removeFromCart,
    increaseQty: ctx.increaseQty,
    decreaseQty: ctx.decreaseQty,
    setQty: ctx.setQty,
    clearCart: ctx.clearCart,
    total: ctx.total,
    itemCount: ctx.itemCount,
    dispatch: ctx.dispatch
  };
};

export const useCartState = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartState must be used inside CartProvider');
  return {
    items: ctx.items,
    total: ctx.total,
    itemCount: ctx.itemCount
  };
};

export const useCartDispatch = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartDispatch must be used inside CartProvider');
  return ctx.dispatch;
};
