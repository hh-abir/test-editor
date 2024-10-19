"use client";
import Editor from "@/components/editor/advanced-editor";
import { ThemeToggle } from "@/components/theme-toggle";
import { JSONContent } from "novel";
import { useState } from "react";
import { defaultValue } from "./default-value";

export default function Home() {
  const [value, setValue] = useState<JSONContent>(defaultValue || null);
  const handleClick = () => {
    console.log(JSON.stringify(value));
  };
  return (
    <main className="flex min-h-screen w-100 flex-col items-center justify-between p-24">
      <div className="flex flex-col p-6 border relative max-w-screen-lg w-full gap-6 rounded-md bg-card">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">Novel Editor Testing Site</h1>
          <ThemeToggle />
        </div>
        <Editor editable={true} initialValue={value} onChange={setValue} />
      </div>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Send POST Request
      </button>
    </main>
  );
}
