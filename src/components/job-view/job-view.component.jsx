import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJDRecordStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDRecord, selectJDIsLoading } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const breadCrumbItems = [
    {to:'/', label: 'Home'},
    {to:'/job', label: 'Job Description'},
];  

const JobView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
      dispatch(fetchJDRecordStart(id));
    },[]);
    
    const jdRecord = useSelector(selectJDRecord);
    const isLoading = useSelector(selectJDIsLoading);
    
    useEffect(() => {
        let newObj = {'label' : jdRecord != null && jdRecord.data !== undefined?jdRecord.data.job_title:null};
        //breadCrumbItems.push(newObj);
        dispatch(setBreadcrumb([...breadCrumbItems, newObj]));
    },[jdRecord]);

    return (
    <div className="row">
        {isLoading ? <Spinner/>:
        <div className="col-md-12">
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
                    jdRecord != null && jdRecord.jd_data !== undefined?
                    jdRecord.jd_data.map((jd) => {
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