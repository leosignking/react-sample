import axios from 'axios';
import { NotificationManager } from 'react-notifications';

export function postData() {
    return function(dispatch) {
        axios.get(baseUrl + 'services/')
         .then( (response) => {
             console.log(response.data);
         })
         .catch( (error) => {
             console.log(error);
         })
    }
}

export function initData() {
    return function(dispatch) {
        axios.get(baseUrl + '/init')
         .then( (response) => {
            console.log(response.data);
         })
         .catch( (error) => {
            console.log(error)
         })
    }
}