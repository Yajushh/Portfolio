import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { Suspense } from "react";
import { Form } from "./Form";
import prisma from "@/app/lib/db";
import { GuestBookFormLoading, LoadingMessages } from "@/components/ui/Loading";

async function getGuestBookEntry() {
  const data = await prisma.guestBookEntry.findMany({
    select: {
      user: {
        select: {
          firstName: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });
  return data;
}

export default function Guestbook() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Welcome to my Guestbook
      </p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <Suspense fallback={<LoadingMessages />}>
            <GuestbookForm />
          </Suspense>
          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={<GuestBookFormLoading />}>
              <GuestBookEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestbookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return <Form />;
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input
        type="text"
        placeholder="Your Message..."
        className="border border-muted-foreground"
      />
      <RegisterLink>
        <Button variant="outline">Sign for free</Button>
      </RegisterLink>
    </div>
  );
}

async function GuestBookEntries() {
  const data = await getGuestBookEntry();
  if (data.length === 0) {
    return null;
  }

  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
        <img
          src={item.user?.profileImage as string}
          alt="User Profile Picture"
          className="w-10 h-10 rounded-lg"
        />
        <p className="text-muted-foreground pl-3 break-words">
          {item.user?.firstName}:{" "}
          <span className="text-foreground">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}
