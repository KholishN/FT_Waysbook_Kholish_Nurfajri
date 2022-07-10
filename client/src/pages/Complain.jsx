import { useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
import { UserContext } from "../context/UserContext";

import "../style/Complain.css";
import Navbar from "../components/navbar/Navbar";

import User from "../assets/default-photo.png";
import Send from "../assets/send.png";

let socket;

function Complain() {
  const [contact, setContact] = useState({});
  const [messages, setMessages] = useState([]);
  const [timer, setTimer] = useState({});
  const [online, setOnline] = useState(false);
  const [form, setForm] = useState({
    chat: "",
  });
  // console.log("initime", messages);

  const [state] = useContext(UserContext);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      // code here
    });

    socket.on("new message", () => {
      socket.emit("load messages", contact?.id);
    });

    // listen error sent from server
    socket.on("connect_error", (err) => {
      console.error(err.message); // not authorized
    });
    loadMessages();
    loadContact();

    if (!messages[messages.length - 1]?.message) {
      setOnline(false);
    } else if (messages[messages.length - 1]?.idSender == contact?.id) {
      setOnline(true);
    }

    return () => {
      socket.disconnect();
    };
  }, [form, messages]); // code here

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // used for active style when click contact
  const loadContact = () => {
    socket.emit("load admin contact");

    socket.on("admin contact", (data) => {
      setContact(data);
    });

    socket.emit("load messages", contact.id);
  };

  const loadMessages = () => {
    socket.on("messages", (data) => {
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        console.log("variable data", data);

        console.log(dataMessages);
        setMessages(dataMessages);
      } else {
        setMessages([]);
      }
    });
  };

  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };

      if (data.message) {
        socket.emit("send message", data);
        setTimer(data);
        form.chat = "";
      }
      console.log(data.message);
    }
  };

  const handleSubmit = () => {
    const data = {
      idRecipient: contact.id,
      message: form.chat,
    };

    if (data.message) {
      socket.emit("send message", data);
      form.chat = "";
    }
  };

  const handleOffline = () => {
    const data = {
      idSender: null,
      idRecipient: null,
      message: null,
    };

    socket.emit("send message offline", data);

    setOnline(false);
  };

  return (
    <div className="contCompAdmin">
      <Navbar />
      <div className="container">
        <div className="compRightCustomer">
          <div className="headerAdmin">
            <img src={User} alt="" />
            <div className="status-head">
              <p className="nama">{contact.name}</p>
              <div className="status-warp">
                <div className={online ? "dot-online" : "dot-offline"}></div>
                <p className="status-online">{online ? "Online" : "Offline"}</p>
              </div>
            </div>
          </div>
          <div className="chat-warp">
            {messages.map((item, index) => (
              <div key={index}>
                <div
                  className={`d-flex py-1 ${
                    item.idSender === state.user.id
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={
                      item.idSender === state.user.id ? "chat-me" : "chat-other"
                    }
                  >
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-warp">
            <input
              type="text"
              className="send-message-customer"
              name="chat"
              value={form.chat}
              onClick={loadContact}
              onChange={handleChange}
              onKeyPress={onSendMessage}
            />
            <button onClick={handleSubmit} type="submit">
              <img src={Send} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complain;
