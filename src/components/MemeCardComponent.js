import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { setVoteAction } from '../store/actions/globalActions';
import { VOTE_DIRECTION } from '../ProjectEnums';

export default function MemeCard({ meme }) {
  const dispatch = useDispatch();

  const handleVote = (voteDirection) => {
    dispatch(setVoteAction(voteDirection, meme.id));
  };

  return (
    <Card className="text-center meme-card bg-light" border="dark">
      <Card.Body>
        <Card.Title>{meme.title}</Card.Title>
        <Card.Img variant="top" src={meme.img} />
        <Card.Text>
          Upvotes:
          {meme.upvotes}
          {' '}
          Downvotes:
          {meme.downvotes}
        </Card.Text>
        <Button variant="secondary" onClick={() => handleVote(VOTE_DIRECTION.UP)}> + </Button>
        <Button variant="secondary" onClick={() => handleVote(VOTE_DIRECTION.DOWN)}> - </Button>
      </Card.Body>
    </Card>
  );
}
