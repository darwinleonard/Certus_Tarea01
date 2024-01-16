import {Tasks} from '../utils/ListaTareas'
import { TaskList } from './TaskList'

export const MostrarTaskList = () => {

    return(
     <div className="container">

          
            <h2>Mi Lista de Tareas</h2>

            <div>

                {
                      Tasks.map((Tasks) => (
                      <TaskList
                    
                      key={Tasks.id}

                      //Con esto se envia todo y no uno en uno
                      {...Tasks}
                      />

                  )  )
                }



            </div>

                       
     </div>

    )


}