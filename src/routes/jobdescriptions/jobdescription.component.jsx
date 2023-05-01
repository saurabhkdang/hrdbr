import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJDStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDMap, selectJDIsLoading, selectUpdateSuccess, selectUpdateError } from '../../store/jobdescriptions/jobdescription.selector';
import Listing from '../../components/listing/listing.component';
import JobView from '../../components/job/job-view.component';
import { Routes, Route } from 'react-router-dom';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const breadCrumbItems = [
  {to:'/', label: 'Home'},
  {label: 'Job Description'},
  {to:'/job/addedit/0', label: 'Add'},
];


const JobDescription = () => {

  const dispatch = useDispatch();
  const success = useSelector(selectUpdateSuccess);
  const error = useSelector(selectUpdateError);

  useEffect(()=>{

    const getJDMap = async () => {
      dispatch(fetchJDStart());
    }
    getJDMap();

  },[success, error])
  
  const jdMap = useSelector(selectJDMap);
  const isLoading = useSelector(selectJDIsLoading);
  const config = {'team_name': 'Team Name', 'job_title': 'Job Title','notice_period': 'Notice Period', 'pay_grade':'Pay Grade'};

  useEffect(() => {
    dispatch(setBreadcrumb(breadCrumbItems));
    
  },[]);
  
  return (
    <Listing isLoading={isLoading} records={jdMap} config={config} page={'job'} />    
    /* <Routes>
      <Route index element={<Listing isLoading={isLoading} records={jdMap} config={config} page={'job'} />}></Route>
      <Route path=':id' element={<JobView/>}></Route>
    </Routes> */
  )
}

export default JobDescription