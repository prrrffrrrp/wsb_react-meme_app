import { useState } from "react";

export default function MemeCard(props) {
    const [upvotes, setUpvotes] = useState(props.meme.upvotes);
    const [downvotes, setDownvotes] = useState(props.meme.downvotes);

    const clickUpvotes = () => {
        setUpvotes(upvotes + 1);
    }

    const clickDownvotes = () => {
        setDownvotes(downvotes + 1);
    }

    return  <section>   
                <h4>{props.meme.title}</h4>
                <img src={props.meme.img} alt="thug virus"/>
                <p>Votes {upvotes - downvotes}</p>
                <button onClick={clickUpvotes}  class="btn btn-primary"> + </button> 
                <button onClick={clickDownvotes} class="btn btn-secondary"> - </button>
            </section>
}
