import http from "./httpService";

export async function getAllStrains() { 
    // get and return a list of strains from our server
 return http.get('http://localhost:5000/api/strains');
}

export async function getStrainById(starinId) { 
    // get a strain by id from the server
    return http.get(`http://localhost:5000/api/strains/${starinId}`);
}