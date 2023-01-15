import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthlyRatingsStart } from '../../store/monthly-ratings/monthly-ratings.action';
import { selectMonthlyRatingsMap, selectMonthlyRatingsIsLoading } from '../../store/monthly-ratings/monthly-ratings.selector';
import Spinner from '../../components/spinner/spinner.component';

const MonthlyRatings = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getMonthlyRatingsMap = async () => {
            dispatch(fetchMonthlyRatingsStart());
        }

        getMonthlyRatingsMap();
    },[])

    const monthlyRatingsMap = useSelector(selectMonthlyRatingsMap);
    const isLoading = useSelector(selectMonthlyRatingsIsLoading);

    return (
        <div className="row">
            <div className="col-md-12">     
                <h3 className="custom_heading hide">Monthly Performance</h3> 
            </div>
            <div className="col-md-12">
                {isLoading?<Spinner/>:
                <table className="table table-striped table-bordered" id="performance_table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            {
                                monthlyRatingsMap.month_headers?
                                monthlyRatingsMap.month_headers.map((header, index) => {
                                    return <th key={index}>{ header.label}</th>
                                }):null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            monthlyRatingsMap.data !== undefined ?
                            monthlyRatingsMap.data.data.map((user) => {
                                let datestring = new Date(user.doj);
                                let monthNumber = new Date(datestring).getMonth()+1;
                                return <tr key={user.id}>
                                    <td>{user.name}</td>
                                    {


                                        monthlyRatingsMap.month_headers.map((header, index) => {
                                            return <td key={user.id + "_" + header.month + "_" + header.year} id={user.id + "_" + header.month + "_" + header.year}>
                                                {
                                                monthlyRatingsMap.performance[user.id] !== undefined && monthlyRatingsMap.performance[user.id][header.month+"_"+header.year]?<span className={`fillparent reviewbutton style_${monthlyRatingsMap.performance[user.id][header.month+"_"+header.year].performance}`} data-toggle="tooltip" data-placement="top" title={monthlyRatingsMap.performance[user.id][header.month+"_"+header.year].comment} data-userid={user.id} data-month={`${header.year}_${header.month}_01`}></span>:null
                                                }
                                                {monthNumber == header.month?<span className="label label-default pull-right">Increment</span>:null}
                                            </td>
                                        })
                                    }
                                </tr>
                            }):<tr><td colSpan={13}><Spinner/></td></tr>
                        }
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default MonthlyRatings;