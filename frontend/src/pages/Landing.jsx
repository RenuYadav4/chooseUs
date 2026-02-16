import React, { useEffect, useState } from 'react';
import '../App.css';
import WingHeart from '../components/WingHeart';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Star,  Calendar, X, } from 'lucide-react';
import { validateSpecialDate } from '../services/service';
import Toaster from '../components/toaster';
import { playSound } from '../utils/sound';
import Loader from '../components/Loader';
const Landing = () => {

    const navigate = useNavigate();

    const text = "I made this just for you. Take a deep breath… and step in ❤️";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    const handleValidate = async () => {
        setMessage("");
        if (!date) {
            setMessage("Enter the special date 💭");
            return;
        }
        try {
            setLoading(true);
            const res = await validateSpecialDate(date);
            if (res.success) {
                playSound('success');
                setMessage(res.message);
                setTimeout(() => {
                    navigate("/i-must-know");
                }, 2500);
            } else {
                playSound('fail')
                setMessage(res.message);
            }
        } catch (err) {
            setMessage("sorry my love, some backend issue occured...")
            setLoading(false);
        }
    }
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-red-200">
            <Toaster message={message} />
            {[...Array(15)].map((_, i) => (
                <div
                    key={`star-${i}`}
                    className="absolute animate-twinkle-star"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                >
                    <Star size={12 + Math.random() * 16} className="text-yellow-300 opacity-60" fill="currentColor" />
                </div>
            ))}

            {/* Floating Hearts */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={`heart-bg-${i}`}
                    className="absolute animate-float-heart-bg"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                >
                    <Heart size={16 + Math.random() * 24} className="text-pink-300 opacity-30" fill="currentColor" />
                </div>
            ))}

            {/* ✨ Floating Sparkles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={`sparkle-${i}`}
                    className="absolute animate-sparkle-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                    }}
                >
                    <Sparkles size={14 + Math.random() * 18} className="text-rose-300 opacity-50" />
                </div>
            ))}

            {/* Top label */}
            <div className="flex w-full justify-center pt-6 px-4">
                <div className="relative px-6 py-3 bg-white text-rose-700 font-serif 
                    rounded-full shadow-lg hover:rotate-6 hover:scale-105 transition cursor-pointer border-2 border-rose-200">
                    Your choices, my everything 💫
                </div>
            </div>

            {/* Heading */}
            <h1 className="sparkle-wrapper mt-12 sm:mt-16 text-center text-xl sm:text-2xl md:text-3xl font-serif
                text-rose-700 animate-glow px-4">
                {displayText}
            </h1>

            {/* Wing hearts */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 lg:gap-40 mt-8 sm:mt-10 px-4">
                <WingHeart />
                <WingHeart />
            </div>

            {/* 🌸 CONTENT */}
            <div className="relative flex flex-col items-center mt-8 sm:mt-10 px-4 pb-12 animate-content-enter">
                <div className="text-center flex flex-col items-center gap-6 sm:gap-8">

                    {/*  UNLOCK SECTION (NEW) */}
                    <div
                        onClick={() => {
                            playSound('click'), setShowModal(true)
                        }}
                        className="cursor-pointer px-6 py-4 rounded-2xl
                        bg-red-800 backdrop-blur-md border-2 border-rose-300
                        shadow-lg font-bold hover:scale-105 transition text-rose-200"
                    >
                        Tap to unlock what’s inside… <br />
                    </div>

                    <h2 className="text-base sm:text-lg md:text-2xl text-white font-serif opacity-90 max-w-2xl">
                        My creativity in frontend is bad you know that…
                        <br /> Please ignore 😅💗
                    </h2>

                    <div className="px-6 py-3 font-bold text-rose-800 animate-bounce animate-button-enter
                        rounded-full bg-white/40 backdrop-blur-md border-2 border-rose-400
                        shadow-lg hover:scale-105 transition-all duration-300">
                        I Am your Girl 😘💋
                    </div>
                </div>

                <div className="mt-8 text-center space-y-2 opacity-80 px-4">
                    <p className="text-sm sm:text-base text-rose-600 italic">
                        "Every love story is beautiful, but ours is my favorite"
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                        — Created with love, just for you 💕
                    </p>
                </div>
            </div>

            {/* 💌 MODAL */}
            {showModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                    <div className="relative bg-red-200 border-2 border-rose-800 p-6 rounded-3xl shadow-2xl
                        w-[90%] max-w-sm animate-content-enter text-center">

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-rose-600"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-xl font-serif text-red-800 text-shadow-2xs mb-4">
                            Enter our special date 💖
                        </h3>

                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Calendar size={18} className="text-rose-600" />
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent border-b-2 border-rose-300
                                focus:outline-none text-rose-700 font-serif"
                            />
                        </div>

                        <button
                            onClick={handleValidate}
                            className="mt-2 cursor-pointer px-6 py-2 rounded-full bg-rose-500
                            text-white font-semibold shadow-lg
                            hover:bg-rose-600 hover:scale-105 transition"
                        >
                            Unlock 💖
                        </button>

                    </div>
                </div>
            )}

        </div>

    );
};

export default Landing;
