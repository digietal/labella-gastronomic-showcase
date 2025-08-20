import { categories, menuItems, getItemsByCategory } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CompactMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const handleWhatsAppOrder = (itemName: string, price: number) => {
    const message = `Olá! Gostaria de pedir: ${itemName} - ${formatPrice(price)}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha entre nossas especialidades preparadas com amor
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="h-20 flex-col p-4 text-xs transition-all duration-300"
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <span className="text-2xl mb-1">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          {categories.map((category) => {
            const items = getItemsByCategory(category.id);
            const isExpanded = selectedCategory === category.id || selectedCategory === null;
            
            if (!isExpanded || items.length === 0) return null;

            return (
              <div key={category.id} className="animate-fade-in">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  {category.name}
                </h3>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02]"
                    >
                      {item.image && (
                        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-semibold text-foreground text-sm leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-primary font-bold text-sm flex-shrink-0">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {item.description}
                        </p>
                        
                        {item.servings && (
                          <p className="text-primary text-xs font-medium">
                            {item.servings}
                          </p>
                        )}
                        
                        <Button
                          onClick={() => handleWhatsAppOrder(item.name, item.price)}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs h-8 hover:bg-primary hover:text-primary-foreground"
                        >
                          Pedir Agora
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show all items when no category is selected */}
        {selectedCategory === null && (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Clique em uma categoria acima para filtrar os pratos ou role para ver todos
            </p>
          </div>
        )}
      </div>
    </section>
  );
};