import MemeCard from "./meme-card-component"
import { useSelector } from "react-redux";

export default function Hot() {
    const hotMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) >= 5));

    if (hotMemes.length) {
    return  <div>
            <h1>HOT</h1>
            {
                hotMemes.map((m, i) => (<MemeCard key={i} meme={m} />))
            }
            </div>
    } else {
    return <div>
                <h1>HOT</h1>
                <h4>There is no HOT MEMES at this moment</h4>
            </div>
    }
}
