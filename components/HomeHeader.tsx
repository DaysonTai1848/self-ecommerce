import React from "react";
import { SiAlibabadotcom } from "react-icons/si";
import Link from "next/link";
import { Bold } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="w-screen flex flex-col bg-black">
      <div className="px-10 py-2 flex justify-between">
        <div>
          <Link href="/">
            <div className="flex flex-row justify-center items-center space-x-1">
              <SiAlibabadotcom size={55} color="white" />
              <span className="text-white text-2xl">
                <span className="font-bold">Alibaba</span>.com
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-row space-x-6 justify-center items-center">
          <div className="flex flex-col text-white text-xs">
            <span>Deliver to:</span>
            <div className="flex flex-row space-x-1">
              <Image
                src="/thailand-flag-icon.svg"
                width={21}
                height={21}
                alt="Flag of thailand svg"
              />
              <span className="font-bold text-sm">TH</span>
            </div>
          </div>
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
