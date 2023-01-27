import { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { HiStatusOnline } from "react-icons/hi";
import "./index.css";

function App() {
  const msgRef = useRef();

  const [msg, setMsg] = useState("");
  const [validMsg, setValidMsg] = useState(false);

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
      </section>

      <section></section>

      <section className='absolute left-2/4 bottom-20 w-11/12 h-8 flex '>
        <input
          className='bg-[#d6d6d6 rounded-l-md w-10/12 h-full max-w-xl'
          type='text'
          autoComplete='off'
          placeholder='Send your message'
          ref={msgRef}
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button
          onClick={() => sendMessage()}
          className='bg-[#f58f7c] text-[#d6d6d6] w-2/12 h-full flex justify-center items-center rounded-r-md text-xl'
        >
          <FiSend />
        </button>
      </section>
    </main>
  );
}

export default App;
