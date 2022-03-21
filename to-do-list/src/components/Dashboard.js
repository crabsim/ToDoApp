import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ModalCreate from './ModalCreate';
import Cards from './Cards';
import Modal from './Modal';
import { categories, priorities } from './Dashboard.constants';
import { getLocalCards } from './helperFunctions';
import './Dashboard.css';

function Dashboard() {
  let [cardsData, setCards] = useState(getLocalCards());
  let [modalVisible, setModal] = useState(false);
  let [content, setContent] = useState('');
  let [category, setCategory] = useState('Dev-Tasks');
  let [priority, setPriority] = useState('P0');
  let [date, setDate] = useState(new Date())
  let [modalUpdate, setModalUpdate] = useState(false);
  let [id, setId] = useState('');

  const toggleModal = useCallback(() => {
    setModal(!modalVisible);
  }, [modalVisible]);

  const closeModal = useCallback(() => {
    setModalUpdate(false);
    setModal(false);
    setContent('');
    setCategory('');
    setPriority('');
    setDate(new Date());
  }, []);

  const addCard = useCallback((title = '', category, date = new Date(), priority) => {
    setCards([...cardsData, { id: uuidv4(), title, category, date, priority }]);
    toggleModal();
  }, [cardsData]);

  const openModalUpdate = useCallback((id) => {
    console.log("opened");
    const tempState = [...cardsData];
    const index = tempState.findIndex((el) => el.id == id);
    setContent(tempState[index].title ?? '');
    setCategory(tempState[index].category);
    setPriority(tempState[index].priority);
    setDate(new Date(tempState[index].date) ?? new Date());
    setId(id);
    setModalUpdate(true);
    toggleModal();
  }, [cardsData]);

  const updateCard = useCallback((id, updatedTitle, category, date, priority) => {
    const tempState = [...cardsData];
    const index = tempState.findIndex((el) => el.id == id);
    tempState[index] = { id, title: updatedTitle, category, date, priority };
    //console.log(tempState);
    setCards(tempState);
    setModalUpdate(false);
    setContent('');
    toggleModal();
  }, [cardsData]);

  const clearAll = useCallback(() => {
    setCards([]);
  }, []);

  const deleteCard = useCallback((index) => {
    const updatedData = cardsData.filter((el, i) => { return el.id !== index });
    setCards(updatedData);
  }, [cardsData]);

  useEffect(() => {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
    //console.log(cardsData);
  }, [cardsData])


  return (
    <div className='column align-center width-100 dash-container'>
      <ModalCreate toggleModal={toggleModal} clearAll={clearAll} />
      <Cards openModalUpdate={openModalUpdate} deleteCard={deleteCard} categories={categories} cardsData={cardsData} />
      {modalVisible ?
        <Modal content={content} date={date} priority={priority}
          category={category} id={id} categories={categories}
          priorities={priorities} modalUpdate={modalUpdate}
          closeModal={closeModal} updateCard={updateCard} addCard={addCard}
          toggleModal={toggleModal} />
        : null}
    </div>
  )
}

export default Dashboard;