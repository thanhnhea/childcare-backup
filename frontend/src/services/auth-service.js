import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${day}/${month}/${year}`;
}


export const CreateService = (serviceTitle, createdDate, updatedDate, servicePrice, serviceDetail) => {
    createdDate = formatDate(createdDate);
    updatedDate = formatDate(updatedDate);
  
    return axios.post(API_URL + 'create_services', {
      serviceTitle,
      createdDate,
      updatedDate,
      servicePrice,
      serviceDetail
    });
  };
  