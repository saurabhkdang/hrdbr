import {React, useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchEmployeesStart } from '../../store/employees/employee.action';

const defaultFormFields = {
    search_type : '',
    search : '',
}

const SearchBar = () => {

    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {search_type, search} = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(fetchEmployeesStart(formFields));   
    }

    return (
        <form id="navbar-search" className="navbar-form search-form" method="GET" onSubmit={e => { submitHandler(e); }}>
            <select name="search_type" id="search_type" value={search_type} className="form-control" onChange={handleChange}>
                <option value="">Search Type</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="employee_type">Employee Type</option>
            </select>&nbsp;
            <input name="search" className="form-control" placeholder="Search here..." type="text" style={{"paddingRight":"30px"}} autoComplete="off" value={search} onChange={handleChange}/>
            <span onClick={submitHandler} className="btn btn-default"><i className="fa fa-search"></i></span>
        </form>
    )
}

export default SearchBar;