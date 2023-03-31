import api from './api';

export async function getAddressInformations(body, token) {
  const response = await api.get('/address', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteAddressInformations(token, boby) {
  const response = await api.delete('/address', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postAddressInformations(token, boby) {
  const response = await api.post('/address', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function putAddressInformations(token, boby) {
  const response = await api.put('/address', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
