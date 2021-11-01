
import axios from 'axios';

export class CustomerService {

    getCustomersSmall() {
        return axios.get('data/customers-small.json')
                .then(res => res.data.data);
    }

    getCustomersMedium() {
        return axios.get('data/customers-medium.json')
                .then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios.post('http://192.168.1.101:30010/api/Home/GetPenltiesHomeData')
        .then(res => res.data);
    }

    getCustomersXLarge() {
        return axios.get('data/customers-xlarge.json')
                .then(res => res.data.data);
    }
}
    