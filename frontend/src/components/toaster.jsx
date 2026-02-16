import { useEffect, useState } from "react";

const Toaster = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !message) return null;

  return (
    <div className="
      fixed top-6 left-1/2 -translate-x-1/2
      z-100
      bg-white text-rose-700
      px-6 py-3 rounded-full
      shadow-xl border border-rose-300
      animate-fade-in
    ">
      {message}
    </div>
  );
};

export default Toaster;
