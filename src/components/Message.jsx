import React from "react";

function Message({ sender, content }) {
  return (
    <section className='relativ bg-[#f2c4ce] max-w-sm h-fit rounded-md p-2'>
      <h2 className='text-[#2c2b30] leading-tight text-xl mt-0 mb-2 font-mulish'>
        Content of the message is never going to be to big
      </h2>
      <p className='text-[#2c2b30 text-xs]'>10:32</p>
    </section>
  );
}

export default Message;
