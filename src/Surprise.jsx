import { useState, useEffect } from "react";

const steps = [
  {
    label: "3 yıl",
    image: "/images/1.jpg",
    text: "Seninle ilklerimi yaşadım ve bundan asla rahatsız değilim. İyi ki varsın."
  },
  {
    label: "36 ay",
    image: "/images/2.jpg",
    text: "Hayatımın anlamı, seni çok seviyorum."
  },
  {
    label: "156 hafta",
    image: "/images/3.jpg",
    text: "İyi ki bana minik bir kız çocuğu olmuşsun. Sana her baktığımda minnak bir bebek gibi görünüyor ve her defasında tekrar aşık oluyorum prensesim 💕"
  },
  {
    label: "1096 gün",
    image: "/images/4.jpg",
    text: "Her şeyim benim... İyi ki o mesajı bana atmışsın. Yoksa seni bulamazdım. Kader derdik belki ama... Kaderim sen olmuşsun ✨"
  },
  {
    label: "26.304 saat",
    image: "/images/5.jpg",
    text: "Seninle geçen her saniye, bir ömre bedel."
  }
];

export default function Surprise() {
  const [index, setIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const createHearts = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    };
    const interval = setInterval(createHearts, 300);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      setShowMessage(true);
    }
  };

  const currentStep = steps[index];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-yellow-100 text-black flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {!showMessage ? (
        <>
          <button
            onClick={handleClick}
            className="text-3xl md:text-5xl font-bold bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-500 transition duration-300 fade-in"
          >
            {currentStep.label}
          </button>

          <img
            src={currentStep.image}
            alt={currentStep.label}
            className="mt-8 rounded-xl shadow-xl w-full max-w-md fade-in"
          />

          <p className="mt-6 text-center text-lg md:text-xl max-w-xl fade-in">
            {currentStep.text}
          </p>
        </>
      ) : (
        <div className="text-center fade-in">
          <img
            src="/images/6.jpg"
            alt="Final"
            className="rounded-xl shadow-xl w-full max-w-md mb-6"
          />
          <h2 className="text-3xl md:text-4xl text-pink-600 font-bold mb-4">
            I love you very much, my woman.<br />
            A lifetime into years together 💖
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
            Bu sadece bir son değil, aslında bir başlangıç...<br />
            Her geçen saniye, birlikte yazdığımız en güzel hikâyenin yeni bir satırı.
            İyi ki yollarımız kesişti, iyi ki seninleyim. Sonsuza kadar beraber... 🌙
          </p>
        </div>
      )}

      <style jsx>{`
        .heart {
          position: absolute;
          top: -2rem;
          width: 20px;
          height: 20px;
          background-color: #ff69b4;
          transform: rotate(45deg);
          animation: fall linear infinite;
        }
        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #ff69b4;
          border-radius: 50%;
        }
        .heart::before {
          top: -10px;
          left: 0;
        }
        .heart::after {
          left: -10px;
          top: 0;
        }
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(45deg);
            opacity: 0;
          }
        }
        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}