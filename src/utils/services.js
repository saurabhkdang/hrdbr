export const getEmployees = async () => {
    try {
        let response = await fetch(
            'http://localhost/hrdb/public/api/listuser?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw==',
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export const getJobDescriptions = async () => {
    try {
        let response = await fetch(
            'https://localhost/hrdb/public/api/job?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw=='
        );
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(error);
    }
}

export const getHolidays = async () => {
    try {
        let response = await fetch(
            'https://localhost/hrdb/public/api/holiday?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw=='
        );
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(error);
    }
}

export const getAssignRoles = async (role) => {
    try {
        let response = await fetch(
            'https://localhost/hrdb/public/api/assign-roles/'+role+'?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw=='
        );
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(error);
    }
}

export const getMonthlyRatings = async () => {
    try {
        let response = await fetch(
            'https://localhost/hrdb/public/api/performance?api_token=dHU0dmJXeGtJU1dGWWY5dG1GazZhWWNjY00wN2tMbnBqY1ZjUFY2dw=='
        );
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(error);
    }
}