import { useSelector } from 'react-redux';
import MemePage from './MemePageComponent';
import { MEME_TYPE } from '../ProjectEnums';

export default function MemeRouter({ route }) {
  const allMemes = useSelector((state) => state.memes);

  const hotMemes = allMemes.filter((m) => Number(m.upvotes - m.downvotes) >= 5);

  const regularMemes = allMemes.filter((m) => Number(m.upvotes - m.downvotes) < 5);

  switch (route) {
    case MEME_TYPE.HOT:
      return <MemePage memes={hotMemes} route={route} />;
    case MEME_TYPE.REGULAR:
      return <MemePage memes={regularMemes} route={route} />;
    default:
      return <MemePage memes={allMemes} route={route} />;
  }
}
