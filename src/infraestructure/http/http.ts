import axios from 'axios';

class HttpClient {
   
    get(url: string, config?: any) {
        return axios.get(url, config);
    }
    post(url: string, data?: any, config?: any) {
        return axios.post(url, data, config);
    }

    put(url: string, data?: any, config?: any) {
        return axios.put(url, data, config);
    }

    patch(url: string, data?: any, config?: any) {
         return axios.patch(url, data, config);
    }
}

export interface Response<T> {
    status: number;
    data: T;
}

export const httpClient = new HttpClient();