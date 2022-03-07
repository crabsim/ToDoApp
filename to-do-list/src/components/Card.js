import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'

function Card(props){
    return(
        <div className="card" onDoubleClick={()=>{props.openModalUpdate(props.data.id)}}>
            <div className='row align-center justify-between default-color border-box width-100  card-content'>
            <div className='row align-center card-title'>
            <input type="checkbox" className="checkbox"/>
            <h3>{props.data.title} : {props.data.priority.toUpperCase()}</h3>
            </div>
            <div className='date'>
                <h6>{props.data.date.toString()}</h6>
            </div>
            <div className='card-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashCan} onClick={()=>{props.deleteCard(props.data.id)}} />
            </div>
            </div>
        </div>
    );
}
export default Card;