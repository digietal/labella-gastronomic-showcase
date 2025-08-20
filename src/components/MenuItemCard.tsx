import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const handleOrderClick = () => {
    const message = `Olá! Gostaria de pedir o prato: *${item.name}* - R$ ${item.price.toFixed(2).replace('.', ',')}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold bg-gradient-card backdrop-blur-sm animate-slide-up">
      <CardContent className="p-6">
        {/* Image/Video Area - Placeholder for now */}
        <div className="w-full h-48 bg-gradient-wine rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="text-6xl opacity-30">🍽️</div>
          {item.image && (
            <img 
              src={item.image} 
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Name and Price */}
          <div className="flex justify-between items-start">
            <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1 mr-4">
              {item.name}
            </h3>
            <div className="text-right">
              <div className="font-playfair text-2xl font-bold text-primary">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </div>
              {item.servings && (
                <div className="font-lato text-sm text-muted-foreground">
                  {item.servings}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="font-lato text-muted-foreground leading-relaxed text-sm">
            {item.description}
          </p>

          {/* Order Button */}
          <Button 
            onClick={handleOrderClick}
            variant="premium"
            className="w-full mt-6 group-hover:shadow-glow transition-all duration-300"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Peça Agora
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};