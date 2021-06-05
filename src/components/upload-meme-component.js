import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import ShowSuccessMessage from "./show-success-component"

export default function UploadMeme() {
    const dispatch = useDispatch();
    const currentHigherId = useSelector(state => Object.keys(state).reduce((a, b) => state[a] > state[b] ? a : b));

    const initialFormData = { title: '', url: '' };
    const [formData, setFormData] = useState(initialFormData)
    const [showSuccess, setShowSucces] = useState(false)

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const resetUploadMemePage = () => {
        setFormData({ ...initialFormData });
        setShowSucces(true);
        setTimeout(() => setShowSucces(false), 2000);
    }

    const handleAddMeme = (e) => {
        e.preventDefault()
        const addMemeAction = {
            type: 'ADD_MEME',
            id: Number(currentHigherId) + 1,
            payload: {
                id: Number(currentHigherId) + 1,
                title: formData.title,
                upvotes: 0,
                downvotes: 0,
                img: formData.url
            }
        }
        
        dispatch(addMemeAction);
        resetUploadMemePage();
    }

    return <div>
        <h1>Upload your own memes</h1>
        <Form onSubmit={handleAddMeme}>
            <Form.Group controlId="formTitle">
                <Form.Label>title:</Form.Label>
                <Form.Control 
                    type="text" 
                    name="title" 
                    placeholder='type a title' 
                    required value={formData.title} 
                    onChange={handleFormData}/>
            </Form.Group>
            <Form.Group controlId="formUrl">
                <Form.Label>image url:</Form.Label>
                <Form.Control 
                    type="url" 
                    name="url" 
                    placeholder='type an url' 
                    required accept='image/*' 
                    value={formData.url} 
                    onChange={handleFormData}/>
            </Form.Group>
            <Button type="submit" variant="light">Submit</Button>
        </Form>
        <ShowSuccessMessage showSuccess={showSuccess}/>
        
    </div>
}
