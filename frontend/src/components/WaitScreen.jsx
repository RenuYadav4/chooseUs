import { useEffect } from "react";

export default function WaitScreen({ onFinish }) {
  useEffect(() => {
    const audio = new Audio("/cute.mp3");
    audio.play();

    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="text-center">
        <p className="text-2xl text-pink-600 font-semibold mb-2">
          Wait…
        </p>
        <p className="text-lg text-gray-600">
          Something special is coming for you 💖
        </p>
      </div>
    </div>
  );
}
