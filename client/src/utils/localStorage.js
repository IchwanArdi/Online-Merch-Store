// Helper functions untuk localStorage cart management

const CART_KEY = 'merch_store_cart';

export const saveCart = (cartItems) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    return true;
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
    return false;
  }
};

export const loadCart = () => {
  try {
    const cartData = localStorage.getItem(CART_KEY);
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

export const clearCart = () => {
  try {
    localStorage.removeItem(CART_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing cart from localStorage:', error);
    return false;
  }
};

export const getCartItemCount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
