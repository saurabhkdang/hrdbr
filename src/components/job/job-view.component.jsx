import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJDRecordStart, hideAlert } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDRecord, selectJDIsLoading, selectUpdateSuccess, selectUpdateError } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const breadCrumbItems = [
    {to:'/', label: 'Home'},
    {to:'/job', label: 'Job Description'},
];  

const JobView = () => {

    const dispatch = useDispatch();
    const success = useSelector(selectUpdateSuccess);
    const error = useSelector(selectUpdateError);
    const {id} = useParams();

    useEffect(()=>{
      dispatch(fetchJDRecordStart(id));
    },[]);
    
    const jdRecord = useSelector(selectJDRecord);
    const isLoading = useSelector(selectJDIsLoading);

    const hideAlertHandler = (type) => {
        dispatch(hideAlert(type));
    }
    
    useEffect(() => {
        let newObj = {'label' : jdRecord != null && jdRecord.data !== undefined?jdRecord.data.job_title:null};
        //breadCrumbItems.push(newObj);
        dispatch(setBreadcrumb([...breadCrumbItems, newObj]));
        
    },[jdRecord]);

    return (
    <div className="row">
        {isLoading ? <Spinner/>:
        <div className="col-md-12">
            <div className="alert alert-success alert-block" style={{ 'display':(success?'block':'none') }}>
                <button type="button" onClick={() => hideAlertHandler('success')} className="close">×</button>	
                <strong>{success?success:""}</strong>
            </div>
            <div className="alert alert-danger alert-block" style={{ 'display':(error?'block':'none') }}>
                <button type="button" onClick={() => hideAlertHandler('error')} className="close">×</button>	
                <strong>{error?error:""}</strong>
            </div>
            <table className="table">
                <tbody>
                {
                    jdRecord != null && jdRecord.data !== undefined?
                    <>
                    <tr>
                        <th width="25%">Team Name</th>
                        <td>{jdRecord.data.team_name}</td>
                    </tr>
                    <tr>
                        <th>Job Title</th>
                        <td>{jdRecord.data.job_title}</td>
                    </tr>
                    <tr>
                        <th>Notice Period</th>
                        <td>{jdRecord.data.notice_period}</td>
                    </tr>
                    <tr>
                        <th>Pay Grade</th>
                        <td>{jdRecord.data.pay_grade}</td>
                    </tr>
                    <tr>
                        <th>Job Description</th>
                        <td>{jdRecord.data.job_desc}</td>
                    </tr>
                    </>
                    :
                    <tr><td colSpan={2}>No Data Found</td></tr>    
                }
                </tbody>
            </table>

            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Skill Type</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    jdRecord != null && typeof jdRecord.data !== "undefined"?
                    jdRecord.data.details.map((jd) => {
                        return <tr key={jd.id}>
                            <td width="55%">{ jd.description }</td>
                            <td width="15%">{ jd.type } </td>
                            <td width="15%">{ jd.last_updated}</td>
                        </tr>
                    })
                    :
                    <tr><td colSpan={3}>No Data Found</td></tr>
                    }
                </tbody>
            </table>
        </div>
        }
    </div>
    )
}

export default JobView;