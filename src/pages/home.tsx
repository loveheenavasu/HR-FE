import React, { useState } from "react";
import SidebarWithHeader from "@/components/Layout";
import Image from "next/image";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import LeaveCard from "@/components/leaveCard";
import { FiSend } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import UpcomingHoliday from "@/components/upcomingHoliday";
import CelebrationEvent from "@/components/CelebrationEvent";
import CompanyLinks from "@/components/CompanyLinks";
import NewHires from "@/components/NewHires";

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
      <LeaveCard heading="Upcoming Holiday" text="No Upcoming Leaves">
    <UpcomingHoliday heading="Upcoming Public Holiday" holidayName="Good Friday" date="07 April 2023" />
  </LeaveCard>
  <LeaveCard heading="Celebration" >
    <CelebrationEvent icon={<RxAvatar/>} name="Tee Kai Xuan" date="08 Apr, Sat" event="Happy Work Anniversary!"/>
  </LeaveCard>
        <LeaveCard heading=" Company Links">
          <CompanyLinks/>
        </LeaveCard>
        <LeaveCard heading=" New Hires">
          <NewHires/>
          </LeaveCard>
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
