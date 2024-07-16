import React, { useEffect, useState } from 'react';
import {getSales} from "../services/venta.service";
import './Venta.css';

const VentasTable = () => {
    const [ventas, setVentas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVenta = async () => {
            try {
                const response = await getSales();
                setVentas(response);
            } catch (err) {
                setError('Failed to load sales data.');
            }
        };
        fetchVenta();

    }, []);

    return (
        <div className="ventas-table-container">
            <h2>Listado de Ventas</h2>
            {error && <p className="error">{error}</p>}
            {Array.isArray(ventas) && ventas.length === 0 && <p className="empty-response">No se encontraron ventas</p>}
            <table className="ventas-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Productos</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {ventas.map(venta => (
                    <tr key={venta.id}>
                        <td>{venta.id}</td>
                        <td>{new Date(venta.fecha).toLocaleString()}</td>
                        <td>
                            <ul>
                                {venta.productos.map((producto, index) => (
                                    <li key={index}>
                                        {producto.nombre} - Cantidad: {producto.cantidad} - Precio unitario: ${producto.precio}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>${venta.total.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default VentasTable;
