import { v4 as uuidv4 } from 'uuid';

import { VOTE_DIRECTION } from '../../ProjectEnums';

export const setVoteAction = (voteDirection, memeId) => {
  if (voteDirection === VOTE_DIRECTION.UP) {
    return {
      type: 'UPVOTE',
      id: memeId,
    };
  }
  return {
    type: 'DOWNVOTE',
    id: memeId,
  };
};

export const addMemeAction = ({ title, url }) => ({
  type: 'ADD_MEME',
  id: uuidv4(),
  payload: {
    id: uuidv4(),
    title,
    upvotes: 0,
    downvotes: 0,
    img: url,
  },
});
