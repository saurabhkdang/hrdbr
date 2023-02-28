import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBreadCrumb } from '../../store/breadcrumb/breadcrumb.selector';

const Breadcrumb = ({items}) => {  

    const breadCrumb = useSelector(selectBreadCrumb);
    
    return (
        <div className="custom_breadcrumb">
            <ol className="breadcrumb">
                {breadCrumb != null?
                    breadCrumb.map((child, index) => {
                        return <li className='breadcrumb-item' key={`breadcrumb_item${index}`}>
                        {
                            child.to?<Link to={child.to}><strong>{child.label}</strong></Link>:<strong>{child.label}</strong>
                        }   
                        </li> 
                    })
                :""
                }
            </ol>
        </div>
    )
}

export default Breadcrumb;