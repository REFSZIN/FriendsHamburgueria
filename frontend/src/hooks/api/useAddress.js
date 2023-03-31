import useAsync from '../useAsync';
import useToken from '../useToken';

import * as addressApi from '../../services/addressApi';

export default function useSaveAddrees() {
  const token = useToken();

  const {
    loading: saveAddreesLoading,
    error: saveAddreesError,
    act: saveAddrees
  } = useAsync((data) => addressApi.save(data, token), false);

  return {
    saveAddreesLoading,
    saveAddreesError,
    saveAddrees
  };
}
