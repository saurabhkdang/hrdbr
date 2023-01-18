import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJDStart } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDMap, selectJDIsLoading } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../../components/spinner/spinner.component';
import Listing from '../../components/listing/listing.component';

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
  const config = {'team_name': 'Team Name', 'job_title': 'Job Title','notice_period': 'Notice Period', 'pay_grade':'Pay Grade'};

  return (
    <Listing isLoading={isLoading} records={jdMap} config={config} page={'job'} />
  )
}

export default JobDescription