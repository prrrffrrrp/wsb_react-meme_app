import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setVoteAction, setStarredAction } from '../store/actions/globalActions';
import { VOTE_DIRECTION } from '../ProjectEnums';

library.add(faThumbsUp, faThumbsDown, fasStar, farStar);

export default function MemeCard({ meme }) {
  const dispatch = useDispatch();

  const handleVote = (voteDirection) => {
    dispatch(setVoteAction(voteDirection, meme.id));
  };

  const handleStarred = () => {
    dispatch(setStarredAction(meme.id));
  };

  return (
    <Card className="text-center meme-card bg-light" border="dark">
      <Card.Body>
        <div className="container-header">
          <Card.Title>{meme.title}</Card.Title>
          <FontAwesomeIcon onClick={handleStarred} icon={meme.starred ? fasStar : farStar} />
        </div>
        <Card.Img variant="top" src={meme.img} />

        <Button variant="info" onClick={() => handleVote(VOTE_DIRECTION.UP)}>
          <FontAwesomeIcon icon={['far', 'thumbs-up']} size="lg" />
          <p className="btn-text">{meme.upvotes}</p>
        </Button>
        <Button variant="info" onClick={() => handleVote(VOTE_DIRECTION.DOWN)}>
          <FontAwesomeIcon icon={faThumbsDown} size="lg" />
          <p className="btn-text">{meme.downvotes}</p>
        </Button>

      </Card.Body>
    </Card>
  );
}
