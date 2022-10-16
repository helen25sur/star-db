import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="alert alert-dismissible alert-info error-message">
      <h4 className="alert-heading">BOOM!</h4>
      <p className="mb-0">Something has gone terrible wrong <br />
        (but we already sent droids to fix it!)</p>
    </div>
  )
}

export default ErrorIndicator;