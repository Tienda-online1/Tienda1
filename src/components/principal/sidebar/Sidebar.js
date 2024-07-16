import React from 'react';
import {Link} from "react-router-dom";

function Sidebar({isVisible, toggleSidebarVisibility}) {
    const userRole = localStorage.getItem('role');
    const handleCerrarSesion = (event) => {
        localStorage.clear();
    };

    return (
        <div className={`sidebar ${isVisible ? 'open' : 'hidden'}`} id="sidebar">
            <ul>
                <li><Link to="/products">Inicio</Link></li>
                {userRole === 'ADMIN' && (
                    <>
                        <li><Link to="/products/create">Producto</Link></li>
                        <li><Link to="/sales">Ventas</Link></li>
                    </>
                )}
                <li><Link to="/login" onClick={handleCerrarSesion}>Cerrar sesión</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
