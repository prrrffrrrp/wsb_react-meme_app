import { useSelector } from 'react-redux';
import MemePage from './MemePageComponent';
import { MEME_TYPE } from '../ProjectEnums';

export default function MemeRouter({ route }) {
  const hotMemes = useSelector(
    (state) => state.memes
      .filter((m) => Number(m.upvotes - m.downvotes) >= 5),
  );
  const regularMemes = useSelector(
    (state) => state.memes
      .filter((m) => Number(m.upvotes - m.downvotes) < 5),
  );

  if (route === MEME_TYPE.HOT) {
    return <MemePage memes={hotMemes} route={route} />;
  }
  return <MemePage memes={regularMemes} route={route} />;
}
