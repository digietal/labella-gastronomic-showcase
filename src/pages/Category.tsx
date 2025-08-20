import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuItemCard } from "@/components/MenuItemCard";
import { getCategoryById, getItemsByCategory } from "@/data/menu";

export const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  if (!categoryId) {
    navigate('/categorias');
    return null;
  }

  const category = getCategoryById(categoryId);
  const items = getItemsByCategory(categoryId);

  if (!category) {
    navigate('/categorias');
    return null;
  }

  const handleBackToCategories = () => {
    navigate('/categorias');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={handleBackToCategories}
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

      {/* Hero Section for Category */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-6xl mb-6 animate-fade-in">{category.icon}</div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4 animate-slide-up">
            {category.name}
          </h1>
          <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            {category.description}
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <main className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">🍽️</div>
            <h2 className="font-playfair text-2xl text-muted-foreground mb-2">Em breve</h2>
            <p className="font-lato text-muted-foreground">
              Estamos preparando pratos especiais para esta categoria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MenuItemCard item={item} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="premium"
          size="lg"
          className="rounded-full w-16 h-16 shadow-elegant animate-glow"
          onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido do La Bella.', '_blank')}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};