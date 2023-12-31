import React from 'react'
import "../styles/Program_Processes.css"

function ProgramAndProcesses() {
    return (
        <>
        <div className="row">
          <div className="col-4">
            <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
              <h1>Diferencias entre procesos y programa</h1>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link" href="#item-1">Item 1. Programa</a>
                <a className="nav-link" href="#item-2">Item 2. Proceso</a>
                <a className="nav-link" href="#item-3">Item 3. Diferencias</a>
                <a className="nav-link" href="#item-4">Item 4. Ejemplo</a>
              </nav>
            </nav>
          </div>
        
          <div className="col-8">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">

              <div id="item-1">
                <h4>1. Todo acerca de programa</h4>
                <section id="programa">
                    <h1>Programa</h1>
                    <div id="Informacion">
                      <p>De forma resumida, un programa es una actividad del sistema y se puede identificar como «tarea «. 
                        Dentro de un sistema operativo, podemos ejecutar varios programas, los cuales funcionan de forma independiente. 
                        El sistema facilitará las virtudes del equipo para cada programa: gestión de memoria, uso del procesador, etc.
                      <br/>Un programa es una entidad pasiva: un archivo que contiene un grupo de instrucciones para que éste se ejecute. 
                          Como no realiza ninguna acción por sí mismo y tiene que ser ejecutado para realizar las acciones que contiene, 
                          se le denomina entidad pasiva. El espacio de direcciones de un programa está compuesto de una instrucción, datos y un stack.<br/>
                      <br/>Al fin y al cabo, un programa en ejecución no es lo mismo que un programa. Podemos utilizar el símil de: no es lo mismo 
                          una mesa que unas instrucciones para hacer la mesa. El programa es un conjunto de datos sin más, no es algo dinámico que esté 
                          continuamente trabajando.<br/>
                      </p>
                          <img src="src/assets/programa4.png" alt="Esta es la imagen ejemplo del programa"/>
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Mas informacion aqui
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">De que trata un programa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Definicion #1
                                  </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body"> 
                                    Un programa informático es un conjunto ordenado de instrucciones, escritas en un lenguaje de programación, para realizar una tarea en particular dentro de una computadora. En palabras sencillas, es una secuencia de órdenes que le indican a una computadora qué hacer.
                                    Por lo regular, estos programas son desarrollados por personas que se dedican profesionalmente a la escritura de código, los cuales se conocen como programadores.
                                    Los programas poseen en su núcleo un código fuente, que es el texto legible por los humanos y escrito en un lenguaje de programación.
                                    <br/>Finalmente, un lenguaje de programación es la herramienta que permite que una persona (un programador) pueda codificar un cúmulo de instrucciones lógicas (el programa informático), para que una computadora pueda ejecutarla y que esta responda llevando a cabo una serie determinada de acciones. <br/>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Caracteristicas #2
                                  </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <b>Un programa informático se caracteriza principalmente por ser:</b>
                                      <ul>
                                        <li>Lógico: Está constituido por un conjunto de procesos lógicos.</li>
                                        <li>Intangible: Es parte del segmento digital (software) de un sistema informático, en contraposición al segmento físico (hardware).</li>
                                        <li>Funcional: Es diseñado para cumplir una tarea o conjunto de tareas.</li>
                                        <li>Preciso: Cumple correctamente con lo programado.</li>
                                        <li>Ejecutable: Se encuentra en un formato para que se pueda accionar dentro una computadora.</li>
                                        <li>Secuencial: El código escrito se ejecuta en un determinado orden.</li>
                                      </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Software y programa #3
                                  </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <b>Los términos programa informático y software</b> son usados en muchos contextos como sinónimos. Sin embargo, en un sentido más estricto, tienen diferencias destacables.
                                    <br/>
                                    <b>Un programa informático es una cadena de instrucciones</b> que sigue un patrón lógico para cumplir ciertas tareas definidas; mientras que un software es un paquete informático que puede contener diversos programas informáticos, además de otros elementos, como imágenes, textos, audios, y datos.
                                    <br/>
                                    Por tanto, <b>un programa informático se limita a la parte secuencial de instrucciones</b> para llevar a cabo una función; y <b>el software es el envoltorio que reúne programas informáticos</b> y otros archivos que, de forma coordinada, ejercen un conjunto de labores.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                              <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                  <img src="src/assets/programa1.png" className="d-block w-100" alt="Ejemplo programa 1"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                  <img src="src/assets/programa2.png" className="d-block w-100" alt="Ejemplo programa 2"/>
                                </div>
                                <div className="carousel-item">
                                  <img src="src/assets/programa3.png" className="d-block w-100" alt="Ejemplo programa 3"/>
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
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
              </div>

              <div id="item-2">
                <h4>2. Todo acerca de proceso</h4>
                  <section id="proceso">
                    <h1>Proceso</h1>
                    <div id="Informacion">
                      <p>Es la ejecución de un programa y se considera una entidad activa porque realiza las acciones espeficadas en ese programa. 
                        De este modo, podemos ver varios procesos provenientes de un mismo programa (como es el caso de Google Chrome). El proceso 
                        maneja las actividades del sistema operativo a través del PCB (Process Control Block). Un proceso necesita de ciertos 
                        recursos: memoria, procesador, recurso I/O, etc.
                        <br/>
                        <br/>
                        Los programas se ejecutan, pero nunca vuelven ¿Qué quiere decir eso? Pues que, el proceso acaba cuando se desea, existe 
                        un error o un conflicto. El programa no es que termine, sino que el que termina es el proceso del programa.
                      </p>
                          <img src="src/assets/procesoEjemplo1.png" alt="Esta es la imagen ejemplo del programa"/>
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      Mas informacion aqui
                    </button>
                    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">De que trata un proceso</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Definicion #1
                                  </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body"> 
                                    Un programa o mandato que se ejecuta realmente en el sistema recibe la denominación de proceso.
                                    Los procesos existen en jerarquías de padre-hijo. Un proceso iniciado por un programa o mandato 
                                    es un proceso padre; un proceso hijo es el producto del proceso padre. Un proceso padre puede tener 
                                    varios procesos hijo, pero un proceso hijo sólo puede tener un padre.
                                    <br/> <br/>
                                    El sistema asigna un número de identificación de proceso (número PID) a cada proceso cuando se inicia. 
                                    Si inicia el mismo programa varias veces, tendrá un número PID distinto cada vez.
                                    Cuando se inicia un proceso en un sistema, el proceso utiliza una parte de los recursos disponibles en 
                                    el sistema. Cuando está ejecutándose más de un proceso, un planificador que está incorporado al sistema 
                                    operativo proporciona a cada proceso su parte de tiempo del sistema, basándose en las prioridades establecidas. 
                                    Estas prioridades pueden cambiarse mediante la utilización de los mandatos nice o renice.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Tipos de procesos #2
                                  </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">
                                    <b>La lista siguiente describe los tipos de procesos:</b>
                                    <ol className="list-group list-group-numbered">
                                      <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                          <div className="fw-bold">Procesos en primer plano y en segundo plano</div>
                                          Los procesos que necesitan que un usuario los inicie o que interactúe con ellos se denominan 
                                          procesos en primer plano. Los procesos que se ejecutan con independencia de un usuario se denominan
                                          procesos en segundo plano. Los programas y los mandatos se ejecutan como procesos en primer plano 
                                          por omisión. Para ejecutar un proceso en segundo plano, coloque un ampersand (&) al final del 
                                          nombre del mandato que utiliza para iniciar el proceso.
                                        </div>
                                        <span className="badge bg-primary rounded-pill">.</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                          <div className="fw-bold">Procesos daemon</div>
                                          Los daemons son procesos que se ejecutan de forma desatendida. Están constantemente en el segundo 
                                          plano y están disponibles siempre. Los daemons suelen iniciarse cuando se arranca el sistema y se 
                                          ejecutan hasta que se detiene el sistema. Un proceso daemon efectúa servicios del sistema y está 
                                          disponible siempre para más de una tarea o usuario. El usuario root o el shell root inicia los procesos 
                                          daemon y sólo puede detenerlos el usuario root. Por ejemplo, el proceso qdaemon proporciona acceso a los 
                                          recursos del sistema como las impresoras. Otro daemon habitual es el daemon sendmail.
                                        </div>
                                        <span className="badge bg-primary rounded-pill">.</span>
                                      </li>
                                      <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                          <div className="fw-bold">Procesos zombie</div>
                                          Un proceso zombie es un proceso finalizado que ya no se ejecuta pero que sigue reconociéndose en 
                                          la tabla de procesos (en otras palabras, tiene un número PID). Ya no se asigna espacio del sistema a 
                                          dicho proceso. Los procesos zombie han sido cerrados o han salido y siguen existiendo en la tabla 
                                          de procesos hasta que muere el proceso padre o se apaga el sistema y se reinicia. Los procesos zombie 
                                          se visualizan como cuando se listan por el mandato ps.
                                        </div>
                                        <span className="badge bg-primary rounded-pill">.</span>
                                      </li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="carouselExampleIndicators" className="carousel slide">
                              <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img src="src/assets/proceso1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                  <img src="src/assets/proceso2.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                  <img src="src/assets/proceso3.png" className="d-block w-100" alt="..."/>
                                </div>
                              </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                              </button>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>

              <div id="item-3">
                <h4>3. Tabla de procesos y programas</h4>
                    <section id="diferencias">
                        <h1>Diferencias</h1>
                        <p><u>Las principales diferencias entre un programa y un proceso son:</u></p>
                        <table className="table table-dark table-hover">
                          <thead>
                              <tr>
                                  <th>Número</th>
                                  <th>Proceso</th>
                                  <th>Programa</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>Un proceso es una instancia en ejecución de un programa.</td>
                                  <td>Un programa es un conjunto de instrucciones almacenadas en un archivo.</td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>Los procesos consumen recursos del sistema mientras se ejecutan.</td>
                                  <td>Los programas son estáticos y no consumen recursos hasta que se ejecutan.</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>El proceso es dinámico, implica la ejecución real de esas instrucciones.</td>
                                <td>El programa es estático, es solo un conjunto de instrucciones.</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Los procesos están en ejecución en la memoria.</td>
                                <td>Los programas pueden estar en reposo en el disco.</td>
                              </tr>
                          </tbody>
                      </table>
                    </section>
              </div>

              <div id="item-4">
                <h4>4. Ejemplo con procesos-programa-prioridad</h4>
                <p>Ejercicios didactivos de procesos con programas y su prioridad que puedes realizar para entender mejor el trasfondo de esto:</p>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Ver ejercicios</button>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Procesos - Programa - Prioridad</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <p>Si al estar haciendo el pastel , llega su hijo llorando por que le picó una abeja, el cocinero deja de 
                      hacer el pastel y abre un libro de primeros auxilios, en este momento pasó a un proceso de mayor prioridad, 
                      cuando termine  volverá  y continuará   con el anterior proceso.
                    </p>
                    <img src="src/assets/procesoEjemplo23.png" className="img-fluid" alt="Este es una imagen del ejemplo de la madre cocinando"/>
                    <h5>Podremos deducir lo siguiente:</h5>
                    <ol className="list-group list-group-numbered">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Multitarea y Cambio de Contexto:</div>
                          El ejemplo destaca la naturaleza multitarea de un sistema operativo. Mientras el cocinero está "Haciendo Pastel", sucede un evento inesperado (el hijo llora), lo que lleva a un cambio de contexto. El cambio de contexto se ilustra cuando el flujo se desplaza del proceso "Haciendo Pastel" al proceso "Atender al Hijo" y luego al "Proceso de Primeros Auxilios". Este cambio de contexto es una característica clave de los sistemas multitarea, donde el sistema puede manejar múltiples tareas simultáneamente.
                        </div>
                        <span className="badge bg-primary rounded-pill">.</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Prioridad de Procesos:</div>
                          La situación donde el cocinero cambia al "Proceso de Primeros Auxilios" resalta la noción de prioridades de procesos. El hecho de que el cocinero atienda primero la situación de emergencia (el hijo llorando) antes de volver al proceso original ("Haciendo Pastel") sugiere que algunos procesos pueden tener prioridad sobre otros. Este concepto es esencial en sistemas operativos para garantizar la eficiencia y manejar situaciones críticas de manera adecuada.
                        </div>
                        <span className="badge bg-primary rounded-pill">.</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Bloqueo y Desbloqueo de Recursos:</div>
                          Si el "Proceso de Primeros Auxilios" requiere recursos específicos, como un libro de primeros auxilios, puede ilustrar el bloqueo y desbloqueo de recursos en un sistema operativo. Mientras el cocinero está ocupado atendiendo al hijo, el recurso (el libro de primeros auxilios) podría considerarse bloqueado. Después de completar el proceso de primeros auxilios, el recurso se desbloquea y está disponible nuevamente
                        </div>
                        <span className="badge bg-primary rounded-pill">.</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Gestión de Prioridades:</div>
                          La situación plantea la pregunta de cómo se gestionan las prioridades en un sistema operativo. ¿Quién decide cuál es la prioridad de un proceso sobre otro? Los sistemas operativos suelen implementar algoritmos de planificación para gestionar la ejecución de procesos y asignar prioridades en función de la importancia y urgencia de las tareas.                    </div>
                        <span className="badge bg-primary rounded-pill">.</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Condiciones de Sincronización:</div>
                          La transición entre procesos también podría implicar condiciones de sincronización. Por ejemplo, el cocinero podría esperar a que el "Proceso de Primeros Auxilios" se complete antes de volver a "Hacer Pastel". Esto introduce la idea de sincronización entre procesos para garantizar un flujo de ejecución coherente.                    </div>
                        <span className="badge bg-primary rounded-pill">.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
        </>
    )
}

export default ProgramAndProcesses
