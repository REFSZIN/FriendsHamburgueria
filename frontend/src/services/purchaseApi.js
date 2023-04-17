import api from './api';

export async function getPurchaseInformations(body, token) {
  const response = await api.GET('/products', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPurchaseByIdInformations(token) {
  const response = await api.get('/products/id', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deletePurchaseInformations(token) {
  const response = await api.delete('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function putPurchaseInformations(token) {
  const response = await api.put('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postPurchaseInformations(token) {
  const response = await api.post('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
