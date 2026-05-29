import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/sign-in");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-dvh bg-gray-light flex items-center justify-center">
      <h1 className="font-mono text-3xl text-heading-dark">FreeChat</h1>
    </div>
  );
}
