import get from 'lodash.get';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Card.css'


function Card(props) {
  const title = get(props, 'data.title', '');
  const priority = get(props, 'data.priority', 'P4');
  const date = get(props, 'data.date', new Date());
  let openModalUpdate = () => { props.openModalUpdate(props.data.id) };
  let deleteCard = () => { props.deleteCard(props.data.id) };
  return (
    <div className="card" onDoubleClick={openModalUpdate}>
      <div className='row align-center justify-between default-color border-box width-100  card-content'>
        <div className='row align-center card-title'>
          <input type="checkbox" className="checkbox" />
          <h3>{title} : {priority.toUpperCase()}</h3>
        </div>
        <div className='date'>
          <h6>{date.toString()}</h6>
        </div>
        <div className='card-delete'>
          <FontAwesomeIcon className='delete-icon' icon={faTrashCan} onClick={deleteCard} />
        </div>
      </div>
    </div>
  );
}
export default Card;