import MemeCard from "./meme-card-component"
import { useSelector } from "react-redux";

export default function Regular() {
    const regularMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) < 5));

    if (regularMemes.length) {
        return  <div>
                <h1>REGULAR</h1>
                {
                    regularMemes.map((m, i) => (<MemeCard key={i} meme={m} />))
                }
                </div>
    } else {
       return <div>
            <h1>REGULAR</h1>
            <h4>There are no REGULAR MEMES at this moment</h4>
        </div>
    }
}
