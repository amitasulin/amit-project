import http from "./httpService";

export async function getAllUsers(queryParams) {
  // get and return a list of strains from our server

  const queryString = new URLSearchParams(queryParams);
  const response = http.get(`http://localhost:5000/api/users?${queryString}`);
  return response;
}
export async function getUserById(userId) {
  // get and return a list of strains from our server

  const response = http.get(`http://localhost:5000/api/users?${userId}`);
  return response;
}

export async function toggleWishlist(strainId) {
  // get and return a list of strains from our server

  const response = http.post(
    `http://localhost:5000/api/users/wishlist/${strainId}`
  );
  return response;
}

export async function addToCart(params) {
  // get and return a list of strains from our server

  const response = http.post(`http://localhost:5000/api/users/cart/`, params);
  return response;
}

export async function getData() {
  const response = http.get(`http://localhost:5000/api/users/userData/`);
  return response;
}
