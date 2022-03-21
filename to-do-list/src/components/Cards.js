import React from 'react';
import map from 'lodash.map'
import Card from './Card';
import './Cards.css';

function Cards(props) {
  const { categories = [], cardsData = [] } = props;
  return (
    <div className='width-100 column align-center cards'>
      {renderCards(categories,cardsData,props.deleteCard,props.openModalUpdate)}
    </div>
  );
}

const renderCards = function(categories,cardsData,deleteCard,openModalUpdate){
  return(
    map(categories,(category, categoryIndex) => {
      return (
        <div className='column align-base default-color category'>
          <h2>{category}</h2>
          {cardsData.filter(card => card.category === category).map((cardData, index) => {
            return <Card key={`${categoryIndex}-${index}`} data={cardData} deleteCard={deleteCard} openModalUpdate={openModalUpdate} />
          })}
        </div>
      )

    })
  );
}
export default React.memo(Cards);