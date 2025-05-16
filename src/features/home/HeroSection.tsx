import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * Hero section for the home page
 */
export function HeroSection() {
  return (
    <div className="relative bg-primary overflow-hidden hero-overlay">
      <Container className="relative z-10 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-with-shadow">
              <span className="block">Exceptional Coffee</span>
              <span className="block text-secondary">Extraordinary Moments</span>
            </h1>
            <p className="mt-6 text-lg text-secondary max-w-3xl">
              Carefully sourced and expertly roasted coffee beans delivered to your door.
              Experience the perfect cup, every morning.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg" href="/products">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" href="/about">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="aspect-w-5 aspect-h-6 lg:aspect-w-4 lg:aspect-h-5 relative">
              {/* Placeholder for image - in a real project, you would use a real image */}
              <div className="w-full h-[500px] bg-secondary rounded-lg overflow-hidden">
                {/* This would be replaced with a real image in production */}
                <div className="w-full h-full flex items-center justify-center text-neutral">
                  Coffee Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
