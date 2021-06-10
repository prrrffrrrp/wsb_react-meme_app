import Alert from 'react-bootstrap/Alert';

export default function AlertMessage({ showMessage, messageContent }) {
  if (showMessage) {
    return (
      <Alert variant="info">
        {messageContent}
      </Alert>
    );
  }
  return <></>;
}
