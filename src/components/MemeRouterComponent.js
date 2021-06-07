import { useSelector } from "react-redux";
import MemePage from "./MemePageComponent";


export default function MemeRouter({route}) {
    const hotMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) >= 5));
    const regularMemes = useSelector(state => Object.values(state).filter(m => Number(m.upvotes - m.downvotes) < 5));

    if (route === 'hot') {
        return <MemePage memes={hotMemes} route={route}/>
    } else {
        return <MemePage memes={regularMemes} route={route}/>
    }
};
