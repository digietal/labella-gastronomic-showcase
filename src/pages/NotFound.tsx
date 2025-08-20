import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-8 opacity-50">🍽️</div>
        <h1 className="font-playfair text-6xl font-bold mb-4 text-foreground">404</h1>
        <h2 className="font-playfair text-2xl font-medium mb-4 text-primary">Página não encontrada</h2>
        <p className="font-lato text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
