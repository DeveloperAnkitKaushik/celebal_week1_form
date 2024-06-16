import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <div className="success">
        <h2>Registration Successful!</h2>
        <p>Thank you for signing up. Here are your details:</p>
        <div className="details">
          <p><strong>First Name:</strong> {formData?.firstName}</p>
          <p><strong>Last Name:</strong> {formData?.lastName}</p>
          <p><strong>Username:</strong> {formData?.username}</p>
          <p><strong>Email:</strong> {formData?.email}</p>
          <p><strong>Phone No:</strong> {formData?.phoneNo}</p>
          <p><strong>Country:</strong> {formData?.country}</p>
          <p><strong>City:</strong> {formData?.city}</p>
          <p><strong>Pan No:</strong> {formData?.panNo}</p>
          <p><strong>Aadhar No:</strong> {formData?.aadharNo}</p>
        </div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default Success;