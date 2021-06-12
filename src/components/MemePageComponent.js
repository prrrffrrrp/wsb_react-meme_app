import MemeCard from './MemeCardComponent';

export default function MemePage({ memes, route }) {
  if (memes.length) {
    return (
      <div className="container">
        {
          memes.map((m) => (<MemeCard meme={m} key={m.id} />))
        }
      </div>
    );
  }
  return (
    <div>
      <h4>
        There is no
        {' '}
        <strong>{route}</strong>
        {' '}
        memes at this moment
      </h4>
    </div>
  );
}
