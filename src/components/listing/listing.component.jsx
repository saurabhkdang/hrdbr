import React from 'react';
import Spinner from '../spinner/spinner.component';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteJD, hideAlert } from '../../store/jobdescriptions/jobdescription.action';
import { selectUpdateSuccess } from '../../store/jobdescriptions/jobdescription.selector';
import { useNavigate } from 'react-router-dom';

const Listing = (props) => {
    const {isLoading, records, config, page} = props;
    const dispatch = useDispatch();
    const success = useSelector(selectUpdateSuccess);
    const navigate = useNavigate();

    const hideAlertHandler = (type) => {
        dispatch(hideAlert(type));
    }

    const deleteRecord = (section, record) => {
        console.log(section, record);

        let route = '';
        switch(section){
            case 'job':
                route = 'job/delete/'+record;
                dispatch(deleteJD(route));
                navigate('/job');
                break;
            default:
                route = '';
        }
    }
    
    return (
        <div className="table-responsive">
            <div className="alert alert-success alert-block" style={{ 'display':(success?'block':'none') }}>
                <button type="button" onClick={() => hideAlertHandler('success')} className="close">×</button>	
                <strong>{success?success:""}</strong>
            </div>
            {isLoading?<Spinner/>:
            <table className="table table-striped table-bordered" id="performance_table">
                <thead>
                <tr>
                    {
                    Object.keys(config).map(function(key) {
                        return <th key={key}>{config[key]}</th>
                    })
                    }
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {records.data === undefined?
                <tr><td colSpan={9}><Spinner /></td></tr>:
                records.data.map((rec) => {
                return <tr key={rec.id}>
                    {
                        Object.keys(config).map(function(key){
                            return <td key={key}>{rec[key]}</td>
                        })
                    }
                    <td>
                        <Link to={'/'+page+'/'+rec.id}><i className="fa fa-eye"></i></Link>&nbsp;&nbsp;
                        <Link to={'/'+page+'/addedit/'+rec.id}><i className="fa fa-edit"></i></Link>&nbsp;&nbsp;
                        <span onClick={() => deleteRecord(page, rec.id)}><i className="fa fa-trash"></i></span>&nbsp;&nbsp;
                    </td>
                </tr>
                })
                }
                </tbody>
            </table>
            }
        </div>
  )
}

export default Listing