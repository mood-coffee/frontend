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
              <div className="w-full h-[500px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                {/* High-quality coffee roasting video that loops continuously */}
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/coffee-roasting-high-quality.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
