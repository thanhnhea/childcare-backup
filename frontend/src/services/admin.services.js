import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/';



class AdminService {
   
    getUserList() {
        return axios.get(API_URL + 'admin/userList', { headers: authHeader() });
    }
}

export default new AdminService();