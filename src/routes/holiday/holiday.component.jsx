import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidaysStart } from '../../store/holiday/holiday.action';
import { selectHolidaysMap } from '../../store/holiday/holiday.selector';

const HolidaysList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const getHolidaysMap = async () => {
      dispatch(fetchHolidaysStart());
    }

    getHolidaysMap();
  },[])

  const holidaysMap = useSelector(selectHolidaysMap);

  return (
    <div id="main-content">
      <div className="table-responsive">
        <table className="table table-striped table-bordered" id="performance_table">
          <thead>
          <tr>
            <th>Date</th>
            <th>Holiday</th>
            <th>Us/Indian Holiday</th>
            <th>Action(s)</th>
          </tr>
          </thead>
          <tbody>
          {holidaysMap.data === undefined?
          <tr><td colSpan={9}>Loading</td></tr>:
          holidaysMap.data.data.map((holiday) => {
            return <tr key={holiday.id}>
              <td >{holiday.dated}</td>
              <td >{holiday.attendence}</td>
              <td >{holiday.reason}</td>
              <td></td>
            </tr>
          })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HolidaysList;