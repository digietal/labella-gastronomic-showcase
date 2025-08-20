import { Card, CardContent } from "@/components/ui/card";
import { MenuCategory } from "@/data/menu";

interface CategoryCardProps {
  category: MenuCategory;
  onClick: () => void;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold transform hover:scale-105 animate-slide-up bg-gradient-card backdrop-blur-sm"
      onClick={onClick}
    >
      <CardContent className="p-0 relative h-80">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6">
          {/* Icon */}
          <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
            {category.icon}
          </div>

          {/* Title */}
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {category.name}
          </h3>

          {/* Description */}
          <p className="font-lato text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {category.description}
          </p>

          {/* Hover Indicator */}
          <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-lato text-sm font-medium">Ver pratos</span>
            <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </CardContent>
    </Card>
  );
};