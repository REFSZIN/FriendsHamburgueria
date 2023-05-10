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

  const {
    data: getaddition,
    loading: getadditionLoading,
    error: getadditionError,
    act: getByIdAdditions
  } = useAsync((boby) => additionsApi.getAdditionsByIdInformations(token, boby));

  const {
    data: deleteaddition,
    loading: deleteadditionLoading,
    error: deleteadditionError,
    act: deleteAdditions
  } = useAsync((boby) => additionsApi.deleteAdditionsInformations(token, boby));

  const {
    data: postaddition,
    loading: postadditionLoading,
    error: postadditionError,
    act: postAdditions
  } = useAsync((boby) => additionsApi.postAdditionsInformations(token, boby));

  const {
    data: putaddition,
    loading: putputadditionLoading,
    error: putadditionError,
    act: putAdditions
  } = useAsync((boby) => additionsApi.putAdditionsInformations(token, boby));

  return {
    addition,
    additionLoading,
    additionError,
    getAdditions,
    getaddition,
    getadditionLoading,
    getadditionError,
    getByIdAdditions,
    deleteaddition,
    deleteadditionLoading,
    deleteadditionError,
    deleteAdditions,
    postaddition,
    postadditionLoading,
    postadditionError,
    postAdditions,
    putaddition,
    putputadditionLoading,
    putadditionError,
    putAdditions
  };
}
