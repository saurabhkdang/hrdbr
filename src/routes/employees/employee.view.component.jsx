import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEmployeeByIdStart } from '../../store/employees/employee.action';
import { selectEmployeeMap, selectEmployeesIsLoading } from '../../store/employees/employee.selector';
import Spinner from '../../components/spinner/spinner.component';
import { setBreadcrumb } from '../../store/breadcrumb/breadcrumb.action';

const toTitleCase = (str) => {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

const breadCrumbItems = [
    {to:'/', label: 'Home'},
    {to:'/', label: 'Employees List'},
];

const EmployeeView = () => {

    const dispatch = useDispatch();
    const employeeMap = useSelector(selectEmployeeMap);
    const isLoading = useSelector(selectEmployeesIsLoading);
    const { id } = useParams();

    useEffect(() => {
        const getEmployeeMap = async () => {
          dispatch(fetchEmployeeByIdStart(id));
        }
        getEmployeeMap();
    },[]);

    useEffect(() => {
        let newObj = {'label' : employeeMap != null && employeeMap.data !== undefined?employeeMap.data.main.name:null};
        const updateBreadCrumb = () => {
            dispatch(setBreadcrumb([...breadCrumbItems, newObj]));
        }

        updateBreadCrumb();
    },[employeeMap])


    console.log(employeeMap);

    return isLoading?<Spinner/>:
                <>
                    <div className='row'>
                        <div className='col-md-12'>
                            <table className='table table-striped'>
                                <tbody>
                                    {typeof employeeMap.data !== "undefined" && employeeMap.data.main!=null?
                                    Object.keys(employeeMap.data.main).map(function(key, index){
                                        return <tr key={key}>
                                            <td width={"25%"}><strong>{toTitleCase(key.replaceAll('_',' '))}</strong></td>
                                            <td width={"25%"}>{employeeMap.data.main[key]}</td>
                                        </tr>;
                                    })
                                    :
                                    ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className="custom_heading">User Equipment</h3>
                            <table className='table table-striped'>
                                <tbody>
                                    {typeof employeeMap.data !== "undefined" && employeeMap.data.equipments!=null?
                                    Object.keys(employeeMap.data.equipments).map(function(key, index){
                                        return <tr key={key}>
                                            <td width={"25%"}><strong>{toTitleCase(key.replaceAll('_',' '))}</strong></td>
                                            <td width={"25%"}>{employeeMap.data.equipments[key]}</td>
                                        </tr>;
                                    })
                                    :
                                    ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className="custom_heading">Monthly Rating</h3>
                            <table className='table table-striped'>
                                <tbody>
                                    <tr>
                                    {
                                        typeof employeeMap.data !== "undefined" && employeeMap.data.month_headers!=null?
                                        employeeMap.data.month_headers.map(function(header, index){
                                            return <td key={index}>
                                                <span className={`fillparent reviewbutton style_${typeof employeeMap.data.performance[header.label]!=="undefined"?employeeMap.data.performance[header.label].performance:"monthly_view" }`} data-toggle="tooltip" data-platment="top" title={typeof employeeMap.data.performance[header.label]!=="undefined"?employeeMap.data.performance[header.label].comment:""} data-userid="" data-month={`${header.year}_${header.month}_01`}>{header.label}</span>
                                            </td>
                                        })
                                        :
                                        ""
                                    }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className="custom_heading">Events</h3>
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <td><strong>Date</strong></td>
                                        <td><strong>Event Type</strong></td>
                                        <td><strong>Description</strong></td>
                                        <td><strong>Attended</strong></td>
                                    </tr>
                                    {
                                        typeof employeeMap.data !== "undefined" && employeeMap.data.trainings!=null?
                                        employeeMap.data.trainings.map(function(training, index){
                                            return <tr key={index}>
                                                <td>
                                                {
                                                    training.dates.split('|').map(function(t, i){
                                                        return <span key={i}>{t}<br/></span>
                                                    })
                                                }
                                                </td>
                                                <td>{training.event_type}</td>
                                                <td>{training.name}</td>
                                                <td><strong>{training.attended}</strong></td>
                                            </tr>                   
                                        })
                                        :
                                        ""
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className="custom_heading">Documents</h3>
                            <table className="table table-striped table-bordered">
                                <tbody>
                                {
                                    typeof employeeMap.data !== "undefined" && employeeMap.data.documents!=null?
                                    employeeMap.data.documents.map(function(item, key){
                                        return <tr key={key}>
                                            <td>{typeof employeeMap.data.documents[key] !== "undefined"?employeeMap.data.documents[key].title:""}</td>
                                            <td><input type="file"/></td>
                                        </tr> 
                                    })
                                    :
                                    ""
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
}

export default EmployeeView;