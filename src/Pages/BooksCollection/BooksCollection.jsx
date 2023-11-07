import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewBook from "./NewBook/NewBook";


const BooksCollection = () => {

    const [card,setCard] = useState({})
    const {_id} = useParams()
    const cards = useLoaderData()
    console.log(card)

    useEffect(() =>{
        const findCards = cards.find(item => item.id == _id)
        setCard(findCards)
    },[_id, cards])

    return (
        <div>
            <h2></h2>
            <NewBook card={card}></NewBook>
        </div>
    );
};

export default BooksCollection;