
    export default function ShowSuccessMessage(props) {
        if (props.showSuccess) {
            return <p>Your meme has been submited</p>
        } else {
            return <></>
        }
    }
