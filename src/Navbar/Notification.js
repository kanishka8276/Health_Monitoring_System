import React, { useState } from 'react';
import './Notification.css';

function Notification() {
  const [notifi] = useState(null);
  if (!notifi) {
    return (
      <div className="notification-container">
        <p>Notification</p>
        <div className="notifi-msg">
          <p>No notification yet!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="notification-container">
      <p>Notification</p>
      {notifi}
    </div>
  );
}
export default Notification;
