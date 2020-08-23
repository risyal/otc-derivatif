import axios from 'axios';

const DATA_REST_API_URL = 'http://localhost:8080/collateralmanagement/securities';

class DataServices {
    getData(){
        axios.get(DATA_REST_API_URL);
    }
}

export default new DataServices();