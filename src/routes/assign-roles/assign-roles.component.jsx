import {React, useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssignRolesStart, updateRoles, hideAlert } from '../../store/assign-roles/assign-roles.action';
import { selectAssignRolesMap, selectAssignRolesIsLoading, selectUpdateSuccess, selectUpdateError } from '../../store/assign-roles/assign-roles.selector';
import {useParams, useNavigate} from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const defaultFormFields = {};
const breadCrumbItems = [
  {to:'/', label: 'Home'},
  {label: 'Assign Roles'},
];

const AssignRoles = () => {

  const { role } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  useEffect(() => {

    const getAssignRolesMap = async () => {
      dispatch(fetchAssignRolesStart(role?role:1));
      dispatch(setBreadcrumb(breadCrumbItems));
    }

    getAssignRolesMap();

  },[role])

  
  const assignRolesMap = useSelector(selectAssignRolesMap);
  const isLoading = useSelector(selectAssignRolesIsLoading);
  const success = useSelector(selectUpdateSuccess);
  const error = useSelector(selectUpdateError);
  console.log(success);
  
  const permissionChangeHandler = (event) => navigate(event.target.value);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:parseInt(value)});
  }

  const onSubmitHandler = () => {
    console.log(formFields);
    dispatch(updateRoles(formFields));
  };

  const hideAlertHandler = (type) => {
    dispatch(hideAlert(type));
  }

  useEffect(() => {
    if(assignRolesMap.actions !== undefined) {
      let customFields = {};
      assignRolesMap.actions.map((role) => {
        customFields[`permission_${role.action_id}_${role.role_id}`] = role.permission;
      })
      setFormFields({...customFields });
    }
  },[role, assignRolesMap]);

  return (
    <div className="row">
      <div className="col-md-12">			
        <h3 className="custom_heading hide">Assign Roles</h3>
      </div>
      <div className="col-md-6">
        <div className="form-group row">
          <label htmlFor="role" className="col-sm-4 col-form-label" style={{"marginTop":"6px"}}>Assign Role For</label>
          <div className="col-sm-4">
            <select className="form-control" id="role" name="role" value={role?role:""} onChange={permissionChangeHandler}>
            {assignRolesMap.roles === undefined?
              <option>No Roles</option>:
              assignRolesMap.roles.map((role) => {
                return <option key={role.id} value={ role.id }>{role.role_title}</option>
              })
            }
            </select>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="pull-right">
          <button className="btn btn-primary btn-sm" id="updateall" onClick={onSubmitHandler}>Update All</button>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className='col-md-12'>
        <div className="alert alert-success alert-block" style={{ 'display':(success?'block':'none') }}>
            <button type="button" onClick={() => hideAlertHandler('success')} className="close">×</button>	
            <strong>{success?success:""}</strong>
        </div>
        <div className="alert alert-danger alert-block" style={{ 'display':(error?'block':'none') }}>
            <button type="button" onClick={() => hideAlertHandler('error')} className="close">×</button>	
            <strong>{error?error:""}</strong>
        </div>
        <div className="table-responsive">
          {isLoading?<Spinner/>:
          <form action="">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Actions</th>
                  <th colSpan={3} style={{"textAlign":"center"}}>Permissions</th>
                </tr>
              </thead>
              <tbody>
              {assignRolesMap.actions === undefined?
                  <tr><td colSpan={9}><Spinner/></td></tr>:
                  assignRolesMap.actions.map((role, index) => {
                  return <tr key={role.id}>
                    <td>{role.name}</td>
                    <td>
                      <input className="form-check-input" type="radio" name={`permission_${role.action_id}_${role.role_id}`} id={`permission_${role.action_id}_${role.role_id}_0`} value="0" checked={formFields[`permission_${role.action_id}_${role.role_id}`] === 0?true:false} onChange={ handleChange } />
                      <label className="form-check-label" htmlFor={`permission_${role.action_id}_${role.role_id}_0`}>Inherit </label>
                      </td>
                    <td>
                      <input className="form-check-input" type="radio" name={`permission_${role.action_id}_${role.role_id}`} id={`permission_${role.action_id}_${role.role_id}_1`} value="1" checked={formFields[`permission_${role.action_id}_${role.role_id}`] === 1?true:false} onChange={ handleChange }/>
                      <label className="form-check-label" htmlFor={`permission_${role.action_id}_${role.role_id}_1`}>Allow</label>
                      </td>
                    <td>
                      <input className="form-check-input" type="radio" name={`permission_${role.action_id}_${role.role_id}`} id={`permission_${role.action_id}_${role.role_id}_2`} value="2" checked={formFields[`permission_${role.action_id}_${role.role_id}`] === 2?true:false} onChange={ handleChange }/>
                      <label className="form-check-label" htmlFor={`permission_${role.action_id}_${role.role_id}_2`}>Deny</label>
                      </td>
                  </tr>
                  })
                }
              </tbody>
            </table>
          </form>
          }
        </div>
      </div>
    </div>
  )
}

export default AssignRoles;