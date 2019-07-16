import axios from 'axios';

const api = {

    getTest: function() {
        return axios.get('/api/test');
    }

}

export default api