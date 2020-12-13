import React from 'react';
import mainLogo from '../images/Version_control-bro.svg'
import './styles/Home.css'
import { Link } from 'react-router-dom'

function Home(props){
    // const children = props.children;
    return (
        <React.Fragment>
            <div className='Badges__Home-img'>
                <img src={mainLogo} alt=""/>
                <div className='Badges__Home-info_div'>
                    <h3>Bienvenidos a PlatziConf!</h3>
                    <Link to="/badges" className='btn btn-primary'>Registrarse</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;