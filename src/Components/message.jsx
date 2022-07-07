import "./message.css";

const Message = (props) => {
  return (
    <div id={props.id} className="messageContainer">
      <p>{props.children}</p>
      <span className="messageContainer__span">{props.username}</span>
    </div>
  );
};

export default Message;
