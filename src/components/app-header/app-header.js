import './app-header.scss';


const AppHeader = () => {
    return (
        <header className='header'>
            <div className="header_wrapper">
                <h1>
                    <a href="#" className="header_title">
                        <span>Marvel</span> information portal
                    </a>
                </h1>
                <nav>
                    <ul className='header_menu'>
                        <li><a href="#" className='header_link header_link_red'>Characters</a></li>
                        <div className="header_link">/</div>
                        <li><a href="#" className='header_link'>Comics</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;