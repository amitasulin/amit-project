import http from "./httpService";

export async function getAllUsers(queryParams) {
  // get and return a list of strains from our server

  const queryString = new URLSearchParams(queryParams);
  const response = http.get(`http://localhost:5000/api/users?${queryString}`);
  return response;
}
export async function getUserById(userId) {
  // get and return a list of strains from our server

  const response = http.get(`http://localhost:5000/api/users${userId}`);
  return response;
}

export async function deleteUser(id) {
  // get and return a list of strains from our server

  const response = http.delete(`http://localhost:5000/api/users/${id}`);
  return response;
}

export async function toggleWishlist(strainId) {
  // get and return a list of strains from our server

  const response = http.post(
    `http://localhost:5000/api/users/wishlist/${strainId}`
  );
  return response;
}

export async function addToCart(strainId, quantity) {
  // get and return a list of strains from our server

  const response = http.post(`http://localhost:5000/api/users/cart/`, {
    strainId,
    quantity,
  });
  return response;
}

export async function removeFromCart(strainId, quantity) {
  // get and return a list of strains from our server

  const response = http.post(`http://localhost:5000/api/users/cart/delete`, {
    strainId,
    quantity,
  });
  return response;
}

export async function getData() {
  const response = http.get(`http://localhost:5000/api/users/userData/`);
  return response;
}

export async function sendMail(to, message) {
  const response = http.post(`http://localhost:5000/api/users/sendMail/`, {
    to,
    message,
  });
  return response;
}
