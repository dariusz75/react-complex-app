import React from "react";

const FlashMessages = (props: any) => {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg: any, index: any) => {
        return (
          <div
            className="alert alert-success text-center floating-alert shadow-sm"
            key={index}
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
};

export default FlashMessages;
