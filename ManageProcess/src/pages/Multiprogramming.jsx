import React from 'react'

function Multiprogramming() {
    return (
        <>
            <h3 style={{textAlign: 'center'}}>Modelacion de la Multiprogramacion</h3>
            <div className="container text-center">
                <div className="row">
                <div className="col">
                    <p>Cuando se utiliza la multiprogramación, el uso de la CPU se puede mejorar.</p>

                </div>
                <div className="col">
                    Dicho de otra manera: si el proceso realiza cálculos solo el 20 por ciento del tiempo que está en la memoria, con cinco procesos en memoria a la vez la CPU deberá estar ocupada todo el tiempo.
                </div>
                <div className="col">
                    Sin embargo, este modelo es demasiado optimista, ya que se supone que los 5 procesos, nunca estarán esperando la E/S al mismo tiempo.
                </div>
                </div>
            </div>
            <img src="src/assets/multi.png" alt="" style={{position: 'fixed'}}/>
            <ul className="list-group" style={{maxWidth: '300px', marginLeft: '500px'}}>
                <li className="list-group-item" style={{backgroundColor: 'rgba(192, 247, 247, 0.548)'}}>Un mejor modelo es analizar el uso de la CPU de un modo probabilístico.</li>
                <li className="list-group-item" style={{backgroundColor: 'rgba(192, 247, 247, 0.548)'}}>Si un proceso gasta una fracción p esperando a que se complete una operación de E/S.</li>
                <li className="list-group-item" style={{backgroundColor: 'rgba(192, 247, 247, 0.548)'}}>Con n procesos en memoria a la vez, la probabilidad de que todos los n procesos estén esperando la E/S (en cuyo caso, la CPU estará inactiva) es p<sup>n</sup> </li>
            </ul>
        </>
    )
}

export default Multiprogramming
