import MemeCard from "./meme-card-component"

export default function Hot(props) {
    const hotMemes = props.memes.filter(m => Number(m.upvotes - m.downvotes)>=5)

    if (hotMemes.length) {
    return  <div>
            <h1>HOT</h1>
            {
                hotMemes.map((m, i) => (<MemeCard key={i} meme={m} voteOnMeme={props.voteOnMeme}/>))
            }
            </div>
    } else {
    return <div>
                <h1>HOT</h1>
                <h4>There is no HOT MEMES at this moment</h4>
            </div>
    }
}
