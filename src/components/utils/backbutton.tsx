'use client'

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed bottom-5 right-5 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition"
      title="Go Back"
    >
      ←
    </button>
  );
}