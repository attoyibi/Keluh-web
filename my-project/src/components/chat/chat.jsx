/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const chats = [
  {
    id: 1,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 2,
    avatar: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=1380&t=st=1719190583~exp=1719191183~hmac=7819e8c7185b15718b2af21b949eb1e15bf056546b3ecc1498b0bac3902fb435", // Replace with the actual path to the avatar image
  },
  {
    id: 2,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 1,
    avatar: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=1380&t=st=1719190583~exp=1719191183~hmac=7819e8c7185b15718b2af21b949eb1e15bf056546b3ecc1498b0bac3902fb435", // Replace with the actual path to the avatar image
  },
  {
    id: 3,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 4,
    avatar: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=1380&t=st=1719190583~exp=1719191183~hmac=7819e8c7185b15718b2af21b949eb1e15bf056546b3ecc1498b0bac3902fb435", // Replace with the actual path to the avatar image
  },
  {
    id: 4,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 2,
    avatar: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=1380&t=st=1719190583~exp=1719191183~hmac=7819e8c7185b15718b2af21b949eb1e15bf056546b3ecc1498b0bac3902fb435", // Replace with the actual path to the avatar image
  },
  {
    id: 5,
    name: "Maulana Abraham",
    message: "Hai, ada yang bisa dibantu?",
    time: "32 min",
    unreadCount: 1,
    avatar: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=1380&t=st=1719190583~exp=1719191183~hmac=7819e8c7185b15718b2af21b949eb1e15bf056546b3ecc1498b0bac3902fb435", // Replace with the actual path to the avatar image
  },
  // Add more chat objects here as needed
];

const ChatItem = ({ chat }) => {
  return (
    <Link to={"/chat-user/:id"}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={chat.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="font-bold">{chat.name}</div>
            <div className="text-gray-600">{chat.message}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-gray-600">{chat.time}</div>
          {chat.unreadCount > 0 && (
            <div className="flex justify-center items-center bg-red-500 text-white rounded-full w-6 h-6 mt-1">
              {chat.unreadCount}
            </div>
          )}
        </div>
      </div>
    </Link>

  );
};

const Chat = () => {
  return (
    <div className="w-full bg-main-lighter rounded-lg shadow-lg overflow-hidden ">
      <div className="bg-main-color text-white text-3xl font-bold p-2.5">Chat</div>
      <div>
        {chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
