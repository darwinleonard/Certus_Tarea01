import {Colores} from '../utils/Colores'
import { Color } from './Color'



export const ColorChanger = () => {

    return(

     <div className="container">

            <div>

                {
                      Colores.map((Colores) => (
                        <Color
                      
                        key={Colores.id}

                        //Con esto se envia todo y no uno en uno
                        {...Colores}
                        />
                      )  )

                }

            </div>
                       
     </div>

    )
}