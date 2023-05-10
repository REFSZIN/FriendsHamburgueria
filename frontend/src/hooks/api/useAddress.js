import useAsync from '../useAsync';
import useToken from '../useToken';

import * as addressApi from '../../services/addressApi';

export default function useSaveAddrees() {
  const token = useToken();
  const {
    loading: getsaveAddreesLoading,
    error: getsaveAddreesError,
    act: getsaveAddrees
  } = useAsync((boby) => addressApi.getAddressInformations(token, boby));

  const {
    loading: getAllsaveAddreesLoading,
    error: getAllsaveAddreesError,
    act: getAllsaveAddrees
  } = useAsync(() => addressApi.getAllAddressInformations(token));

  const {
    loading: postsaveAddreesLoading,
    error: postsaveAddreesError,
    act: postsaveAddrees
  } = useAsync((boby) => addressApi.postAddressInformations(token, boby));

  const {
    loading: deletesaveAddreesLoading,
    error: deletesaveAddreesError,
    act: deletesaveAddrees
  } = useAsync((boby) => addressApi.deleteAddressInformations(token, boby ));

  const {
    loading: putsaveAddreesLoading,
    error: putsaveAddreesError,
    act: putsaveAddrees
  } = useAsync((boby) => addressApi.putAddressInformations(token, boby ));

  return {
    postsaveAddreesLoading,
    postsaveAddreesError,
    postsaveAddrees,
    getsaveAddrees,
    getsaveAddreesError,
    getsaveAddreesLoading,
    deletesaveAddreesLoading,
    deletesaveAddreesError,
    deletesaveAddrees,
    putsaveAddreesLoading,
    putsaveAddreesError,
    putsaveAddrees,
    getAllsaveAddreesLoading,
    getAllsaveAddreesError,
    getAllsaveAddrees
  };
}
