import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJDRecordStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDRecord, selectJDIsLoading } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../spinner/spinner.component';

const JobView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
      dispatch(fetchJDRecordStart(id));
    },[]);

    const jdRecord = useSelector(selectJDRecord);
    const isLoading = useSelector(selectJDIsLoading);

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
          </div>
          }
      </div>
    )
}

export default JobView;