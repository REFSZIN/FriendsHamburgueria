import useToken from '../useToken';
import useAsync from '../useAsync';

import * as productsApi from '../../services/productApi';

export default function useSaveBooking() {
  const token = useToken();
  const {
    loading: saveProductsLoading,
    error: saveProductsError,
    act: saveProducts
  } = useAsync((data) => productsApi.saveProducts(data, token), false);

  return {
    saveProductsLoading,
    saveProductsError,
    saveProducts
  };
}
