import React from 'react'
function Status() {
    return (
        <>
        <h2 style={{textAlign: 'left', marginLeft: '50px'}}>Estados de un Proceso</h2>
        <div style={{marginLeft: '760px', position: 'fixed', marginRight: '100px'}}>
        <h6>Los estados de un proceso obedecen a su participación y disponibilidad dentro del sistema operativo y surgen de la necesidad de controlar la ejecución de cada proceso.</h6> <p>Los procesadores sólo pueden ejecutar un solo proceso a la vez, turnándolos para el uso de este. Existen procesos no apropiativos o cooperativos que básicamente ocupan todo el tiempo del procesador hasta que ellos deciden dejarlo. <br/>Los procesos apropiativos son aquellos que ocupan por un período de tiempo el procesador hasta que una interrupción o señal llega al procesador para hacer el cambio de proceso, a esto se le conoce como cambio de contexto.</p>
        </div>
        <div className="card" style={{backgroundColor: 'rgba(173, 173, 173, 0.192)', width: '600px', marginLeft: '100px', marginTop: '20px'}}>
        <img src="src/assets/estados.png" className="card-img-top" style={{width: '500px', paddingLeft:'100px'}}/>
        <div className="card-body">
            <h5 className="card-title">Los tres estados en los que se puede encontrar un proceso son:</h5>
            <div className="accordion accordion-flush" id="accordionFlushExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor: 'rgba(0, 255, 85, 0.308)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <strong>En Ejecución</strong>
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Está usando la CPU en ese instante</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor: 'rgba(255, 251, 0, 0.288)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <strong>Listo</strong>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Se denomina un ejecutable, este se detiene temporalmente para dejar que se ejecute otro proceso</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{backgroundColor: 'rgba(255, 0, 0, 0.356)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <strong>Bloqueado</strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">No puede ejecutarse aunque  haya una CPU disponible. <br/> (no puede ejecutarse sino hasta que ocurra cierto evento externo). </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </> 
    )
}

export default Status
