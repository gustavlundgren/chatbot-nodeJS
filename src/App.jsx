import { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { HiStatusOnline } from "react-icons/hi";
import Message from "./components/Message";
import "./index.css";

function App() {
  const msgRef = useRef();

  const [msg, setMsg] = useState("");
  const [validMsg, setValidMsg] = useState(false);

  const today = new Date();
  const day = today.toLocaleString();
  const hrs = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
  const mins =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

  const time = hrs + ":" + mins;

  useEffect(() => {
    msgRef.current.focus();
  }, []);

  useEffect(() => {
    msg.length > 0 ? setValidMsg(true) : setValidMsg(false);
  }, [msg]);

  const sendMessage = () => {
    if (validMsg) {
      alert(msg);
      setMsg("");
    }
  };

  return (
    <main className='overflow-hidden bg-[#2c2b30] w-screen h-screen flex items-center justify-center'>
      <section className='bg-[#4F4F51] w-9/12 h-screen grid place-items-center relative max-w-xl'>
        <h1 className='text-[#d6d6d6] font-medium leading-tight text-3xl mt-0 mb-2 font-mulish absolute top-2 left-4 flex gap-4'>
          Message Bot <HiStatusOnline className='text-[#00ff00]' />
        </h1>

        <Message />
        <Message />
        
      </section>
      <section className='absolute justify-center items-center bottom-20 w-11/12 h-10 flex '>
        <input
          className='bg-[#d6d6d6 rounded-l-md grow h-full max-w-xl'
          type='text'
          autoComplete='off'
          placeholder='Send your message'
          ref={msgRef}
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button
          onClick={() => sendMessage()}
          className='bg-[#f58f7c] text-[#d6d6d6] w-24 h-full flex justify-center items-center rounded-r-md text-xl'
        >
          <FiSend className='hover:scale-110' />
        </button>
      </section>
    </main>
  );
}

export default App;
