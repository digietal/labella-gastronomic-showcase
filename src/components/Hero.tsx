import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
interface HeroProps {
  onNavigateToMenu: () => void;
}
export const Hero = ({
  onNavigateToMenu
}: HeroProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0">
        <iframe src="https://player.vimeo.com/video/1111775404?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1" className="w-full h-full object-cover" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }} />
        {/* Fallback background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/assets/hero-bg.jpg')`
      }} />
      </div>

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-texture opacity-60" />
      
      {/* Animated texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10 animate-shimmer bg-[length:200%_100%]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-40" style={{
      animationDelay: '1.5s'
    }} />
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{
      animationDelay: '3s'
    }} />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float opacity-80" style={{
      animationDelay: '2s'
    }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo Area with enhanced styling */}
        <div className="mb-16 animate-fade-in">
          <div className="relative">
            <img src="/lovable-uploads/06d86447-53dc-4db8-9e56-05f6c55c2c24.png" alt="La Bella Logo" className="w-56 h-56 mx-auto mb-8 drop-shadow-2xl animate-float filter brightness-110" />
            {/* Logo glow effect */}
            <div className="absolute inset-0 w-56 h-56 mx-auto rounded-full bg-primary/20 blur-2xl animate-glow" />
          </div>
        </div>

        {/* Main Headlines with dramatic typography */}
        <div className="space-y-8 mb-16">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="block text-foreground mb-4">
              Comida feita com amor,
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-amber-50">
              para reunir quem você ama.
            </span>
          </h1>

          <div className="space-y-4 animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <p className="font-lato text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Você escolhe, a gente prepara com amor e leva até você.
            </p>
            
            
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="animate-slide-up" style={{
        animationDelay: '0.6s'
      }}>
          <Button onClick={onNavigateToMenu} variant="hero" size="lg" className="group relative overflow-hidden px-16 py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-500 shadow-elegant hover:shadow-glow animate-heartbeat">
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <span>VER CARDÁPIO</span>
          </Button>
        </div>

        {/* Premium badge */}
        <div className="mt-12 animate-fade-in" style={{
        animationDelay: '0.9s'
      }}>
          <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-primary-glow tracking-wider">Mais do que delivery: é comida gostosa na sua porta</span>
          </div>
        </div>
      </div>

    </section>;
};