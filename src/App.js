import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Employees from './routes/employees/employees.component';
import JobDescription from './routes/jobdescriptions/jobdescription.component';
import HolidaysList from './routes/holiday/holiday.component';
import AssignRoles from './routes/assign-roles/assign-roles.component';
import MonthlyRatings from './routes/monthly-ratings/monthly-ratings.component';
import Login from './routes/login/login.component';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Employees/>} />
        <Route path='job/*' element={<JobDescription/>} />
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