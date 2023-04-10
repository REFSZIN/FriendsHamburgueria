import api from './api';

export async function getProductInformations() {
  const response = await api.get('/products', {});
  return response.data;
}

export async function getProductByIdInformations(body, token) {
  const response = await api.get('/products/id', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteProductInformations(body, token) {
  const response = await api.delete('/products', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function putProductInformations(body, token) {
  const response = await api.put('/products', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postProductInformations(body, token) {
  const response = await api.post('/products', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
