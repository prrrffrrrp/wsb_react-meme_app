import { memeDb } from "./../memeDb"
import MemeCard from "./meme-card.component"

export default function Hot() {

    return  <div>
            <h1>HOT</h1>
            {memeDb
                    .filter(m => Number(m.upvotes - m.downvotes)>=5)
                    .map((m, i) => (
                <MemeCard key={i} meme={m}/>
            ))
            }
            </div>
}

