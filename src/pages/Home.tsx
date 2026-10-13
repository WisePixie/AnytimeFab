import {
  ArrowRightIcon,
  CheckIcon,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
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
                We are Anytime Fab, LLC - Your one-stop fab shop in Metro Detroit.
              </p>
              <p className="text-secondary mb-6">
                From concept to reality - We turn your idea into high-quality, functional parts, FAST. Weather you're an inventor, engineer,
                small business, or hobbyist, we've got you covered.
              </p>
              <p className="text-secondary mb-6">
                We specialize in short lead times, custom work, and personalized service that big shops just can't match. 
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3">
                {["Fast turn around time", "Efficiency", "Quality", "Innovation"].map(
                  (value) => (
                    <li key={value} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-accent mr-2" />
                      <span>{value}</span>
                    </li>
                  ),
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
                title: "Rapid Prototyping"
              },
              {
                title: "Precision Welding & Fabrication"
              },
              {
                title: "High-Quality 3D Scanning & Printing"
              },
              {
                title: "CNC Laser Cutting/Engraving/Bending"
              },
              {
                title: "On-Site Mobile Welding & Fabrication"
              },
              {
                title: "Durable Powder Coating"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg hover-effect hover:bg-secondary/90"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
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
              <div className="flex items-center space-x-4">
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/people/Anytime-Fab/61581233372986/",
                    icon: Facebook,
                  },
                  {
                    name: "Instagram",
                    href: "#https://instagram.com/anytime_fab?rpxt=MTk4bjJneTU3bHZpNA%3D%3D",
                    icon: Instagram,
                  },
                  {
                    name: "LinkedIn",
                    href: "#",
                    icon: Linkedin,
                  },
                ].map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-light transition-colors hover:border-accent hover:text-accent"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
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
