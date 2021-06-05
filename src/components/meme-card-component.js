import { useDispatch, useSelector } from "react-redux";

export default function MemeCard(props) {
    const memeId = props.meme.id;
    const dispatch = useDispatch();
    const upvotes = useSelector(state => state[memeId].upvotes)
    const downvotes = useSelector(state => state[memeId].downvotes)

    const handleVote = (voteDirection) => {
        const setVoteAction = {
            type: 'VOTE',
            id: memeId,
            payload: {}
        };
        if (voteDirection === 'up') {
            setVoteAction.payload = { upvotes: upvotes + 1 }
        } else if (voteDirection === 'down') {
            setVoteAction.payload = { downvotes: downvotes + 1 }
        }
        console.log('vote action: ', setVoteAction)

        dispatch(setVoteAction);
    }


    return  <section>   
                <h4>{props.meme.title}</h4>
                <img src={props.meme.img} alt="meme"/>
                <p>Votes {props.meme.upvotes - props.meme.downvotes}</p>
                <button onClick={() => handleVote('up')}  class="btn btn-primary"> + </button>
                <button onClick={() => handleVote('down')} class="btn btn-secondary"> - </button>
            </section>
}
