import api from './api';

export async function getPurchaseInformations(body, token) {
  const response = await api.get('/purchase', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPurchaseByIdInformations(token) {
  const response = await api.get('/purchase/id', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deletePurchaseInformations(token) {
  const response = await api.delete('/purchase', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function putPurchaseInformations(token) {
  const response = await api.put('/purchase', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postPurchaseInformations(body, token) {
  const response = await api.post('/purchase', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
