import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    const search = () => {
        let query = document.getElementById('search');
        let item = document.getElementById('exampleFormControlTextarea1');
        if (item.value.includes(query.value)) {
            var index = item.value.indexOf(query.value);
            item.focus();
            item.setSelectionRange(index, index + query.value.length);
        }
        else {
            return;
        }
        return false;
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                    </ul>
                    <div className="form-floating me-3" style={{width: '182px'}}>
                        <select onChange={props.change} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option value="1">Blue</option>
                            <option value="2">Red</option>
                            <option value="3">Green</option>
                            <option value="4">Orange</option>
                        </select>
                        <label htmlFor="form-select">Choose a color mode.</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input onClick={props.toggleMode} className="form-check-input" aria-checked='false' type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label me-3" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
                    </div>
                    <form className="d-flex" role="search" onSubmit={submitForm}>
                        <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={search} className="btn bg-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set Title Here'
}

