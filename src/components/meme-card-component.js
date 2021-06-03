import { useState } from "react";

export default function MemeCard(props) {

    const handleVote = (vote) => {
        props.voteOnMeme(props.meme.id, vote)
    }

    return  <section>   
                <h4>{props.meme.title}</h4>
                <img src={props.meme.img} alt="thug virus"/>
                <p>Votes {props.meme.upvotes - props.meme.downvotes}</p>
                <button onClick={() => handleVote('up')}  class="btn btn-primary"> + </button>
                <button onClick={() => handleVote('down')} class="btn btn-secondary"> - </button>
            </section>
}
