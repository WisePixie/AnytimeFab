import { Link } from "react-router-dom";
export const Services = () => {
  const services = [
    {
      title: "Rapid Prototyping",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf "
    },
    {
      title: "Welding",
      description:
        "We specialize in many types of welding including tig wedling, mig welding, stick welding, laser and brazing. "
    },
    {
      title: "Fabrication",
      description:
        "CNC fiber and laser cutting, CNC bending, CNC Laser tube cutting, and welding all materials."
    },
    {
      title: "3D Printing",
      description:
        "Multiple top of the line printers including large format 3D printers. "
    },
    {
      title: "FDM Printing",
      description:
        "filler stuff goes hereeeee  asdfa lsajsdf; asdjf;asdifjseirf "
    },
    {
      title: "Durable Poder Coating",
      description:
        "Any color, finish and coating at request from small to large."
    },
  ];
  return (
    <main className="pt-20">
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-secondary max-w-2xl">
            We offer a comprehensive range incliding: 3D Printing, CNC Milling,
            Laser Cutting, and Design Consultation to bring your ideas to life
            with precision and quality.
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
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary mb-6">{service.description}</p>
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
                  "We learn about your project and develop a strategic approach to get things done in a timely manner.",
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
