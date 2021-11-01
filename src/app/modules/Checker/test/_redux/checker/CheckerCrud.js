import axios from "axios";

export const PRODUCTS_URL = "api/products";

// CREATE =>  POST: add a new product to the server
export function createChecker(product) {
  return axios.post(PRODUCTS_URL, { product });
}

// READ
export function getAllChecker() {
  return axios.get(PRODUCTS_URL);
}

export function getCheckerById(productId) {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findCheckers(queryParams) {
  return axios.post(`${PRODUCTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateChecker(product) {
  return axios.put(`${PRODUCTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForCheckers(ids, status) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteChecker(productId) {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteCheckers(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, { ids });
}
