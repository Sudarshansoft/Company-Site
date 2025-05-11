"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosSend} from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";


export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! How can I assist you today?" },
    ]);
    const [loading, setLoading] = useState(false); // New state for loading

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);

        setInput("");
        setLoading(true); // Set loading to true when user sends a message

        // Simulate a delay for bot response
        setTimeout(() => {
            const botMessage = { from: "bot", text: "This is a demo response 🤖" };
            setMessages((prev) => [...prev, botMessage]);
            setLoading(false); // Set loading to false after the response
        }, 1500); // Simulating a 1.5s delay for the AI response
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="fixed bottom-25 right-8 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-300">
                    <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
                        <span className="font-medium">AI Chat</span>
                        <button onClick={() => setIsOpen(false)} className="text-white text-sm">
                            ✖
                        </button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 px-3 py-2 rounded-lg text-sm max-w-[70%] ${msg.from === "user"
                                        ? "bg-blue-500 text-white ml-auto"
                                        : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex items-center justify-center mb-2 px-3 py-2 rounded-lg text-sm max-w-[70%] bg-gray-200 text-gray-800">
                                {/* Loading Spinner */}
                                <div className="w-5 h-5 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-2 border-t flex gap-2 items-center">
                        <input
                            type="text"
                            className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                            aria-label="Send"
                        >
                            <IoIosSend className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button with IoChatbubbleEllipses Icon */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-xl hover:bg-blue-700"
                    aria-label="Open chat"
                >
                    <IoChatbubbleEllipses className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
