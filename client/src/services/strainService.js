import http from "./httpService";

export async function getAllStrains() { 
    // get and return a list of strains from our server
    const response =  http.get('http://localhost:5000/api/strains');
    return response;
}

export async function getStrainById(starinId) { 
    // get a strain by id from the server
    const response =  http.get(`http://localhost:5000/api/strains/${starinId}`);
    return response;

}