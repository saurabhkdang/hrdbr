import axios from "axios";
const BASE_PATH = process.env.REACT_APP_SERVER_URL;

const getAPIResponse = async (route, method = 'GET', postData={}) => {
    try {
        console.log(postData);
        /* const requestOptions = {
            url: BASE_PATH+route,
        };

        if(method === 'POST'){
            requestOptions.method="POST";
            requestOptions.headers = {
              'content-type':'application/json',
            };
            requestOptions.data = postData;
        }else{
            requestOptions.method="GET";
            requestOptions.headers = {
                'api_token':'dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw==',
              };
        }

        axios(requestOptions)
        .then((res) => { })
        .catch((err) => { }); */

        const requestOptions = {
            //mode: 'no-cors',
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),//,"Aceess-Control-Allow-Origin":"*"
            body: JSON.stringify(postData)
        };

        let response = await fetch(
            BASE_PATH+route+'?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw==',
            (method==="POST"?requestOptions:null)
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    } 
}

export const getOTP = async (email) => {
    return getAPIResponse('validate_email','POST',{email}); 
}

export const validateOTP = async (email, otp) => {
    return getAPIResponse('validate_otp', 'POST', {email, otp})
}

export const getEmployees = async () => {
    return getAPIResponse('listuser');
}

export const getJobDescriptions = async () => {
    return getAPIResponse('job');
}

export const getHolidays = async () => {
    return getAPIResponse('holiday');
}

export const getAssignRoles = async (role) => {
    return getAPIResponse('assign-roles/'+role);
}

export const getMonthlyRatings = async () => {
    return getAPIResponse('performance');
}