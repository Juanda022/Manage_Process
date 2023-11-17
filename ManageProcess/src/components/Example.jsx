import { useState } from "react"
import styled from "styled-components"

function Example() {
    const [tasks,setTasks] = useState([
        { 
            id: 1,
            title: 'Proceso 1',
            body: 'Spotify',
            list: 1
        },
        { 
            id: 2,
            title: 'Proceso 2',
            body: 'Navegador',
            list: 1
        },
        { 
            id: 3,
            title: 'Proceso 3',
            body: 'Teams',
            list: 1
        },
    ]);

    const getList = (list)=>{
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt,item) =>{
        evt.dataTransfer.setData('itemID',item.id)
    }

    const dragginOver= (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt,list) =>{
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        if (list === 2 && getList(2).length > 0) {
            return alert("No pude haber mas de un proceso en ejecucion");
        }
        if(item.list === 2 && list === 3) {
            return alert("No se puede pasar un proceso de bloqueo a ejecucion");
        }
        if (item.list === 3 && list === 2) {
            return alert("No se puede pasar un proceso de ejecucion a bloqueo");
        }
        item.list = list

        const newState = tasks.map(tasks =>{
            if (tasks.id === itemID) {
                return item;
            }else{
                return tasks;
            }
        })

        setTasks(newState);
    }

    return (
        <ExampleCss>
        <div className="Container">
            <h1>
                Ejemplo dinamico de manejador de Procesos &nbsp;
                <img className='icon-example' src="src/assets/IconoExample.png" alt="" />
            </h1>
            <br/>
            <h2>Procesador de un solo hilo</h2>
            <div className="drag-and-drop">
                <div className="column column--1">
                    <h3>
                        Proceso en Espera
                    </h3>
                    <div className="dd-zone" droppable="true" onDragOver={ (evt) => dragginOver(evt)} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=> startDrag(evt,item)}>
                            <strong className="title">{item.title}</strong>
                            <p className="body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--2">
                    <h3>
                        Proceso en Ejecucion
                    </h3>
                    <div className="dd-zone" droppable="true" onDragOver={ (evt) => dragginOver(evt)} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=> startDrag(evt,item)}>
                            <strong className="title">{item.title}</strong>
                            <p className="body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--3">
                    <h3>
                        Proceso en Bloqueo
                    </h3>
                    <div className="dd-zone" droppable="true" onDragOver={ (evt) => dragginOver(evt)} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className="dd-element" key={item.id} draggable onDragStart={(evt)=> startDrag(evt,item)}>
                            <strong className="title">{item.title}</strong>
                            <p className="body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr/>
            <div className="explication py-5">
                <p>
                En un procesador de un solo hilo, un manejador de procesos es como el director de una orquesta.
                Imagina que el procesador es la orquesta y cada tarea que realiza la computadora es como una pieza musical.
                El manejador de procesos se encarga de coordinar y dirigir todas esas piezas para que la orquesta <span>(el procesador) </span>
                pueda tocar la sinfonía completa de manera armoniosa.<br/>
                </p>
                <p>
                Cuando abres varias aplicaciones o programas en tu computadora, cada uno se convierte en un proceso independiente. Estos procesos compiten por el tiempo de ejecución en el único hilo de procesamiento disponible. Aquí es donde entra en juego el manejador de procesos.
                El manejador de procesos decide qué proceso se ejecuta en cada momento, asignando porciones de tiempo de CPU a cada uno. Esto se conoce como "planificación de procesos". Puede dar más tiempo de CPU a un proceso que esté realizando tareas intensivas, y menos tiempo a procesos en espera.<br/>
                </p>
                <p> 
                Además, el manejador de procesos se encarga de la creación, terminación y suspensión de procesos. Imagina que es como el encargado de backstage que asegura que cada actor <span>(proceso)</span> esté listo para salir al escenario <span>(ser ejecutado por el procesador)</span>.
                En resumen, el manejador de procesos en un procesador de un solo hilo es como el maestro de ceremonias que mantiene todo en orden, asigna recursos y asegura que la computadora funcione de manera eficiente, incluso cuando tiene que manejar varias tareas al mismo tiempo.
                </p>
            </div>
        </div>
        </ExampleCss>
    )
}

export default Example

const ExampleCss = styled.div`
.Container{
    background-color: #f4f4f5;
    display: grid;
    place-items: center;
}
h1{
    margin-top: 15px;
    color: #3b3b53;
    text-align: center;
}
.icon-example{
    width: 60px;
}

.column{
    display: flex;
    flex-direction: column;
    background-color: #F6F8FC;
    width: 400px;
    height: 450px;
    min-height: 100px;
    padding: 24px 12px;
    border-radius: 8px;
    border-top: 7px solid;
    box-shadow: 0 8px 16px rgba(#333, 0.1);
}

.column--1{
    border-color: #FF9E4A;
}

.column--1 .title{
    color: #FF9E4A;
}

.column--2{
    border-color: #338720;
}

.column--2 .title{
    color: #338720;
}

.column--3{
    border-color: #e3332c;
}

.column--3 .title{
    color: #e3332c;
}

/* DRAG AND DROP */
.drag-and-drop{
    display: flex;
    grid-gap: 40px;
    padding-bottom: 100px;
}

@media (max-width: 768px) {
    h1{
        margin-top: 32px;
    }
    .drag-and-drop {
        flex-direction: column;
        grid-gap: 20px;
    }

    .column{
        height: 400px;
    }
}

.dd-zone{
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    height: 100%;
}

.dd-element{
    font-size: 18px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 26px 20px;
    cursor: pointer;
    color: #5b5b73;
}

.dd-element .body{
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 0;
}
.explication{
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 35px;
    padding-right: 35px;
    margin-left: auto;
    margin-right: auto;
    text-aling: center;
    background-color: #aab1b7;
}

span{
    color: #9b2c2c;
}`;