import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { setVoteAction } from '../store/actions/globalActions';
import {MEME_TYPE} from "../ProjectEnums";


export default function MemeCard(props) {
    const dispatch = useDispatch();

    const handleVote = (voteDirection) => {
        dispatch(setVoteAction(voteDirection, props.meme.id));
    }

    return  <Card className="text-center meme-card bg-light" border="dark">
                <Card.Body>
                    <Card.Title>{props.meme.title}</Card.Title>
                    <Card.Img variant="top" src={props.meme.img}/>
                    <Card.Text>Upvotes: {props.meme.upvotes}  Downvotes: {props.meme.downvotes}</Card.Text>
                    <Button variant="secondary" onClick={() => handleVote(MEME_TYPE.UP)}> + </Button>
                    <Button variant="secondary" onClick={() => handleVote(MEME_TYPE.DOWN)}> - </Button>
                </Card.Body>
            </Card>
}
