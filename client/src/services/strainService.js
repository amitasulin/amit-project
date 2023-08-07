import http from "./httpService";

export async function getAllStrains(queryParams) {
  // get and return a list of strains from our server

  const queryString = new URLSearchParams(queryParams);
  const response = http.get(`http://localhost:5000/api/strains?${queryString}`);
  return response;
}

export async function getStrainById(strainId) {
  // get a strain by id from the server
  const response = http.get(`http://localhost:5000/api/strains/${strainId}`);
  return response;
}
