import CardColumns from 'react-bootstrap/CardColumns'
import { useSelector } from "react-redux";

import MemeCard from "./meme-card-component"


export default function Hot() {
    const hotMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) >= 5));

    if (hotMemes.length) {
    return  <div>
            <h1>hot memes</h1>
            <CardColumns>
                {
                    hotMemes.map((m, i) => (<MemeCard key={i} meme={m} />))
                }
            </CardColumns>
            </div>
    } else {
    return <div>
                <h1>HOT</h1>
                <h4>There is no HOT MEMES at this moment</h4>
            </div>
    }
}
