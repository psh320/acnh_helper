import axios from 'axios';

export default axios.create({
	baseURL: 'http://acnhapi.com/v1/'
});