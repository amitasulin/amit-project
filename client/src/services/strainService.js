import http from "./httpService";

export async function getAllStrains({ search = "", page = 1, filters = {} }) {
  // get and return a list of strains from our server

  const queryString = new URLSearchParams({
    search,
    page,
    ...filters,
  });
  const response = http.get(`http://localhost:5000/api/strains?${queryString}`);
  return response;
}

export async function getStrainById(strainId) {
  // get a strain by id from the server
  const response = http.get(`http://localhost:5000/api/strains/${strainId}`);
  return response;
}

export async function addStrain(params) {
  // get a strain by id from the server
  const response = http.post(`http://localhost:5000/api/strains/`, params);
  return response;
}

export async function deleteStrain(id) {
  const response = http.delete(`http://localhost:5000/api/strains/${id}`);
  return response;
}

export async function updateStrain(params) {
  // get a strain by id from the server

  const response = http.put(
    `http://localhost:5000/api/strains/${params._id}`,
    params
  );
  return response;
}
