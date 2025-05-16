import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'About Us | Mood Coffee',
  description: 'Learn about our story, mission, and passion for exceptional coffee.',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              About Mood Coffee
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              We&apos;re on a mission to bring exceptional coffee experiences to coffee lovers everywhere.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-natural">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Our Story</h2>
            <p className="mt-6 text-lg text-neutral">
              Mood Coffee was founded in 2024 with a simple mission: to source the world&apos;s finest coffee beans
              and deliver them to your door at the peak of freshness. Our journey began when our founder,
              after traveling to coffee farms around the world, realized that most people never get to
              experience truly exceptional coffee.
            </p>
            <p className="mt-4 text-lg text-neutral">
              We work directly with farmers who are passionate about their craft, ensuring fair prices and
              sustainable practices. Every bean is carefully selected, expertly roasted, and delivered to you
              within days of roasting.
            </p>
          </div>
          <div className="bg-secondary h-96 rounded-lg flex items-center justify-center text-neutral overflow-hidden shadow-md">
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-primary font-medium">Our Story Image Placeholder</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-secondary h-96 rounded-lg flex items-center justify-center text-neutral overflow-hidden shadow-md">
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-primary font-medium">Our Values Image Placeholder</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-white p-6 rounded-lg shadow-sm border border-natural">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Our Values</h2>
            <div className="mt-6 space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Quality</h3>
                  <p className="mt-2 text-neutral">
                    We never compromise on quality. From bean selection to roasting to packaging, we maintain the
                    highest standards at every step.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Sustainability</h3>
                  <p className="mt-2 text-neutral">
                    We believe in responsible sourcing and environmental stewardship. Our packaging is
                    compostable, and we support farmers who use sustainable growing practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Community</h3>
                  <p className="mt-2 text-neutral">
                    Coffee brings people together. We&apos;re building a community of coffee lovers who appreciate the
                    craft and care that goes into every cup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
