import React, { useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
import { UserContext } from "../context/UserContext";
import ScrollToBottom from "react-scroll-to-bottom";

import "../style/Complain.css";
import Navbar from "../components/navbar/Navbar";

import User from "../assets/default-photo.png";
import Send from "../assets/send.png";

let socket;

function ComplainAdmin() {
  const [state] = useContext(UserContext);
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [online, setOnline] = useState(false);
  const [form, setForm] = useState({
    chat: "",
  });

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    socket.on("new message", () => {
      socket.emit("load messages", contact?.id);
    });

    loadContact();
    loadMessages();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    if (!messages[messages.length - 1]?.message) {
      setOnline(false);
    } else if (messages[messages.length - 1]?.idSender == contact?.id) {
      setOnline(true);
    }

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loadContact = () => {
    socket.emit("load customer contact");

    socket.on("customer contact", (data) => {
      let dataContacts = data.map((item) => ({
        ...item,
        message: "Click here to start message",
      }));
      setContacts(dataContacts);
    });
  };

  const onClickContact = (data) => {
    console.log(data);
    setContact(data);
    socket.emit("load messages", data.id);
  };

  const loadMessages = () => {
    socket.on("messages", (data) => {
      console.log(data);
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
          idRecipient: item.recipient.id,
        }));
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
        form.chat = "";
      }
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
  console.log(contact?.name);
  return (
    <div className="contCompAdmin">
      <Navbar />
      <h1>Customer Complain</h1>
      <div className="container ContAdmin">
        <div className="compLeft">
          {contacts?.map((item, index) => (
            <div
              className="card-user"
              onClick={() => onClickContact(item)}
              key={index}
            >
              <img src={item?.profile.avatar} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="compRight">
          <div className="headerAdmin">
            <img src={contact?.profile.avatar} alt="" />
            <div className="status-head">
              <p className="nama">{contact?.name}</p>
              <div className="status-warp">
                <div className={online ? "dot-online" : "dot-offline"}></div>
                <p className="status-online">{online ? "online" : "offline"}</p>
              </div>
            </div>
          </div>
          <div className="chat-warp">
            <ScrollToBottom className="scrollToBottom">
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
                        item.idSender === state.user.id
                          ? "chat-me"
                          : "chat-other"
                      }
                    >
                      <div className="textt">{item.message}</div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollToBottom>
          </div>
          <div className="chat-input-warp">
            <input
              type="text"
              className="send-message"
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

export default ComplainAdmin;
