import {React, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesStart } from '../../store/employees/employee.action';
import { selectEmployeesMap, selectEmployeesIsLoading } from '../../store/employees/employee.selector';
import Spinner from '../../components/spinner/spinner.component';

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

  return (
    <div className="table-responsive">

      {isLoading?<Spinner/>:
      <table className="table table-striped table-bordered" id="performance_table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Division</th>
          <th>Department</th>
          <th>Manager</th>
          <th>Title</th>
          <th>Grade</th>
          <th>Type</th>
          <th>DOJ</th>
          <th>Action(s)</th>
        </tr>
        </thead>
        <tbody>
        {employeesMap.data === undefined?
        <tr><td colSpan={9}><Spinner /></td></tr>:
        employeesMap.data.data.map((employee) => {
          return <tr key={employee.id}>
            <td >{employee.name}</td>
            <td >{employee.member}</td>
            <td >-</td>
            <td >{employee.parent?employee.parent.name:""}</td>
            <td >{employee.job_desc?employee.job_desc.job_title:""}</td>
            <td >{employee.job_desc?employee.job_desc.pay_grade:""}</td>
            <td >{employee.employee_type}</td>
            <td >{employee.doj}</td>
            <td></td>
          </tr>
        })
        }
        </tbody>
      </table>
      }
    </div>
  );
}

export default Employees;