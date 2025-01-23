import React from "react";
import logosmall from "../Assets/logosmall.png";
import servicerobot from "../Assets/servicerobot.png";

const ChatBot = () => {
  const botStyles = {
    "--df-messenger-bot-message": "#FFFFFF",
    "--df-messenger-button-titlebar-color": "#FFE31A",
    "--df-messenger-button-titlebar-font-color": "#155528",
    "--df-messenger-chat-background-color": "#155528",
    "--df-messenger-font-color": "#155528",
    "--df-messenger-input-box-color": "#FFE31A",
    "--df-messenger-input-font-color": "#155528",
    "--df-messenger-input-placeholder-font-color": "#948979",
    "--df-messenger-minimized-chat-close-icon-color": "#F5EFE6",
    "--df-messenger-send-icon": "#155528",
    "--df-messenger-user-message": "#FFE31A",
    "--df-messenger-user-message-font-color": "#155528",
    "--df-messenger-chat-bubble-icon-size": "400px",
  };

  return (
    <div style={botStyles}>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="farmnetwebsite"
        agent-id="f27996a3-1a83-4bf6-909c-9fa708fc145b"
        language-code="en"
        chat-icon={servicerobot}
        chat-bubble-icon-colorchat-background="#FFBF65"
      ></df-messenger>
    </div>
  );
};

export default ChatBot;
