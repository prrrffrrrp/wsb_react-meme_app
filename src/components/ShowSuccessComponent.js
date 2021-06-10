import Alert from 'react-bootstrap/Alert';

export default function ShowSuccessMessage({ showSuccess }) {
  if (showSuccess) {
    return (
      <Alert variant="info">
        Your meme has been submited!
      </Alert>
    );
  }
  return <></>;
}
