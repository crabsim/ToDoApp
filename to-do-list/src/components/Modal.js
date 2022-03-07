import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import './Modal.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
function Modal(props){
    const [input,setInput] = useState(props.content);
    const [category,setCategory] = useState(props.category);
    const [date,setDate] = useState(props.date);
    const [priority,setPriority] = useState(props.priority);
    //console.log(priority)
    return(
        <div className='modal-back'>
        <div className='column align-center justify-center text-left default-color modal'>
            <div className='row align-center justify-between title'>
            <h3>Content</h3>
            <input className='default-color' type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div className='dropdown'>
                <select className='default-color' value={category} onChange={(e)=>setCategory(e.target.value)}>
                    {props.categories.map((el,index)=>{
                        return(
                            <option key={el} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
            <div className='dropdown'>
                <select className='default-color' value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    {props.priorities.map((el,index)=>{
                        return(
                            <option key={el} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
            <div className='date-time'>
                <DateTimePicker className="default-color" onChange={setDate} value={date} />
            </div>
            {!props.modalUpdate? 
            <button onClick={()=>props.addCard(input,category,date,priority)}>Add Card</button>
            :
            <button onClick={()=>props.updateCard(props.id,input,category,date,priority)}>Update Card</button>
            }
            <button onClick={()=>props.closeModal()}>Close Modal</button>
        </div>
        </div>
    );
}
export default Modal;