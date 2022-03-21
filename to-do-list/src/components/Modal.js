import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Modal.css';

function Modal(props) {
  const [input, setInput] = useState(props.content);
  const [category, setCategory] = useState(props.category);
  const [date, setDate] = useState(props.date);
  const [priority, setPriority] = useState(props.priority);
  const { categories = [], priorities = [] } = props;
  return (
    <div className='modal-back'>
      <div className='column align-center justify-center text-left default-color modal'>
        <div className='row align-center justify-between title'>
          <h3>Content</h3>
          <input className='default-color' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='dropdown'>
          <select className='default-color' value={category} onChange={(e) => setCategory(e.target.value)}>
            {mapCategories(categories)}
          </select>
        </div>
        <div className='dropdown'>
          <select className='default-color' value={priority} onChange={(e) => setPriority(e.target.value)}>
            {mapPriorities(priorities)}
          </select>
        </div>
        <div className='date-time'>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
        {!props.modalUpdate ?
          <button onClick={() => props.addCard(input, category, date, priority)}>Add Card</button>
          :
          <button onClick={() => props.updateCard(props.id, input, category, date, priority)}>Update Card</button>
        }
        <button onClick={() => props.closeModal()}>Close Modal</button>
      </div>
    </div>
  );
}

function mapCategories(categories) {
  return (
    categories.map((el, index) => {
      return (
        <option key={index} value={el}>{el}</option>
      )
    })
  );
}

function mapPriorities(priorities) {
  return (
    priorities.map((el, index) => {
      return (
        <option key={index} value={el}>{el}</option>
      )
    })
  );
}

export default React.memo(Modal);