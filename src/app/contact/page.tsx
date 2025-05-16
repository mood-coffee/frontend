import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Contact Us | Mood Coffee',
  description: 'Get in touch with our team. We&apos;d love to hear from you!',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-natural">
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-3 rounded-md border border-natural bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 rounded-md border border-natural bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full px-4 py-3 rounded-md border border-natural bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block w-full px-4 py-3 rounded-md border border-natural bg-white text-neutral shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your message here..."
                />
              </div>
              <div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm border border-natural">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Address</h3>
                  <p className="mt-2 text-neutral">
                    123 Coffee Street<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Email</h3>
                  <p className="mt-2 text-neutral">
                    <a href="mailto:hello@moodcoffee.com" className="hover:text-accent transition-colors">
                      hello@moodcoffee.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Phone</h3>
                  <p className="mt-2 text-neutral">
                    <a href="tel:+14155551234" className="hover:text-accent transition-colors">
                      +1 (415) 555-1234
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Hours</h3>
                  <p className="mt-2 text-neutral">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
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
