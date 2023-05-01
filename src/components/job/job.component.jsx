import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJDRecordStart, updateJDRecord, resetRecordId } from '../../store/jobdescriptions/jobdescription.action';
import { selectJDRecord, selectJDIsLoading, selectUpdateRecordId } from '../../store/jobdescriptions/jobdescription.selector';
import Spinner from '../spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';
import { Link, useNavigate } from 'react-router-dom';

const breadCrumbItems = [
  {to:'/', label: 'Home'},
  {to:'/job', label: 'Job Description'}
];  

const defaultFormFields = {};

const JobDescriptionEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {id} = useParams();

    useEffect(()=>{
      dispatch(fetchJDRecordStart(id));
    },[]);
    
    const jdRecord = useSelector(selectJDRecord);
    const isLoading = useSelector(selectJDIsLoading);
    const updated_id = useSelector(selectUpdateRecordId);
    
    const addFields = () => {
        let newfield = { description: '', type: '', jd_id: id }
        //let jdData = formFields.jdData;
        formFields.jd_data.push(newfield);
        setFormFields({...formFields, jdData: newfield });
    }

    const removeRecord = (index) => {
        let records = {...jdRecord};
        records.jd_data.splice(index, 1);
        setFormFields({
            'team_name' : records.data.team_name,
            'job_title' : records.data.job_title,
            'notice_period' : records.data.notice_period,
            'pay_grade' : records.data.pay_grade,
            'job_desc' : records.data.job_desc,
            'id' : id,
            'jd_data' : records.jd_data
        })
    }

    const submitJD = () => {
        //console.log(formFields);
        dispatch(updateJDRecord({formFields:formFields, id:id}));
        
        
    }

    

    const handleArrayChange = (index, event) => {
        let records = {...formFields};
        records.jd_data[index][event.target.name] = event.target.value;
        setFormFields(records);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setFormFields({...formFields, [name]:(value)});
    }

    useEffect(() => {
        console.log(updated_id);
        if(updated_id !== null){
            dispatch(resetRecordId(null));
            navigate('/job/'+updated_id);
        }
    }, [updated_id]);
    
    useEffect(() => {
        let newObj = {'label' : jdRecord != null && jdRecord.data !== undefined?jdRecord.data.job_title:null};
        
        dispatch(setBreadcrumb([...breadCrumbItems, newObj]));

        if(jdRecord != null && jdRecord.data !== undefined){
            setFormFields({
                'team_name' : jdRecord.data.team_name,
                'job_title' : jdRecord.data.job_title,
                'notice_period' : jdRecord.data.notice_period,
                'pay_grade' : jdRecord.data.pay_grade,
                'job_desc' : jdRecord.data.job_desc,
                'id' : id,
                'jd_data' : jdRecord.data.details
            })
        }

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
                        <td>
                            <select name="team_name" id="team_name" value={formFields['team_name']?formFields['team_name']:""} onChange={ handleChange }>
                                <option value="">Select</option>
                                <option value="Business Development">Business Development</option>
                                <option value="Business Development - Programming">Business Development - Programming</option>
                                <option value="Contracts">Contracts</option>
                                <option value="Finance &amp; Accounts">Finance &amp; Accounts</option>
                                <option value="Human Resource">Human Resource</option>
                                <option value="Operations" selected="">Operations</option>
                                <option value="Operations - POS">Operations - POS</option>
                                <option value="PR Team">PR Team</option>
                                <option value="Sales">Sales</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Job Title</th>
                        <td>
                            <input type="text" name="job_title" value={formFields['job_title']} onChange={ handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th>Notice Period</th>
                        <td>
                            <select name="notice_period" id="notice_period" value={formFields['notice_period']} onChange={ handleChange }>
                                <option value="">Select</option>
                                <option value="1 month" selected="">1 month</option>
                                <option value="2 months">2 months</option>
                                <option value="3 months">3 months</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Pay Grade</th>
                        <td>
                            <select name="pay_grade" id="pay_grade" value={formFields['pay_grade']} onChange={handleChange}>
						        <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                                <option value="K">K</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="N">N</option>
                                <option value="O">O</option>
                                <option value="P">P</option>
                                <option value="Q">Q</option>
                                <option value="R">R</option>
                                <option value="S">S</option>
                                <option value="T">T</option>
                                <option value="U">U</option>
                                <option value="V">V</option>
                                <option value="W">W</option>
                                <option value="X">X</option>
                                <option value="Y">Y</option>
                                <option value="Z">Z</option>
                            </select>
                        </td>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    jdRecord != null && typeof jdRecord.data.details !== "undefined"?
                    jdRecord.data.details.map((jd, key) => {
                        return <tr key={jd.id}>
                            <td width="55%">
                                <input type="text" name="description" style={{"width":"100%"}} onChange={event => handleArrayChange(key, event)} value={Object.keys(formFields).length && formFields.jd_data[key] && formFields.jd_data[key].description?formFields.jd_data[key].description:""}/>
                            </td>
                            <td width="15%">
                                <select name="type" id="type0" onChange={event => handleArrayChange(key, event)} value={Object.keys(formFields).length && formFields.jd_data[key] && formFields.jd_data[key].type?formFields.jd_data[key].type:""}>
                                    <option value="">Select</option>
                                    <option value="Skill Required" selected="">Skill Required</option>
                                    <option value="Tasks">Tasks</option>
                                    <option value="Performance Metrics">Performance Metrics</option>
                                </select>
                            </td>
                            <td width="15%">
                                { jd.last_updated}
                            </td>
                            <td width="15%">
                                <button type="button" className="btn btn-xs btn-danger delete_row" onClick={() => removeRecord(key)}><i className="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    })
                    :
                    <tr><td colSpan={3}>No Data Found</td></tr>
                    }
                    <tr>
                        <td width="55%">&nbsp;</td>
                        <td width="15%">&nbsp;</td>
                        <td width="15%">
                            <button type="button" onClick={addFields} className="add_row btn btn-xs btn-success"><i className="fa fa-plus"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <input type="text" name="id" value={formFields.id} />
                            <Link to="/job" className="btn  pull-right">Cancel</Link>
                            <input type="button" name="submit" value="Submit" onClick={submitJD} className="btn btn-primary pull-right" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </div>
    )
}

export default JobDescriptionEdit