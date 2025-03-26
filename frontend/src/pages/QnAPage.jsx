import React, { useState } from "react";
import "./QnAPage.css";

const questions = [
  {
    id: 1,
    question: "What is this site about?",
    answer: "This is a music and game learning site with interactive tools.",
  },
  {
    id: 2,
    question: "Is it mobile-friendly?",
    answer: "Yes! It works beautifully on phones, tablets, and desktops.",
  },
  {
    id: 3,
    question: "Do I need to pay?",
    answer: "Nope — it’s completely free to use. Enjoy without limits!",
  },
];

export default function QnAPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="qna-page">
      <h2 className="qna-title">❓ Frequently Asked Questions</h2>
      <div className="qna-list">
        {questions.map(({ id, question, answer }) => (
          <div
            className={`qna-item ${openId === id ? "open" : ""}`}
            key={id}
            onClick={() => toggle(id)}
          >
            <div className="qna-question">{question}</div>
            {openId === id && <div className="qna-answer">{answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
