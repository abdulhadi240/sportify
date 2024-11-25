"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const Form_page = ({userProfile}) => {
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const [user1, setUser1] = useState(null); // Initialize as null to handle both success and failure states

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userProfile.find(
      (user) => user.email === state && user.password === state1
    );
    if (user) {
      setUser1(true);
      router.push("/booking");
    } else {
      setUser1(false);
    }
  };

  return (
    <div className="flex  flex-col p-4 max-w-xl justify-center bg-white border-[1px] border-primary1 rounded-lg">
      <h1 className="text-3xl text-center mb-10 flex justify-center font-bold text-primary1">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col px-3 gap-1">
        <h1 className="text-sm">Email</h1>
        <input type="email" value={state} onChange={(e)=>{setState(e.target.value)}} placeholder="Enter your email" required className="bg-primary1 h-10 rounded-full flex justify-center items-center pl-2  text-white placeholder:text-white text-sm" />

        </div>

        <div className="flex flex-col px-3 gap-1">
        <h1 className="text-sm">Password</h1>
        <input type="password" value={state1} onChange={(e)=>{setState1(e.target.value)}} placeholder="Password" required className="bg-primary1 h-10 rounded-full flex justify-center items-center pl-2  text-white placeholder:text-white text-sm" />

        </div>
        <button type="submit" className="w-24 mt-3 flex justify-center mx-4 h-auto py-1 text-xs text-primary1 hover:text-white transition-all border-[1px] border-primary1 rounded-full bg-white hover:bg-primary1/80">Book Now</button>
        </form>
    </div>
  );
};

export default Form_page;
