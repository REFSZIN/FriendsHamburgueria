import api from './api';

export async function getAdditionsInformations(body, token) {
  const response = await api.get('/additions', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAdditionsByIdInformations(body, token) {
  const response = await api.get('/additions/id', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteAdditionsInformations(token, boby) {
  const response = await api.delete('/additions', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postAdditionsInformations(token, boby) {
  const response = await api.post('/additions', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function putAdditionsInformations(token, boby) {
  const response = await api.put('/additions', boby, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
