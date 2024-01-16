
export const Color = (props) => {

    return(
        
     <div>               
            <div style={{backgroundColor: `${props.texto}`}} className="cubo">
                <p> Color: {props.texto}</p>
               
            </div>
              
     </div>

    )
}