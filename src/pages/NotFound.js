import React from 'react';
import './styles/NotFound.css'
import Error404 from '../images/404Error.svg'

function NotFound(){
    return (
        <React.Fragment>
            <div className='Badges__404-div'>
             <img className='Badges__404-error_img' src={Error404} alt=""/>
             <h1 className='Badges__404-text'>Sitio no encontrado!</h1>
            </div>
        </React.Fragment>  
    
    )
}
export default NotFound;