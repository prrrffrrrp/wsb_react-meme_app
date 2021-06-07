import Alert from 'react-bootstrap/Alert'


    export default function ShowSuccessMessage(props) {
        if (props.showSuccess) {
            return <Alert variant='info'>
                    Your meme has been submited!
                </Alert>
        } else {
            return <></>
        }
    }
