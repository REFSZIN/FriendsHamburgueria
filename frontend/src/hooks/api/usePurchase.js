import useAsync from '../useAsync';
import useToken from '../useToken';

import * as purchaseApi from '../../services/purchaseApi';

export default function useSavePurchase() {
  const token = useToken();

  const {
    loading: savePurchaseLoading,
    error: savePurchaseError,
    act: savePurchase
  } = useAsync((ticketId, cardData) => purchaseApi.save(ticketId, cardData, token), false);

  return {
    savePurchaseLoading,
    savePurchaseError,
    savePurchase
  };
}
