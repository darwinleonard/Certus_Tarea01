//import {personajes} from '../utils/DataPersonaje'

export const TaskList = (props) => {

    return(

        
     <div >
        
        
            <div>
                <p>Id: {props.id}</p>
                <p>Texto: {props.texto}</p>
                <p>Completed: {props.completed}</p>
                  

            </div>
      
        
     </div>

    )


}