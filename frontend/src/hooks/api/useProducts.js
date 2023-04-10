import * as productsApi from '../../services/productApi';
import useAsync from '../useAsync';

export default function useProducts() {
  const {
    loading: productsLoading,
    error: productsError,
    data: productsData,
  } = useAsync(productsApi.getProductInformations);
  return {
    productsLoading, 
    productsError,
    productsData,
  };
}
