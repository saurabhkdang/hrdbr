import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJDStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDMap, selectJDIsLoading } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../../components/spinner/spinner.component';

const JobDescription = () => {

  const dispatch = useDispatch();

  useEffect(()=>{

    const getJDMap = async () => {
      dispatch(fetchJDStart());
    }

    getJDMap();

  },[])

  const jdMap = useSelector(selectJDMap);
  const isLoading = useSelector(selectJDIsLoading);

  return (
    <div className="table-responsive">
      {isLoading?<Spinner/>:
      <table className="table table-striped table-bordered" id="performance_table">
        <thead>
        <tr>
          <th>Team Name</th>
          <th>Job Title</th>
          <th>Notice Period</th>
          <th>Pay Grade</th>
          <th>Action(s)</th>
        </tr>
        </thead>
        <tbody>
        {jdMap.data === undefined?
        <tr><td colSpan={9}><Spinner/></td></tr>:
        jdMap.data.data.map((jd) => {
          return <tr key={jd.id}>
            <td >{jd.team_name}</td>
            <td >{jd.job_title}</td>
            <td >{jd.notice_period}</td>
            <td >{jd.pay_grade}</td>
            <td></td>
          </tr>
        })
        }
        </tbody>
      </table>
      }
    </div>
  )
}

export default JobDescription