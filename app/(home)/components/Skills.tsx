"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCloudflare,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Node",
      Icon: SiNodedotjs,
    },
    {
      text: "Cloudflare",
      Icon: SiCloudflare,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        title="Skills"
        className="flex flex-col items-center justify-center -rotate-2"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
