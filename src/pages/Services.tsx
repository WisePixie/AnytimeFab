import {
  MonitorIcon,
  PenToolIcon,
  BarChartIcon,
  SmartphoneIcon,
  ImageIcon,
  SearchIcon,
  CheckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
export const Services = () => {
  const services = [
    {
      icon: <MonitorIcon className="h-12 w-12 text-accent" />,
      title: "Rapid Prototyping",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
        "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
    {
      icon: <PenToolIcon className="h-12 w-12 text-accent" />,
      title: "Welding",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
        "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
    {
      icon: <SmartphoneIcon className="h-12 w-12 text-accent" />,
      title: "Fabrication",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
        "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
    {
      icon: <BarChartIcon className="h-12 w-12 text-accent" />,
      title: "SLS Printing",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
        "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
    {
      icon: <ImageIcon className="h-12 w-12 text-accent" />,
      title: "FDM Printing",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
        "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
    {
      icon: <SearchIcon className="h-12 w-12 text-accent" />,
      title: "Durable Poder Coating",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf ",
      features: [
       "things go here",
        "more stuff here",
        "Other things here",
        "Performance Optimization",
      ],
    },
  ];
  return (
    <main className="pt-20">
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-secondary max-w-2xl">
            We offer a comprehensive range incliding: 3D Printing, CNC Milling, Laser
            Cutting, and Design Consultation to bring your ideas to life with
            precision and quality.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-light rounded-lg p-6 hover-effect"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary mb-6">{service.description}</p>
                <h4 className="font-semibold text-primary mb-2">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-accent mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and audience to develop a strategic approach.",
              },
              {
                number: "02",
                title: "Planning",
                description:
                  "We create a detailed roadmap for your project, including timelines and deliverables.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "Our team brings your project to life with meticulous attention to detail.",
              },
              {
                number: "04",
                title: "Refinement",
                description:
                  "We review, test, and refine to ensure the final product exceeds expectations.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-light/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation. We'll discuss your project
            and how we can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};
// imports consolidated at the top
