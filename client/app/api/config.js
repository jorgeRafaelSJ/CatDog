
//switch statement is meant to determine api endpoint depending on environment
export const setApi = () => {

	switch(window.location.hostname) {
		case 'localhost': 
			return 'http://localhost:3000';
	}

};
