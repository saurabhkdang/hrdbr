import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJDStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDMap, selectJDIsLoading } from '../../store/jobdescriptions/jobdescription.selector';
import Listing from '../../components/listing/listing.component';
import JobView from '../../components/job-view/job-view.component';
import { Routes, Route } from 'react-router-dom';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const breadCrumbItems = [
  {to:'/', label: 'Home'},
  {label: 'Job Description'},
];


const JobDescription = () => {

  const dispatch = useDispatch();

  useEffect(()=>{

    const getJDMap = async () => {
      dispatch(fetchJDStart());
    }
    console.log('mhere');
    getJDMap();

  },[])
  console.log(breadCrumbItems);
  const jdMap = useSelector(selectJDMap);
  const isLoading = useSelector(selectJDIsLoading);
  const config = {'team_name': 'Team Name', 'job_title': 'Job Title','notice_period': 'Notice Period', 'pay_grade':'Pay Grade'};

  useEffect(() => {
    dispatch(setBreadcrumb(breadCrumbItems));
    console.log('test');
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