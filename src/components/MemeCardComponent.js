import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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

        dispatch(setVoteAction);
    }

    return  <Card className="text-center meme-card bg-light" border="dark">
                <Card.Body>
                    <Card.Title>{props.meme.title}</Card.Title>
                    <Card.Img variant="top" src={props.meme.img}/>
                    <Card.Text>Upvotes: {props.meme.upvotes}  Downvotes: {props.meme.downvotes}</Card.Text>
                    <Button variant="secondary" onClick={() => handleVote('up')}> + </Button>
                    <Button variant="secondary" onClick={() => handleVote('down')}> - </Button>
                </Card.Body>
            </Card>
}
