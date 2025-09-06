import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import chatbotIcon from "../../../assets/boticon.svg";
import { OctagonAlert } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const ChatUI = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (message: string) => {
    const response = await fetch(
      "https://portfoliobackend-hub5cqg9d7c6bxat.canadacentral-01.azurewebsites.net/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      }
    );
    const data = await response.json();
    return data.response;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setError(null);

    if (input.trim() === "" || isLoading) return;

    const userMessage: Message = {
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      setIsLoading(true);
      const response = await sendMessage(input);
      const botMessage: Message = {
        text: response,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="fixed  right-[9%] md:right-[4%] bottom-[2%] ">
          <Button className="h-16" variant="outline">
            <img src={chatbotIcon}></img>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-[300px] md:w-[400px] fixed left-[60%] md:fixed md:left-[85%] h-[70%">
          <div className="flex flex-col gap-2">
            <DialogHeader>
              <DialogTitle className="py-1">Chat Bot</DialogTitle>
            </DialogHeader>
            <div
              ref={chatContainerRef}
              className="flex flex-col overflow-y-auto h-[190px]"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md w-[60%] my-6 ${
                    message.sender === "user"
                      ? "bg-slate-300"
                      : "bg-slate-800 text-white self-end"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            {isLoading && (
              <div className="text-center">
                <p className="text-slate-800 text-3xl">...</p>
              </div>
            )}
            <Textarea
              placeholder="Type your message here."
              onChange={handleChange}
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            <div className="flex items-center">
              <Button className="mt-2" onClick={handleSubmit}>
                Send message
              </Button>
            </div>
          </div>
          {error && (
            <p className=" text-red-500 text-sm">
              {error} <OctagonAlert className="inline h-4 w-4" />
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatUI;
