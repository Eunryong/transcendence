// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import './Chat.css';
// import User from './User';
// import Layout from './Layout/Layout';

// const socket = io('http://localhost:4000');

// const Chat: React.FC = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     socket.on('chat message', (message: string) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (inputValue.trim() !== '') {
//       socket.emit('chat message', inputValue);
//       setInputValue('');
//     }
//   };

//   return (
//     <>
//     <Layout/>
//     <User/>
//     <div className="message">
//       <ul className="history">
//         {messages.map((message, index) => (
//           <li key={index}>{message}</li>
//           ))}
//       </ul>
//       <form onSubmit={handleFormSubmit} className="chat">
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Chat;
