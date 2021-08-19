import React from 'react';

export interface NotificationProps {
  content: string | JSX.Element;
  type?: 'warning' | 'error' | 'success';
};
const Notification: React.FC<NotificationProps> = ({ content, type }) => {
  return (
    <div role='alert' aria-live='assertive' className={`Notification Notification-${type}`}>
      {content}
    </div>
  );
};
export default Notification;