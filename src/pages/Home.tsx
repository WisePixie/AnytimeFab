import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CustomHolleyECU from "../images/CustomHolleyECU.jpg";
import StockSteeringWheelButtonHolder from "../images/StockSteeringWheelButtonHolder.jpg";
import WheelButtonHolders from "../images/WheelButtonHolders.jpg";
import RockerPanel from "../images/RockerPanel.jpg";
import weld from "../images/weld.jpg";
import HydraulicBrake from "../images/HydraulicBrake.jpg";
import gears from "../images/gears.jpg";

export const Home = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-light">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              From Concept to <br />
              <span className="text-accent">Creation.</span>
            </h1>

            <p className="text-secondary text-lg mb-8 max-w-md">
              Fast, Precise, Reliable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="text-primary font-medium flex items-center hover-effect"
              >
                View Our Work
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center">
              <img
                src={gears}
                alt="Work"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2">About Us</h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary mb-6">
                Blurb about the company/
              </p>
              <p className="text-secondary mb-6">
                We are a rapid prototype fabrication business. Your one-stop fab shop. 
              </p>
              <p className="text-secondary mb-6">
                We turn your idea into high-quality,
                functional parts, FAST. Weather you're an inventor, engineer,
                small business, or hobbyist, we've got you covered.
              </p>
           
            </div>
            <div className="bg-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3">
                {["Efficiency", "Quality", "Innovation", "Persistence"].map(
                  (value) => (
                    <li key={value} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-accent mr-2" />
                      <span>{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <Link
              to="/services"
              className="no-underline flex items-center transform transition-transform duration-200 hover:scale-105 text-white"
            >
              Our Services
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Prototyping",
                description:
                  "A group of techniques used to fabricate a physical part or assembly from a three-dimensional design. Creating a better final product, iterating several times between digital designs and physical prototypes with a quick and cost-effective workflow.",
              },
              {
                title: "Precision Welding & Fabrication",
                description:
                  "A specialized process that combines cutting, shaping, and joining metal parts to create high-accuracy components that meet strict specifications, often with tolerances measured in millimeters or less.",
              },
              {
                title: "SLS Printing",
                description:
                  "3D printing process that uses a laser to fuse powered particles into a solid, functional part.",
              },
              {
                title: "FDM Printing",
                description:
                  "Printing process that builds objects layer by layer. It is a versatile and popular method for creating prototypes and functional prototypes, low-volume production parts, and even end-use products from a wide variety of materials.",
              },
              {
                title: "Resin Printing",
                description:
                  "3D printing method that uses UV light to cure liquid photopolymer resin, building objects from a digital model",
              },
              {
                title: "Durable Powder Coating",
                description:
                  "A high-performance, protective finish applied as a dry powder and cured by heat to create a hard, plastic-like layer that is more resistant to scratches, chipping, moisture, and UV radiation than conventional liquid paint.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg hover-effect hover:bg-secondary/90"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-light/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2">
            <Link
              to="/portfolio"
              className="no-underline flex items-center transform transition-transform duration-200 hover:scale-105"
            >
              Our Portfolio
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </h2>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Holley ECU/Module Brackets",
                category: "Fabrication",
                image: CustomHolleyECU,
              },
              {
                title: "Stock Steering Wheel Button Holder",
                category: "Printing",
                image: StockSteeringWheelButtonHolder,
              },
              {
                title: "Steering Wheel Button Holder",
                category: "Printing",
                image: WheelButtonHolders,
              },
              {
                title: "Rocker Panel Replacement-1970 C10",
                category: "Fabrication",
                image: RockerPanel,
              },
              {
                title: "Weld",
                category: "Welding",
                image: weld,
              },
              {
                title: "Hydraulic brake caliper bracket addition",
                category: "Welding",
                image: HydraulicBrake,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg hover-effect group"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-accent text-sm">{project.category}</p>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Anytime Fab</h3>
              <p className="text-light/80">
                Rapid Prototyping
                <br />
                Maximum designs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/people/Anytime-Fab/61581233372986/",
                  },
                  { name: "Twitter", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-light/80 hover:text-accent transition-colors"
                    aria-label={item.name}
                  >
                    {item.name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-light/70">
            <p>© {new Date().getFullYear()} AnytimeFab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};
