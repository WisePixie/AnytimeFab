import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
export const Contact = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-secondary max-w-2xl">
            We'd love to hear from you. Reach out to discuss your projects!
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-secondary mb-8">
              Have a project in mind? Let us help ideas
              and how we can help bring them to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <MapPinIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Our Location
                  </h3>
                  <p className="text-secondary">
                    Moto ~
                    Ferndale, Michigan
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <PhoneIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-secondary">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-accent transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <MailIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-secondary">
                    <a
                      href="mailto:info@minimalist.com"
                      className="hover:text-accent transition-colors"
                    >
                      Projects@anytimefab.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-light p-3 rounded-full mr-4">
                  <ClockIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Business Hours
                  </h3>
                  <p className="text-secondary">Monday - Friday: 7am - 4pm</p>
                  <p className="text-secondary">Weekend: Closed or Appointments Only</p>
                </div>
              </div>
            </div>
          </div>

<div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-primary mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-primary mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </section>
    </main>
  );
};
