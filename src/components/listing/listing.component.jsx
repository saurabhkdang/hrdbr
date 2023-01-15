import React from 'react';
import Spinner from '../spinner/spinner.component';

const Listing = (props) => {
    const {isLoading, records, config} = props;
    
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