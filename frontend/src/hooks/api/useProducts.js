import * as productsApi from '../../services/productApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useProducts() {
  const token = useToken();
  const {
    loading: productsLoading,
    error: productsError,
    data: productsData,
  } = useAsync((boby) => productsApi.getProductInformations(token, boby));

  const {
    loading: getByIdproductsLoading,
    error: getByIdproductsError,
    data: getByIdproductsData,
  } = useAsync((boby) => productsApi.getProductByIdInformations(token, boby));

  const {
    loading: deleteproductsLoading,
    error: deleteproductsError,
    data: deleteproductsData,
  } = useAsync((boby) => productsApi.deleteProductInformations(token, boby));
  
  const {
    loading: putproductsLoading,
    error: putproductsError,
    data: putproductsData,
  } = useAsync((boby) => productsApi.putProductInformations(token, boby));

  const {
    loading: postproductsLoading,
    error: postproductsError,
    data: postproductsData,
  } = useAsync((boby) => productsApi.postProductInformations(token, boby));
  
  return {
    productsLoading, 
    productsError,
    productsData,
    getByIdproductsLoading,
    getByIdproductsError,
    getByIdproductsData,
    deleteproductsLoading,
    deleteproductsError,
    deleteproductsData,
    putproductsLoading,
    putproductsError,
    putproductsData,
    postproductsLoading,
    postproductsError,
    postproductsData
  };
}
