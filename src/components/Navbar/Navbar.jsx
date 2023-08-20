import './styles.css'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar bg-${props.mode}`}>
                <div className="container-fluid">
                    <div className={props.mode == 'dark'?'brand text-light':'brand'}>
                        <img width="65" height="65" src="https://img.icons8.com/plasticine/80/business-group.png" alt="business-group"/>
                        Team Management System
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.darkModeHandler} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light'?'dark' : 'light'} `} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                </div>


                
            </nav>
        </>
    )
}
Navbar.propTypes = {
    mode:PropTypes.string.isRequired
}