
import { ALERT_SYSTEM_CONFIG } from '../config.js';

import axios from 'axios'

export default {
    /*
        GET /api/v2/user
     */
    getPermissions: function(){
        return axios.post( ALERT_SYSTEM_CONFIG.PROXY_URL + ALERT_SYSTEM_CONFIG.API_URL + 'getPermissions');
    },
}