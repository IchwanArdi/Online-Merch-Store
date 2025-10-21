import { createContext, useContext, useReducer, useEffect } from 'react';
import { saveCart, loadCart, clearCart, getCartItemCount, getCartTotal } from '../utils/localStorage';

const CartContext = createContext();

// Cart reducer untuk state management
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
        totalItems: getCartItemCount(action.payload),
        totalPrice: getCartTotal(action.payload),
      };

    case 'ADD_TO_CART':
      const existingItem = state.items.find((item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor);

      let newItems;
      if (existingItem) {
        // Update quantity jika item sudah ada
        newItems = state.items.map((item) =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor
            ? { ...item, quantity: Math.min(item.quantity + action.payload.quantity, action.payload.stock) }
            : item
        );
      } else {
        // Tambah item baru
        newItems = [...state.items, action.payload];
      }

      return {
        ...state,
        items: newItems,
        totalItems: getCartItemCount(newItems),
        totalPrice: getCartTotal(newItems),
      };

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor ? { ...item, quantity: Math.max(0, Math.min(action.payload.quantity, item.stock)) } : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        totalItems: getCartItemCount(updatedItems),
        totalPrice: getCartTotal(updatedItems),
      };

    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter((item) => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize && item.selectedColor === action.payload.selectedColor));

      return {
        ...state,
        items: filteredItems,
        totalItems: getCartItemCount(filteredItems),
        totalPrice: getCartTotal(filteredItems),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart dari localStorage saat component mount
  useEffect(() => {
    const savedCart = loadCart();
    dispatch({ type: 'LOAD_CART', payload: savedCart });
  }, []);

  // Save cart ke localStorage setiap kali ada perubahan (dengan debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      saveCart(state.items);
    }, 100); // Debounce 100ms untuk mencegah terlalu sering save

    return () => clearTimeout(timer);
  }, [state.items]);

  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    // Validasi input
    if (!product || !selectedSize || !selectedColor) {
      throw new Error('Data produk tidak lengkap');
    }

    // Validasi stock
    if (product.stock < quantity) {
      throw new Error('Stock tidak mencukupi');
    }

    // Validasi quantity
    if (quantity <= 0) {
      throw new Error('Quantity harus lebih dari 0');
    }

    const cartItem = {
      id: product._id || product.id,
      name: product.nama || product.name,
      image: product.gambar || product.image,
      price: product.price,
      stock: product.stock,
      selectedSize,
      selectedColor,
      quantity,
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const updateQuantity = (productId, selectedSize, selectedColor, quantity) => {
    // Validasi quantity
    if (quantity < 0) {
      throw new Error('Quantity tidak boleh negatif');
    }

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, selectedSize, selectedColor, quantity },
    });
  };

  const removeFromCart = (productId, selectedSize, selectedColor) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: productId, selectedSize, selectedColor },
    });
  };

  const clearCartItems = () => {
    clearCart();
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => state.totalItems;
  const getTotalPrice = () => state.totalPrice;

  const isInCart = (productId, selectedSize, selectedColor) => {
    return state.items.some((item) => item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor);
  };

  const getCartItem = (productId, selectedSize, selectedColor) => {
    return state.items.find((item) => item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor);
  };

  const value = {
    items: state.items,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart: clearCartItems,
    getTotalItems,
    getTotalPrice,
    isInCart,
    getCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
