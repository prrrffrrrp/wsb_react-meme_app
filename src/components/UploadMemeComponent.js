import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import ShowSuccessMessage from "./ShowSuccessComponent";
import { addMemeAction } from "../store/actions/globalActions";


export default function UploadMeme() {
    const dispatch = useDispatch();

    const currentHigherId = useSelector(state => state.memes.reduce((a, b) => state[a] > state[b] ? a : b)).id;
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
        setTimeout(() => setShowSucces(false), 3000);
    }

    const handleAddMeme = (e) => {
        e.preventDefault()
        dispatch(addMemeAction(currentHigherId, formData));
        resetUploadMemePage();
    }

    return <div>
        <h1>upload your own memes</h1>
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
            <Button type="submit" variant="light">submit</Button>
            <ShowSuccessMessage showSuccess={showSuccess}/>
        </Form>
        
    </div>
}
