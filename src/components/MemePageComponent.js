import CardColumns from 'react-bootstrap/CardColumns';
import MemeCard from './MemeCardComponent';

export default function MemePage({ memes, route }) {
  if (memes.length) {
    return (
      <div>
        <h1>{route}</h1>
        <CardColumns>
          {
            memes.map((m) => (<MemeCard meme={m} key={m.id} />))
          }
        </CardColumns>
      </div>
    );
  }
  return (
    <div>
      <h1>{route}</h1>
      <h4>
        There is no
        {route}
        {' '}
        memes at this moment
      </h4>
    </div>
  );
}
