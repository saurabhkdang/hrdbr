import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Employees from './routes/employees/employees.component';
import JobDescription from './routes/jobdescriptions/jobdescription.component';
import HolidaysList from './routes/holiday/holiday.component';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Employees/>} />
        <Route path='job' element={<JobDescription/>} />
        <Route path='holiday' element={<HolidaysList/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;