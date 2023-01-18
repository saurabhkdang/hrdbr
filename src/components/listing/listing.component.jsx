import React from 'react';
import Spinner from '../spinner/spinner.component';
import { Link } from 'react-router-dom'

const Listing = (props) => {
    const {isLoading, records, config, page} = props;
    
    return (
        <div className="table-responsive">
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
            records.data.data.map((rec) => {
            return <tr key={rec.id}>
                {
                    Object.keys(config).map(function(key){
                        return <td key={key}>{rec[key]}</td>
                    })
                }
                <td>
                    <Link to={'/'+page+'/'+rec.id}><i className="fa fa-eye"></i></Link>&nbsp;&nbsp;
                    <span><i className="fa fa-edit"></i></span>&nbsp;&nbsp;
                    <span><i className="fa fa-trash"></i></span>&nbsp;&nbsp;
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