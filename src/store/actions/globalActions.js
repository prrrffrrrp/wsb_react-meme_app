import { VOTE_DIRECTION } from '../../ProjectEnums';

export const setVoteAction = (voteDirection, memeId) => {
    if (voteDirection === VOTE_DIRECTION.UP) {
        return {
            type: 'UPVOTE',
            id: memeId,
        }
    }
    return {
        type: 'DOWNVOTE',
        id: memeId,
    }
};

export const addMemeAction = (currentHigherId, {title, url}) => {
    return {
        type: 'ADD_MEME',
        id: Number(currentHigherId) + 1,
        payload: {
            id: Number(currentHigherId) + 1,
            title: title,
            upvotes: 0,
            downvotes: 0,
            img: url
        }
    }
}
