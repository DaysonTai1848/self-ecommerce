import React from "react";
import { SiAlibabadotcom } from "react-icons/si";

const HomeHeader = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="px-6 py-3 flex justify-between">
        <div>
          <SiAlibabadotcom size={50} />
        </div>
        <div className="flex flex-row space-x-6">
          <div>Deliver to</div>
          <div>English-USD</div>
          <div>Messages</div>
          <div>Orders</div>
          <div>Cart</div>
          <div>SignIn</div>
        </div>
      </div>
      <div>second row</div>
      <div>third row</div>
    </div>
  );
};

export default HomeHeader;
