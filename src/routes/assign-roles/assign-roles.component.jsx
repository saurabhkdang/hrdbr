import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssignRolesStart } from '../../store/assign-roles/assign-roles.action';
import { selectAssignRolesMap } from '../../store/assign-roles/assign-roles.selector';
import {useParams, useNavigate} from 'react-router-dom';

const AssignRoles = () => {

  const { role } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {

    const getAssignRolesMap = async () => {
      dispatch(fetchAssignRolesStart(role?role:1));
    }

    getAssignRolesMap();

  },[role])

  
  const assignRolesMap = useSelector(selectAssignRolesMap);
  
  const permissionChangeHandler = (event) => navigate(event.target.value);

  return (
    <div className="row">
      <div className="col-md-12">			
        <h3 className="custom_heading hide">Assign Roles</h3>
      </div>
      <div className="col-md-6">
        <div className="form-group row">
          <label for="role" className="col-sm-2 col-form-label" style={{"margin-top":"6px"}}>Assign Role For</label>
          <div className="col-sm-4">
            <select className="form-control" id="role" name="role" onChange={permissionChangeHandler}>
            {assignRolesMap.roles === undefined?
              <option>No Roles</option>:
              assignRolesMap.roles.map((role) => {
                return <option value={ role.id }>{role.role_title}</option>
              })
            }
            </select>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="pull-right">
          <button className="btn btn-primary btn-sm" id="updateall">Update All</button>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className='col-md-12'>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Actions</th>
                <th colSpan={3} style={{"textAlign":"center"}}>Permissions</th>
              </tr>
            </thead>
            <tbody>
            {assignRolesMap.actions === undefined?
                <tr><td colSpan={9}>Loading</td></tr>:
                assignRolesMap.actions.map((holiday, index) => {
                return <tr key={holiday.id}>
                  <td>{holiday.name}</td>
                  <td>
                    <input className="form-check-input" type="radio" name={`permission_${holiday.action_id}_${holiday.role_id}`} id={`permission_${holiday.action_id}_${holiday.role_id}_0`} value="0" checked={ holiday.permission === 0?true:false } onChange={ () => permissionChangeHandler(0) } />
                    <label className="form-check-label" htmlFor={`permission_${holiday.action_id}_${holiday.role_id}_0`}>Inherit </label>
                    </td>
                  <td>
                    <input className="form-check-input" type="radio" name={`permission_${holiday.action_id}_${holiday.role_id}`} id={`permission_${holiday.action_id}_${holiday.role_id}_1`} value="1" checked={ holiday.permission === 1?true:false } onChange={ () => permissionChangeHandler(1) }/>
                    <label className="form-check-label" htmlFor={`permission_${holiday.action_id}_${holiday.role_id}_1`}>Allow</label>
                    </td>
                  <td>
                    <input className="form-check-input" type="radio" name={`permission_${holiday.action_id}_${holiday.role_id}`} id={`permission_${holiday.action_id}_${holiday.role_id}_2`} value="2" checked={ holiday.permission === 2?true:false } onChange={ () => permissionChangeHandler(2) }/>
                    <label className="form-check-label" htmlFor={`permission_${holiday.action_id}_${holiday.role_id}_2`}>Deny</label>
                    </td>
                </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AssignRoles;