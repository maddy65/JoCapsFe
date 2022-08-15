import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080//api/v1/employee";
const COUNTRY_DROPDOWN_URL = "http://localhost:8080//api/v1/countrylist";
const NSE_DATA_URL = "http://localhost:8080//api/v1/nseData";
const FAQ_DATA_URL =  "http://localhost:8080/api/v1/Faq";
const INSTRUMENT_DROPDOWN_URL = "http://localhost:8080/api/v1/instrument";
const SAVE_TRANSICTION_DATA = "http://localhost:8080/api/v1/saveData";
//const GET_TRANSICTION_DATA = "http://localhost:8080/api/v1/getTransictionData";

const GET_TRANSICTION_DATA = "http://localhost:8080/api/v1/getTransictionsAndInstruments/101";
const REGISTER_USER_DATA = "http://localhost:8080/api/v1/process_register";
//const REGISTER_USER_DATA = "http://localhost:8080/api/v1/register";
const DAILY_CALLS = "http://localhost:8080/api/v1/dailyCalls/";

class EmployeeServicess{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getCountryDropdown(){
        return axios.get(COUNTRY_DROPDOWN_URL);
    }

    getInstrument(){
        return axios.get(INSTRUMENT_DROPDOWN_URL);
    }

    getNseData(){
        return axios.get(NSE_DATA_URL);
    }2
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    saveTransiction(transiction){
        return axios.post(SAVE_TRANSICTION_DATA,transiction);
    }

    getTransiction(){
        return axios.get(GET_TRANSICTION_DATA);
    }

    getFaqData(){
        return axios.get(FAQ_DATA_URL);
    }

    saveRegisterData(users){
        return axios.post(REGISTER_USER_DATA,users);
    }

    getDailyCalls(exchange){
        return axios.get(DAILY_CALLS+"/"+exchange);
    }
}

export default new EmployeeServicess();