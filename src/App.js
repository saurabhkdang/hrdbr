import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Employees from './routes/employees/employees.component';
import JobDescription from './routes/jobdescriptions/jobdescription.component';
import HolidaysList from './routes/holiday/holiday.component';
import AssignRoles from './routes/assign-roles/assign-roles.component';
import MonthlyRatings from './routes/monthly-ratings/monthly-ratings.component';
import Login from './routes/login/login.component';
import JobView from './components/job/job-view.component';
import JobDescriptionEdit from './components/job/job.component';
import EmployeeView from './routes/employees/employee.view.component';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Employees/>} />
        <Route path='employee/:id' element={<EmployeeView/>} />
        <Route path='job' element={<JobDescription/>} />
        <Route path='job/:id' element={<JobView/>} />
        <Route path='job/addedit/:id' element={<JobDescriptionEdit/>} />
        <Route path='holiday/*' element={<HolidaysList/>} />
        <Route path='assign-roles' element={<AssignRoles/>}>
          <Route path=":role" element={<AssignRoles/>}></Route>
        </Route>
        <Route path='performance' element={<MonthlyRatings/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;