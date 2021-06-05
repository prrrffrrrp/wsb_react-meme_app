
    export default function ShowSuccessMessage(props) {
        console.log('show success page', props.showSuccess)
        
        if (props.showSuccess) {
            return <p>Your meme has been submited</p>
        } else {
            return <></>
        }
    }
