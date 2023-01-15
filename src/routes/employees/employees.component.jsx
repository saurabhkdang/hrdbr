import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesStart } from '../../store/employees/employee.action';
import { selectEmployeesMap, selectEmployeesIsLoading } from '../../store/employees/employee.selector';
import Listing from '../../components/listing/listing.component';

const Employees = () => {
  
  const dispatch = useDispatch();
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEmployeesMap = async () => {
      dispatch(fetchEmployeesStart({search:'',search_type:''}));
    }
    getEmployeesMap();
  },[]);

  const employeesMap = useSelector(selectEmployeesMap);
  const isLoading = useSelector(selectEmployeesIsLoading);

  const config = {'name': 'Name', 'member': 'Division','doj': 'DOJ', 'employee_type': 'Type'
  //, 'department': 'Department', 'manager': 'Manager', 'title': 'Title', 'grade': 'Grade',  
  };

  return <Listing isLoading={isLoading} records={employeesMap} config={config} />
}

export default Employees;