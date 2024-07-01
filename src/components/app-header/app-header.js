import {Link, NavLink} from 'react-router-dom'
import './app-header.scss';


const AppHeader = () => {
    return (
        <header className='header'>
            <div className="header_wrapper">
                <h1 className="header_title">
                    <Link to='/'>
                        <span>Marvel</span> information portal
                    </Link>
                </h1>
                <nav>
                    <ul className='header_menu'>
                        <li>
                            <NavLink
                                end 
                                to='/' 
                                className={({ isActive }) => isActive ? "header_link_red" : "header_link"}>
                                    Characters
                            </NavLink>
                        </li>
                        <div className="header_link">/</div>
                        <li>
                            <NavLink 
                                to='/comics' 
                                className={({ isActive }) => isActive ? "header_link_red" : "header_link"}>
                                    Comics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;