import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHolidayRecordStart } from '../../store/holiday/holiday.action';
import { selectHolidayRecord, selectHolidaysIsLoading } from '../../store/holiday/holiday.selector';
import Spinner from '../spinner/spinner.component';

const HolidayView = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHolidayRecordStart(id));
    },[]);

    const holidayRecord = useSelector(selectHolidayRecord);
    const isLoading = useSelector(selectHolidaysIsLoading);
     
    return (
        <div className="row">
            {isLoading ? <Spinner/>:
            <div className="col-md-12">
                <table className="table">
                    <tbody>
                    {
                        holidayRecord != null && holidayRecord !== undefined?
                        <>
                        <tr>
                            <th width="25%">Date</th>
                            <td>{holidayRecord.dated}</td>
                        </tr>
                        <tr>
                            <th>Holiday</th>
                            <td>{holidayRecord.attendence}</td>
                        </tr>
                        <tr>
                            <th>US / Indian holiday</th>
                            <td>{holidayRecord.reason}</td>
                        </tr>
                        </>
                        :
                        <tr><td colSpan={2}>No Data Found</td></tr>    
                    }
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}

export default HolidayView;