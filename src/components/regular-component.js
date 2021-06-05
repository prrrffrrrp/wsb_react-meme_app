import CardColumns from 'react-bootstrap/CardColumns'
import { useSelector } from "react-redux";

import MemeCard from "./meme-card-component"

export default function Regular() {
    const regularMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) < 5));

    if (regularMemes.length) {
        return  <div>
                <h1>REGULAR</h1>
                <CardColumns>
                    {
                        regularMemes.map((m, i) => (<MemeCard key={i} meme={m} />))
                    }
                </CardColumns>
                </div>
    } else {
       return <div>
            <h1>REGULAR</h1>
            <h4>There are no REGULAR MEMES at this moment</h4>
        </div>
    }
}
