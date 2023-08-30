import Image from "next/image";
import { Header } from "@/components/Header";

export default function ChatPage() {
  return (
    <main className="w-full m-20 min-h-full max-h-full p-5 bg-black">
      <div className="">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full relative ring-1 ring-white p-0.5">
              <Image alt="pfp" fill src="/logo.svg" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50 ml-2">12:45</time>
          </div>
          <div className="chat-bubble bg-white/10">
            You were the Chosen One!
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full relative ring-1 ring-white p-0.5">
              <Image alt="pfp" fill src="/logo.svg" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50 ml-2">12:46</time>
          </div>
          <div className="chat-bubble bg-white/10">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    </main>
  );
}
