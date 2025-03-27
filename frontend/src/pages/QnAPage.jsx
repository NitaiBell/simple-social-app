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
  {
    id: 4,
    question: "Can I use this for teaching music?",
    answer: "Absolutely! Teachers can use the tools in classrooms or online lessons to help students develop their ear.",
  },
  {
    id: 5,
    question: "Do I need to create an account?",
    answer: "No account is needed to start using the basic features — just click and play!",
  },
  {
    id: 6,
    question: "Will new features be added?",
    answer: "Yes! We’re always working on new games and exercises. Stay tuned for updates!",
  }
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
          >
            <div className="qna-question-container" onClick={() => toggle(id)}>
              <div className="qna-question">{question}</div>
              <button className="qna-toggle-btn">
                {openId === id ? "–" : "+"}
              </button>
            </div>
            {openId === id && <div className="qna-answer">{answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

