import React,{useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateModal from './CreateModal';
import Cards from './Cards';
import Modal  from './Modal';
import './Dashboard.css';

function Dashboard(){

    const categories = ["Dev-Tasks","Updates-Push","Updates-Pull","Prod-Issue","Code-Review","Meetings"];
    const priorities = ["P0","P1","P2","P3","P4"];
    let [cardsData,setCards] = useState(getLocalCards());
    let [modalVisible,setModal] = useState(false);
    let [content,setContent] = useState('');
    let [category,setCategory] = useState('Dev-Tasks');
    let [priority,setPriority] = useState('P0');
    let [date,setDate] = useState(new Date())
    let [modalUpdate, setModalUpdate] = useState(false);
    let [id,setId] = useState('');
    function toggleModal(){
        setModal(!modalVisible);
    }
    function closeModal(){
        setModalUpdate(false);
        setModal(false);
        setContent('');
        setCategory('');
        setPriority('');
        setDate('');
    }
    

    function getLocalCards(){
        if(localStorage.getItem("cardsData") == undefined){
            return {};
        }
        else{
            return JSON.parse(localStorage.getItem("cardsData"));
        }
    }

    const addCard = (title,category,date,priority) =>{
        title = title ?? '';
        date = date ?? new Date();
        setCards([...cardsData, {id:uuidv4(),title,category,date,priority}]);
        toggleModal();
    }
    const openModalUpdate = (id) =>{
        const tempState = [...cardsData];
        const index = tempState.findIndex((el) => el.id == id);
        setContent(tempState[index].title ?? '');
        setCategory(tempState[index].category);
        setPriority(tempState[index].priority);
        setDate(new Date(tempState[index].date) ?? new Date());
        setId(id);
        setModalUpdate(true);
        toggleModal();   
    }
    const updateCard = (id,updatedTitle,category,date,priority) =>{
        const tempState = [...cardsData];
        const index = tempState.findIndex((el) => el.id == id);
        tempState[index] = {id,title:updatedTitle,category,date,priority};
        //console.log(tempState);
        setCards(tempState);
        toggleModal();
        setModalUpdate(false);
        setContent('');
    }
    const clearAll = () =>{
        setCards([]);
    }
    const deleteCard = (index) =>{
        const updatedData = cardsData.filter((el,i) => {return el.id!==index});
        setCards(updatedData);
    }

    useEffect(() =>{
        localStorage.setItem('cardsData',JSON.stringify(cardsData));
        //console.log(cardsData);
    },[cardsData])
    

        return(
            <div className='column align-center width-100 dash-container'>
                <CreateModal toggleModal={toggleModal} clearAll={clearAll}/>
                <Cards openModalUpdate={openModalUpdate} deleteCard={deleteCard} categories={categories} cardsData={cardsData} />
                {modalVisible ? <Modal content={content} date={date} priority={priority} category={category} id={id} categories={categories} priorities={priorities} modalUpdate={modalUpdate} closeModal={closeModal} updateCard={updateCard}  addCard={addCard} toggleModal={toggleModal} /> : null}
            </div>
        )
}

export default Dashboard;