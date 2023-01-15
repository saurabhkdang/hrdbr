import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHolidaysStart } from '../../store/holiday/holiday.action';
import { selectHolidaysMap, selectHolidaysIsLoading } from '../../store/holiday/holiday.selector';
import Listing from '../../components/listing/listing.component';

const HolidaysList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const getHolidaysMap = async () => {
      dispatch(fetchHolidaysStart());
    }

    getHolidaysMap();
  },[])

  const holidaysMap = useSelector(selectHolidaysMap);
  const isLoading = useSelector(selectHolidaysIsLoading);
  const config = {'dated': 'Date', 'attendence': 'Holiday','reason': 'Us/Indian Holiday'};

  return (
    <Listing isLoading={isLoading} records={holidaysMap} config={config} />
  )
}

export default HolidaysList;