import { useState } from "react"
import styled from "styled-components"
import "../App.css"

function Example() {
    const [tasks,setTasks] = useState([
        { 
            id: 1,
            title: 'Proceso 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 2,
            title: 'Proceso 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 3,
            title: 'Proceso 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
    ]);

    const getList = (list)=>{
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt,item) =>{
        evt.dataTransfer.setData('itemID',item.id)
        console.log(item);
    }

    const dragginOver= (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt,list) =>{
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        if (list === 2 && getList(2).length > 0) {
            // Si la lista 2 ya tiene un elemento, no se permite soltar más
            return;
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
}

@media (max-width: 768px) {
    .drag-and-drop {
        flex-direction: column;
        grid-gap: 20px;
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
}`;