import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import chatbotIcon from "../../../assets/boticon.svg"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

const ChatUI = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async (message: string) => {
    const response = await fetch("https://portfoliobackend-hub5cqg9d7c6bxat.canadacentral-01.azurewebsites.net/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();
    return data.response;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setMessages((prev) => [...prev, input]);
    setInput("");
    const response = await sendMessage(input);
    setMessages((prev) => [...prev, response]); 
}
  return (
    <>
      <Dialog>
        <DialogTrigger className="fixed  right-[9%] md:right-[4%] bottom-[2%] ">
          <Button className="h-16" variant="outline">
            <img src={chatbotIcon}></img>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-[300px] md:w-[400px] fixed left-[60%] md:fixed md:left-[85%]">
          <div className="flex flex-col gap-2">
            <DialogHeader>
              <DialogTitle className="py-4">Chat Bot</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md w-[60%] my-6 ${
                    index % 2 === 0
                      ? "bg-slate-300"
                      : "bg-slate-800 text-white self-end"
                  }`}
                >
                  {message}
                </div>
              ))}
            </div>

            <Textarea
              placeholder="Type your message here."
              onChange={handleChange}
              value={input}
            />
            <div className="flex items-center">
              <Button onClick={handleSubmit}>Send message</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatUI;
