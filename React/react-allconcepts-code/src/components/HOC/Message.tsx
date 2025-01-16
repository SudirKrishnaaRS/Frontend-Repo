import WithLoggerHoc from "./WithLoggerHOC";

type MessagePropType = {
  msgString: string;
};

const Message: React.FC<MessagePropType> = ({ msgString }) => {
  return <div>{msgString}</div>;
};

export const MessageWithLogger = WithLoggerHoc(Message);
