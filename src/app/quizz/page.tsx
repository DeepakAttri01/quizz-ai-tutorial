"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
    <main className="flex justify-center flex-1">
      <h1 className="text-3xl font-bold">Welcome to Quiz App👋</h1>
    </main>
    <footer className="footer=pb-9 px-5 relative mb-0">
      <Button>Start</Button>
    </footer>
    </div>
  )
}