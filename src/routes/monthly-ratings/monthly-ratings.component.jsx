import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthlyRatingsStart } from '../../store/monthly-ratings/monthly-ratings.action';
import { selectMonthlyRatingsMap, selectMonthlyRatingsIsLoading } from '../../store/monthly-ratings/monthly-ratings.selector';
import Spinner from '../../components/spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const breadCrumbItems = [
    {to:'/', label: 'Home'},
    {label: 'Monthly Ratings'},
];

const MonthlyRatings = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getMonthlyRatingsMap = async () => {
            dispatch(fetchMonthlyRatingsStart());
            dispatch(setBreadcrumb(breadCrumbItems));
        }

        getMonthlyRatingsMap();
    },[])

    const monthlyRatingsMap = useSelector(selectMonthlyRatingsMap);
    const isLoading = useSelector(selectMonthlyRatingsIsLoading);
    console.log(monthlyRatingsMap);
    return (
        <div className="row">
            <div className="col-md-12">     
                <h3 className="custom_heading hide">Monthly Performance</h3> 
            </div>
            <div className="col-md-12">
                {isLoading?<Spinner/>:
                <>
                <table className="table table-striped table-bordered" id="performance_table">
            
                </table>
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
                            monthlyRatingsMap.data.map((user, key) => {
                                let datestring = new Date(user.doj);
                                let monthNumber = new Date(datestring).getMonth()+1;
                                return <tr key={user.id}>
                                    <td>{user.name}</td>
                                    {
                                        monthlyRatingsMap.month_headers.map((header, index) => {
                                            return <td key={key}>
                                                {monthlyRatingsMap.data[key]['dates'][header.label]!==undefined?<span className={`fillparent reviewbutton style_${monthlyRatingsMap.data[key]['dates'][header.label].rating}`} data-toggle="tooltip" data-platment="top" title={`${monthlyRatingsMap.data[key]['dates'][header.label].comment}`} data-userid={user.id} data-month={`${header.year}_${header.month}_01`}></span>:""}
                                                {monthNumber == header.month?<span className="label label-default pull-right">Increment</span>:null}
                                            </td>
                                        })
                                    }
                                </tr>
                            }):<tr><td colSpan={13}><Spinner/></td></tr>
                        }
                    </tbody>
                </table>
                </>
                }
            </div>
        </div>
    )
}

export default MonthlyRatings;