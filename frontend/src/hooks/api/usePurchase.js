import useAsync from '../useAsync';
import useToken from '../useToken';

import * as purchaseApi from '../../services/purchaseApi';

export default function useSavePurchase() {
  const token = useToken();

  const {
    loading: savePurchaseLoading,
    error: savePurchaseError,
    act: savePurchase
  } = useAsync((boby) => purchaseApi.getPurchaseInformations(boby, token));

  const {
    loading: getByIdPurchaseLoading,
    error: getByIdPurchaseError,
    act: getByIdPurchase
  } = useAsync((boby) => purchaseApi.getPurchaseByIdInformations(boby, token));

  const {
    loading: deletePurchaseLoading,
    error: deletePurchaseError,
    act: deletePurchase
  } = useAsync((boby) => purchaseApi.deletePurchaseInformations(boby, token));

  const {
    loading: putPurchaseLoading,
    error: putPurchaseError,
    act: putPurchase
  } = useAsync((boby) => purchaseApi.putPurchaseInformations(boby, token));

  const {
    loading: postPurchaseLoading,
    error: postPurchaseError,
    act: postPurchase
  } = useAsync((boby) => purchaseApi.postPurchaseInformations(boby, token));

  return {
    savePurchaseLoading,
    savePurchaseError,
    savePurchase,
    getByIdPurchaseLoading,
    getByIdPurchaseError,
    getByIdPurchase,
    deletePurchaseLoading,
    deletePurchaseError,
    deletePurchase,
    putPurchaseLoading,
    putPurchaseError,
    putPurchase,
    postPurchaseLoading,
    postPurchaseError,
    postPurchase
  };
}
