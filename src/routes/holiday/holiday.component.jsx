import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidaysStart } from '../../store/holiday/holiday.action';
import { selectHolidaysMap, selectHolidaysIsLoading } from '../../store/holiday/holiday.selector';
import Listing from '../../components/listing/listing.component';
import { Routes, Route } from 'react-router-dom';
import HolidayView from '../../components/holiday-view/holiday-view.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const HolidaysList = () => {

  const breadCrumbItems = [
    {'to':'/', label: 'Home'},
    {label: 'Holidays List'},
  ];

  const dispatch = useDispatch();

  useEffect(()=>{
    const getHolidaysMap = async () => {
      dispatch(fetchHolidaysStart());
      dispatch(setBreadcrumb(breadCrumbItems));
    }

    getHolidaysMap();
  },[])

  const holidaysMap = useSelector(selectHolidaysMap);
  const isLoading = useSelector(selectHolidaysIsLoading);
  const config = {'dated': 'Date', 'attendence': 'Holiday','reason': 'Us/Indian Holiday'};

  return (
    <Routes>
      <Route index element={<Listing isLoading={isLoading} records={holidaysMap} config={config} page={'holiday'} />} />
      <Route path=':id' element={<HolidayView/>}  />
    </Routes>
  )
}

export default HolidaysList;