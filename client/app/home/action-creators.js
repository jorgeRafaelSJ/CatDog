import { TEST } from './actions'
import { test } from '../api/users'

export const testRequest = () => {
	return (dispatch) => {
		test()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
}