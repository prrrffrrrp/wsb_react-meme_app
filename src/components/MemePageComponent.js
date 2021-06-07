import CardColumns from 'react-bootstrap/CardColumns';
import MemeCard from "./MemeCardComponent";


export default function MemePage({memes, route}) {
    if (memes.length) {
        return  <div>
                <h1>{route}</h1>
                    <CardColumns>
                        {
                            memes.map((m, i) => (<MemeCard key={i} meme={m} />))
                        }
                    </CardColumns>
                </div>
    } else {
        return <div>
                <h1>{route}</h1>
                    <h4>There is no {route} memes at this moment</h4>
                </div>
        }
}
