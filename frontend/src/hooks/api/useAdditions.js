import useAsync from '../useAsync';
import useToken from '../useToken';

import * as additionsApi from '../../services/additionsApi';

export default function useAdditions() {
  const token = useToken();
  
  const {
    data: addition,
    loading: additionLoading,
    error: additionError,
    act: getAdditions
  } = useAsync(() => additionsApi.getAdditionsInformations(token));

  return {
    addition,
    additionLoading,
    additionError,
    getAdditions
  };
}
