import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigateToMenu = () => {
    navigate('/categorias');
  };

  return <Hero onNavigateToMenu={handleNavigateToMenu} />;
};

export default Index;
