
export default function MemeCard(props) {

    return  <section>   
                 <h4>{props.meme.title}</h4>
                 <img src={props.meme.img} alt="thug virus"/>
                 <p>Votes {Number(props.meme.upvotes - props.meme.downvotes)}</p>
             </section>   
}

