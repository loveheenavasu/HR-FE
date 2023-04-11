import React, { useState } from "react";
import SidebarWithHeader from "@/components/Layout";
import Image from "next/image";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import LeaveCard from "@/components/leaveCard";
import { FiSend } from "react-icons/fi";

const Home: NextPageWithLayout = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInput(" ");
  };
  return (
    <div className="homeDashboard">
      <h1>General Dashboard</h1>
      <div className="leave-allCard">
        <LeaveCard heading="Upcoming Holiday" />
        <LeaveCard heading="Celebration" />
        <LeaveCard heading=" Company Links" />
        <LeaveCard heading=" New Hires" />
      </div>
      <div className="happinessBox">
        <h3>Happiness</h3>
        <div className="hpinesboxInner">
          <div className="feelingSide">
            <p>How are you feeling recently ? Tell us!</p>
            <Image
              alt="thumb-img"
              width="200"
              height="200"
              src="/images/thumbs.png"
            />
          </div>
          <div className="inputSide">
            <div className="inputText">
              <Image
                src="/images/inputImg.png"
                alt="inputImg"
                width="100"
                height={100}
              />
              <p>Hmm... What are you thinking ?</p>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Enter Your Thought "
                value={input}
              />
              <button type="submit">
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <SidebarWithHeader>{page}</SidebarWithHeader>;
};

export default Home;
