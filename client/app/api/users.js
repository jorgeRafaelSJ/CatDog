import axios from 'axios';
import { setApi } from './config'

const api = setApi();

export const test =  () => {
	return axios.post(`${api}/users`, { height: 65, weight: 120});
}