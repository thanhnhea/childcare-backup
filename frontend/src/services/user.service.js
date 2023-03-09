import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${day}/${month}/${year}`;
}

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod/children', { headers: authHeader() });
    }

    getUnassignedChildMod() {
        return axios.get(API_URL + 'mod/unassignedChild', { headers: authHeader() });
    };

    getAllClassesMod() {
        return axios.get(API_URL + 'mod/classes', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    getAllChildrenOfUser() {
        return axios.get(API_URL + 'account/current-user-children', { headers: authHeader() });
    }

    getClassDetails(id) {
        return axios.get(API_URL + 'account/class?id=' + id, { headers: authHeader() });
    }

    getChildInfo(id) {
        return axios.get(API_URL + 'account/users/child?id=' + id, { headers: authHeader() });
    }

    submitChildren(firstName,
        lastName,
        dob,
        gender,
        interest,
        needs) {
        console.log(dob);
        dob = formatDate(dob);

        return axios.post(API_URL + 'account/submit_children', {
            firstName,
            lastName, dob,
            gender,
            interest,
            needs
        }, { headers: authHeader() });
    }
}

export default new UserService();