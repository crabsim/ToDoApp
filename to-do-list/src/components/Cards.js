import Card from './Card';
import './Cards.css'
function Cards(props) {
    return (
        <div className='width-100 column align-center cards'>
        {props.categories.map((category,categoryIndex)=>{
            return(
                <div className='column align-base default-color category'>
                    <h2>{category}</h2>
                    {props.cardsData.filter( card => card.category === category).map((cardData,index)=>{
                        return <Card key={`${categoryIndex}-${index}`} data={cardData} deleteCard={props.deleteCard} openModalUpdate={props.openModalUpdate}  />
                    })}
                 </div>   
            )
            
        })}
        </div>
    );
}
export default Cards;