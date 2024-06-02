import React from "react";
import Navbar from "../(home)/components/navbar";
import Guestbook from "../(home)/components/Guestbook";

export default function page() {
  return (
    <div className="flex flex-col gap-5 mx-auto p-5">
      <Navbar />
      <Guestbook />
    </div>
  );
}
