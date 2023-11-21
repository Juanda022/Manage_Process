import React from 'react'
import "../styles/Point2.css"

function Point2() {
    return (
        <>
        <div className="row" id="contenedorGeneral">
        <div className="col-4">
          <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
            <h1>Creacion y terminacion de procesos</h1>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link" href="#item-1">1. Informacion Principal</a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
              </nav>
              <a className="nav-link" href="#item-2">2. Creacion de procesos</a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#item-2-1">Item 2-1</a>
                <a className="nav-link ms-3 my-1" href="#item-2-2">Item 2-2</a>
              </nav>
              <a className="nav-link" href="#item-3">3. Terminacion de procesos</a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
              </nav>
            </nav>
          </nav>
        </div>
      
        <div className="col-8" id="contenedorSecundario">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
            <div id="item-1">
              <h4>Item 1 <b>Informacion principal</b></h4>
                    <section id="inicio" className="text-center">
                        <h1>Creación y Terminacion de Procesos</h1>
                        <p>La creación y terminación de procesos son dos procesos fundamentales en los sistemas operativos. La creación 
                            de procesos implica la iniciación de una instancia en ejecución de un programa, asignando los recursos 
                            necesarios para su funcionamiento. Este proceso puede generar procesos secundarios, conocidos como procesos 
                            hijos, que se ejecutan de manera concurrente con el proceso padre.</p>
                        <p>En contraste, la terminación de procesos marca el final de la ejecución de un proceso. Puede ocurrir de manera 
                            normal, cuando el programa completa su tarea, o de manera anormal, debido a errores o intervenciones externas. 
                            La terminación libera los recursos asociados al proceso, como memoria y archivos, para su reutilización.</p>
                        <p>Estos dos aspectos son esenciales en la gestión eficiente de los recursos del sistema y la optimización del 
                            rendimiento en entornos multitarea. Comprender la creación y terminación de procesos es fundamental para diseñar 
                            sistemas operativos robustos y para el desarrollo eficiente de software a nivel del sistema.</p>
                    </section>
            </div>
            <div id="item-1-1">
                <h5>Item 1-1  Carrusel de fotos</h5>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="src/assets/estado1.png" className="d-block w-100" alt="Imagen de estado"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="src/assets/descriptor1.png" className="d-block w-100" alt="Imagen de descriptor"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src="src/assets/creacion4.png" className="d-block w-100" alt="Imagen de creacion de estado"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
              </div>

            <div id="item-2">
                <h4>Item 2 <b>Creacion de procesos</b></h4>
                        <section id="creacion">
                            <h2>Creación de Procesos</h2>
                            <p>Los Sistemas Operativos necesitan cierta forma  de crear y terminar procesos, según sea necesario durante la operación.</p>
                            <p><b>Hay 4 eventos principales  que provocan la creación de procesos:</b></p>
                            <ol>
                                <li>El arranque del sistema.</li>
                                <li>La ejecución, desde un proceso, de una llamada al sistema para creación de procesos.</li>
                                <li>Una petición de Usuario para crear un proceso.</li>
                                <li>El inicio de un trabajo por lotes.</li>
                            </ol>
                            <div className="row justify-content-center">
                            
                            </div>
                        </section>
              </div>
            <div id="item-2-1">
              <h5>Item 2-1 Card 1: Arranque y Card 2: Ejecucion</h5>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-md-6">
                    <div className="card">
                    <img src="src/assets/creacion1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Evento 1: <b>Arranque del sistema</b></h5>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>En primer plano:</b> Es decir procesos que interactúan con los usuarios (humanos) y realizan trabajo para ellos.</li>
                            <li className="list-group-item"><b>En segundo Plano:</b> Son los que  no están asociados con usuarios sino con funciones específicas Ejemplo: manejar actividades 
                                como correo electrónico, para avisar que llega un correo entrante, aceptar peticiones entrantes de  páginas Web, noticias, impresiones etc. 
                                Estos se conocen como demonios (daemons).  
                                <ul>
                                    <li>Los sistemas grandes tiene   docenas de ellos.</li>
                                    <li>Verlos en Administrador de tareas</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                    <img src="src/assets/creacion2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Evento 2: <b>Ejecucion desde un proceso en ejecución</b></h5>
                    </div>
                        <ul className="list-group">
                            <li className="list-group-item">Un proceso a menudo llama al sistema para crear uno o más procesos, para que le ayuden a realizar su trabajo.</li>
                            <li className="list-group-item">Ejemplo para obtener una gran cantidad de datos desde la red para su posterior  procesamiento:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">1. Se creará un proceso para obtener datos  y colocarlos en un buffer compartido.</li>
                                    <li className="list-group-item">2. Mientras un segundo proceso remueve los datos del buffer y los procesa.</li>
                                </ul>
                            </li>
                            <li className="list-group-item">En un multiprocesador esto se realiza con mayor rapidez.</li>
                        </ul>
                    </div>
                </div>
              </div>
              
            </div>
            </div>
        
            <div id="item-2-2">
                <h5>Item 2-2 Card 3: Peticion y Card 4: Procesamiento</h5>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col-md-6 ">
                        <div className="card">
                        <img src="src/assets/creacion3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Evento 3: <b>Petición de un Usuario para crear un proceso</b></h5>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">	El usuario puede crear un proceso con un doble clic en un ícono.</li>
                          </ul>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="card">
                        <img src="src/assets/creacion4.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Evento 4: <b>Procesamiento por lotes</b></h5>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">	Aplica a mainframes grandes.</li>
                            <li className="list-group-item">	Los usuarios pueden enviar trabajos de procesamiento por lotes al sistema, (posiblemente en forma remota).</li>
                            <li className="list-group-item">	El sistema operativo decide que tiene los recursos para ejecutar otro trabajo, crea el proceso y ejecuta el siguiente de la cola.</li>
                          </ul>
                        </div>
                    </div>
                </div>
                
              </div>
            
            <div id="item-3">
              <h4>Item 3 <b>Terminacion de procesos</b></h4>
                    <section id="terminacion">
                        <h2>Terminación de Procesos</h2>
                        <div className="alert alert-primary" role="alert">
                            <p>Una vez que se crea el proceso, comienza a ejecutarse y realiza el trabajo al que está destinado.</p>
                            <p><b>Las condiciones de término son:</b></p>
                        </div>
                    </section>
            </div>
            <div id="item-3-1">
              <h5>Item 3-1 Terminos</h5>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            #1 Salida normal
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <b>Informacion</b>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Salida 1</div>
                                    Exit Process, en windows.  Exit en Unix.
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Salida 2</div>
                                    Procesadores de palabras, exploradores y otros, todos tienen un ícono para indicar que todos los archivos se cierren y termine.
                                </div>
                                <span className="badge bg-primary rounded-pill">24</span>
                                </li>
                            </ol>
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                #2 Salida por error o error fatal
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <b>Informacion</b>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Salida por error</div>
                                    Por ejemplo si el usuario escribe el comando para ejecutar el programa y no existe dicho archivo.
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Error fatal</div>
                                    	Ejecución de una instrucción ilegal, hace referencia a una dirección de memoria que no existe.
                                </div>
                                <span className="badge bg-primary rounded-pill">24</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Error fatal</div>
                                    	División por 0.
                                </div>
                                <span className="badge bg-primary rounded-pill">34</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Error fatal</div>
                                    	Algunos programas permiten tomar control de ese ese error y  no terminar el proceso.
                                    </div>
                                    <span className="badge bg-primary rounded-pill">44</span>
                                </li>
                            </ol>
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                #3 Eliminado por otro proceso
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <b>Informacion</b>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Variante 1</div>
                                    	Un proceso puede solicitar al SO que elimine otros procesos.
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Variante 2</div>
                                    	Los procesos deberían tener la autorización necesaria, para realizar la eliminación.
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Variante 3</div>
                                    	Cuando un proceso termina, todos los procesos creados se eliminan de inmediato también.
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                                </li>
                            </ol>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Point2
