import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-muted-foreground text-lg mb-8">
          This page doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.2em] px-8 py-3 hover:brightness-110 transition-all"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
