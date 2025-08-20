import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/menu";

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categoria/${categoryId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={handleBackToHome}
            className="text-primary hover:text-primary/80"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </Button>
          
          <img 
            src="/lovable-uploads/06d86447-53dc-4db8-9e56-05f6c55c2c24.png"
            alt="La Bella Logo"
            className="w-16 h-16"
          />
          
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nosso <span className="text-primary">Cardápio</span>
          </h1>
          <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossas categorias e descubra pratos únicos preparados com ingredientes selecionados
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                category={category}
                onClick={() => handleCategoryClick(category.id)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};