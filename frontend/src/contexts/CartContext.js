import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cartData, setCartData] = useLocalStorage('userCart', { products: [] });

  const removeProductFromCart = (item) => {
    const index = cartData.products.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      return;
    } else {
      const newcartData = [...cartData.products];
      if (newcartData[index].quantity === 1) {
        newcartData.splice(index, 1);
      } else {
        newcartData[index].quantity -= 1;
      }
      setCartData({ ...cartData, products: newcartData });
      toast('Produto Removido!');
    }
  };

  const addToCart = (product) => {
    const existingItemIndex = cartData.products.findIndex((item) => item.id === product.id);
    if (existingItemIndex === -1) {
      const updatedProducts = [...cartData.products, { ...product, quantity: 1, additions: [] }];
      setCartData({ ...cartData, products: updatedProducts });
    } else {
      const updatedProducts = [...cartData.products];
      updatedProducts[existingItemIndex].quantity += 1;
      setCartData({ ...cartData, products: updatedProducts });
    }
    toast('Produto Adicionado ao Carrinho!');
  };

  const addAdditionToProduct = (productId, addition) => {
    const updatedProducts = cartData.products.map((product) => {
      if (product.id === productId) {
        const existingAddition = product.additions.find((add) => add.id === addition.id);

        if (existingAddition) {
          const updatedAdditions = product.additions.map((add) =>
            add.id === addition.id ? { ...add, quantity: add.quantity + addition.quantity } : add
          );
          return { ...product, additions: updatedAdditions };
        } else {
          const updatedAdditions = [...product.additions, addition];
          return { ...product, additions: updatedAdditions };
        }
      } else {
        return product;
      }
    });

    setCartData({ ...cartData, products: updatedProducts });
    toast('Adicional Adicionado ao Produto!');
  };

  const removeAdditionToProduct = (productId, additionId) => {
    const updatedCartData = { ...cartData };
    const productIndex = updatedCartData.products.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      const product = updatedCartData.products[productIndex];
      const updatedAdditions = product.additions.filter((addition) => addition.id !== additionId);
      const updatedProduct = { ...product, additions: updatedAdditions };
      updatedCartData.products[productIndex] = updatedProduct;
      setCartData(updatedCartData);
      toast('Adicional Removido do Produto!');
    }
  };

  return (
    <CartContext.Provider
      value={{ cartData, addToCart, addAdditionToProduct, removeAdditionToProduct, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
