import { v4 as uuidv4 } from 'uuid';

export const memeDb = [
  {
    id: uuidv4(),
    title: 'meme 1',
    upvotes: 1,
    downvotes: 0,
    img: 'meme1.png',
    starred: false,
  },
  {
    id: uuidv4(),
    title: 'meme 2',
    upvotes: 6,
    downvotes: 0,
    img: 'meme2.jpeg',
    starred: false,
  },
  {
    id: uuidv4(),
    title: 'meme 3',
    upvotes: 1,
    downvotes: 6,
    img: 'meme3.jpg',
    starred: false,
  },
  {
    id: uuidv4(),
    title: 'meme 4',
    upvotes: 10,
    downvotes: 3,
    img: 'meme4.jpg',
    starred: false,
  },
  {
    id: uuidv4(),
    title: 'Space Cat',
    upvotes: 0,
    downvotes: 0,
    img: 'https://i.imgur.com/IZvHqDW.jpeg',
    starred: false,
  },
  {
    id: uuidv4(),
    title: 'Landscape',
    upvotes: 0,
    downvotes: 0,
    img: 'https://www.w3schools.com/css/img_5terre_wide.jpg',
    starred: false,
  },

];
