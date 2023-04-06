import * as productsApi from '../../services/productApi';
import useAsync from '../useAsync';

export default function useProducts() {
  const {
    loading: productsLoading,
    error: productsError,
    act: productsData,
    data: products
  } = useAsync(productsApi.getProductInformations);

  return {
    productsLoading, 
    productsError,
    productsData,
    products
  };
}
