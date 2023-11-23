import React from 'react'

function Hierarchy() {
    return (
        <>
            <div className="contenido">
                <h2 style={{ marginLeft: '120px' }}>Jerarquia de Procesos</h2>
                <p style={{ marginLeft: '120px', fontSize: 'larger' }}>En algunos sistemas, cuando un proceso crea a otro, el proceso padre y el proceso hijo continúan asociados.<br/>Podemos observar como se compone con el siguiente ejemplo:</p>
            </div>

            <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" style={{ backgroundColor: 'rgb(0, 75, 173)', marginLeft: '100px' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Iniciar
                </a>
                <div className="dropdown-menu" style={{ marginLeft: '300px', padding: '10px', alignItems: 'center' }}>
                Este proceso es denominado "proceso padre".
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ backgroundColor: 'rgb(195, 228, 255)' }}>
                <h5 style={{ paddingLeft: '20px' }}>Macro Proceso</h5>
                <a className="dropdown-item" href="#">Gestion de activos</a>
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" style={{ border: 'transparent', color: 'black', marginLeft: '15px', backgroundColor: 'rgb(195, 228, 255)' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Gestion de clientes
                    </a>
                    <div className="dropdown-menu" style={{ marginLeft: '250px', width: '300px', padding: '10px', alignItems: 'center' }}>
                    El proceso hijo puede crear por sí mismo más procesos.
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ border: 'transparent', color: 'black', marginLeft: '30px', backgroundColor: 'rgb(145, 178, 205)' }}>
                    <h5 style={{ paddingLeft: '20px' }}>Proceso</h5>
                    <a className="dropdown-item" href="#">Gestion de Conexion</a>
                    <a className="dropdown-item" href="#">Gestion de contrato</a>
                    <a className="dropdown-item" href="#">Consulta/Quejas</a>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" style={{ border: 'transparent', color: 'black', marginLeft: '15px', backgroundColor: 'rgb(145, 178, 205)' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Facturacion
                        </a>
                        <div className="dropdown-menu" style={{ marginLeft: '300px', width: '300px', padding: '10px', alignItems: 'center' }}>
                        Formando una jerarquía de procesos.
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ backgroundColor: 'rgb(99, 145, 182)' }}>
                        <h5 style={{ paddingLeft: '20px' }}>Actividad</h5>
                        <a className="dropdown-item" href="#">Lectura de medidas</a>
                        <a className="dropdown-item" href="#">Gestion de BD</a>
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle" style={{ border: 'transparent', color: 'black', marginLeft: '10px', backgroundColor: 'rgb(99, 145, 182)' }} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Esquema de pago
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ backgroundColor: 'rgb(37, 89, 131)' }}>
                            <h5 style={{ paddingLeft: '20px' }}>Tarea</h5>
                            <a className="dropdown-item" href="#">Produccion</a>
                            <a className="dropdown-item" href="#">Verificacion</a>
                            <a className="dropdown-item" href="#">Relleno de sobres</a>
                            <a className="dropdown-item" href="#">Envio de factura</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


                

            <div className="card" style={{ marginLeft: '900px', width: '320px' }}>
            <img src="src/assets/windows.jpg" className="card-img-top" style={{ width: '200px', paddingLeft: '100px' }} />
            <div className="card-body">
                <h5 className="card-title">Windows no tiene el concepto de jerarquía de procesos</h5>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <strong>¿Cómo son los procesos?</strong>
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Todos los procesos son iguales.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <strong>¿Cómo maneja los procesos?</strong>
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Simula una Jerarquía de procesos, cuando se crea un proceso el padre recibe un indicador especial, un token (llamado <strong>manejador</strong>) que puede utilizar para controlar al hijo.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <strong>Función del manejador</strong>
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Tiene la libertad de pasar ese indicador a otros procesos, con lo cual invalida la Jerarquía. (deshereda)</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hierarchy
