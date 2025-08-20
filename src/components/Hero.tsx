import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

interface HeroProps {
  onNavigateToMenu: () => void;
}

export const Hero = ({ onNavigateToMenu }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Logo Area */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/06d86447-53dc-4db8-9e56-05f6c55c2c24.png"
            alt="La Bella Logo"
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        {/* Main Title */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
          <span className="block text-primary animate-glow">La Bella</span>
          <span className="block text-3xl md:text-4xl mt-4 text-muted-foreground font-light">
            Experiência Gastronômica Premium
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-lato text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Sabores únicos, ingredientes selecionados e apresentação impecável em cada prato
        </p>

        {/* CTA Button */}
        <Button 
          onClick={onNavigateToMenu}
          variant="hero"
          size="lg"
          className="animate-slide-up shadow-gold hover:shadow-glow transition-all duration-500"
        >
          <span className="text-xl font-medium">Descubra nosso cardápio</span>
        </Button>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary-glow rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};