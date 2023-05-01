import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesStart } from '../../store/employees/employee.action';
import { selectEmployeesMap, selectEmployeesIsLoading } from '../../store/employees/employee.selector';
import Listing from '../../components/listing/listing.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const Employees = () => {
  
  const breadCrumbItems = [
    {label: 'Home'},
    {label: 'Employees List'},
  ];

  const dispatch = useDispatch();
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEmployeesMap = async () => {
      dispatch(fetchEmployeesStart({search:'',search_type:''}));
      dispatch(setBreadcrumb(breadCrumbItems));
    }
    getEmployeesMap();
  },[]);

  const employeesMap = useSelector(selectEmployeesMap);
  const isLoading = useSelector(selectEmployeesIsLoading);
  
  let config = {};
  if(employeesMap && typeof employeesMap.fields==="undefined"){
    config = {'name': 'Name', 'member': 'Division','doj': 'DOJ', 'employee_type': 'Type'
    //, 'department': 'Department', 'manager': 'Manager', 'title': 'Title', 'grade': 'Grade',  
    };
  }else{
    config = employeesMap.fields;
  }

  return <Listing isLoading={isLoading} records={employeesMap} config={config}  />
}

export default Employees;