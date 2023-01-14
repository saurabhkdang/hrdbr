import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = ({items}) => {  

    const location = useLocation();
    const index = location.pathname;

    return (
        <div className="custom_breadcrumb">
            <ol className="breadcrumb">
                {
                    items[0][index].map((child, index) => {
                        return <li className='breadcrumb-item' key={`breadcrumb_item${index}`}>
                        {
                            child.to?<Link to={child.to}><strong>{child.label}</strong></Link>:<strong>{child.label}</strong>
                        }   
                        </li> 
                    })

                }
            </ol>
        </div>
    )
}

export default Breadcrumb;