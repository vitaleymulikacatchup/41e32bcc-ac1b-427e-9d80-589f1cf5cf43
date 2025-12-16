"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaGridAbout from '@/components/sections/about/MediaGridAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Rocket, Zap } from "lucide-react";

export default function F1LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="circleGradient"
      cardStyle="solid-accent-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Models", id: "product" },
            { name: "Performance", id: "metrics" },
            { name: "Technology", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 MOTORS"
          bottomLeftText="Racing Excellence"
          bottomRightText="hello@f1motors.com"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Next Generation Formula 1"
          description="Experience the pinnacle of automotive engineering and performance. Introducing our revolutionary fleet of F1 vehicles designed for speed, precision, and victory."
          tag="2025 Models"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Models", href: "product" },
            { text: "Request Demo", href: "contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895045857-j1ybnce8.jpg", imageAlt: "Red F1 car racing" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895047053-xuphpqu2.jpg", imageAlt: "Silver F1 vehicle" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895048555-enr21yl4.jpg", imageAlt: "Blue F1 car design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895049474-j812z0kx.jpg", imageAlt: "F1 cockpit performance" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895050975-lwvu8bki.jpg", imageAlt: "F1 speed motion" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895052237-fospvmkm.jpg", imageAlt: "F1 aerodynamic" }
          ]}
          ariaLabel="F1 presentation hero section"
        />
      </div>
      
      <div id="about" data-section="about">
        <MediaGridAbout
          title="Engineering Excellence Delivered"
          description="Our world-class team of engineers, designers, and technicians work tirelessly to push the boundaries of performance and innovation. Every vehicle is crafted with precision, tested rigorously, and optimized for championship-winning results on the track."
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895053406-ibzptkp9.jpg", imageAlt: "F1 team workshop" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895054816-udrifez2.jpg", imageAlt: "Pit crew working" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895055943-egc1u2po.jpg", imageAlt: "Engineers technical" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895057271-bkpqpixr.jpg", imageAlt: "Car assembly line" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895058394-173tuud9.jpg", imageAlt: "Manufacturing facility" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895059400-8zxks3ra.jpg", imageAlt: "Technology lab" }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
          ariaLabel="About F1 motors engineering"
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardSix
          title="Development Timeline"
          description="From concept to championship, our development process ensures every detail meets F1 standards"
          tag="Process"
          tagIcon={Rocket}
          features={[
            {
              id: 1,
              title: "Concept Design",
              description: "Initial design phase where our top engineers conceptualize the next generation of performance vehicles with cutting-edge aerodynamics and power delivery systems.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895060505-qkgas718.jpg",
              imageAlt: "Concept design phase"
            },
            {
              id: 2,
              title: "Engineering Simulation",
              description: "Advanced computer modeling and CFD analysis to optimize performance, durability, and efficiency before any physical prototype is built.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895061923-41adwakl.jpg",
              imageAlt: "Engineering simulation"
            },
            {
              id: 3,
              title: "Prototype Testing",
              description: "Rigorous testing cycles including track validation, performance metrics verification, and real-world condition evaluation to ensure reliability.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895063134-w8ztih7z.jpg",
              imageAlt: "Prototype testing"
            },
            {
              id: 4,
              title: "Production Excellence",
              description: "Final assembly with precision manufacturing and quality control protocols ensuring every vehicle meets our championship-winning standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895064265-2hg3j1im.jpg",
              imageAlt: "Production assembly"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="F1 development process"
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardThree
          title="2025 Model Lineup"
          description="Discover our complete range of high-performance vehicles engineered for track dominance"
          tag="Available Now"
          tagIcon={Award}
          products={[
            {
              id: "1",
              name: "F1 Velocity Pro",
              price: "$1,850,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895065364-79q9xm3b.jpg",
              imageAlt: "Velocity Pro red racing car",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "F1 Quantum Elite",
              price: "$2,100,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895066418-aa6z7fkb.jpg",
              imageAlt: "Quantum Elite silver vehicle",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "F1 Apex Championship",
              price: "$2,450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895067552-qvgbwpy6.jpg",
              imageAlt: "Apex Championship blue car",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="F1 models product section"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardEight
          title="Championship Performance Metrics"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895075877-s7t5lnmq.jpg"
          imageAlt="F1 performance metrics"
          metrics={[
            { id: "1", value: "0-60mph", title: "1.9 seconds" },
            { id: "2", value: "Max Speed", title: "235+ mph" },
            { id: "3", value: "Horsepower", title: "1050+ HP" },
            { id: "4", value: "Track Records", title: "47 Victories" }
          ]}
          metricVariant="border"
          useInvertedBackground="noInvert"
          ariaLabel="F1 performance metrics"
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTen
          title="Trusted by Champions"
          description="Hear from the world's elite drivers and teams who depend on our vehicles for victory"
          testimonials={[
            {
              id: "1",
              title: "Ultimate Precision and Control",
              quote: "These F1 vehicles represent the absolute pinnacle of engineering. The handling is razor-sharp, the acceleration is breathtaking, and the reliability has been flawless throughout the season. This is what championship-winning machinery feels like.",
              name: "Max Verstappen",
              role: "Professional F1 Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895068834-c0d4bru8.jpg",
              imageAlt: "Max Verstappen"
            },
            {
              id: "2",
              title: "Innovation at Its Finest",
              quote: "The attention to detail in these vehicles is remarkable. Every system, from the power delivery to the aerodynamics, has been meticulously optimized. Our team has seen a significant performance improvement since switching to this lineup.",
              name: "Toto Wolff",
              role: "Team Principal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895070039-q2d2aofp.jpg",
              imageAlt: "Toto Wolff"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Driver testimonials section"
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Leading Teams"
          description="Partnered with the world's most prestigious F1 racing teams and manufacturers"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895076977-kou0srx1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895078005-vquwakth.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895079340-uejvvdlw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895080449-db0b26xq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765895081922-fe3dbgxe.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="F1 team partners"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our F1 vehicle lineup and services"
          faqs={[
            {
              id: "1",
              title: "What makes these F1 vehicles different from previous models?",
              content: "Our 2025 lineup features revolutionary hybrid power systems, advanced aerodynamic designs with improved efficiency, and state-of-the-art chassis technology. These vehicles represent a 15% performance improvement over the previous generation while maintaining higher reliability standards."
            },
            {
              id: "2",
              title: "What is the warranty coverage?",
              content: "All vehicles come with a comprehensive 5-year warranty covering powertrain, chassis, and electrical systems. Extended coverage options are available for track-intensive usage programs. We also provide 24/7 technical support for all registered vehicles."
            },
            {
              id: "3",
              title: "Can these vehicles be customized?",
              content: "Yes, we offer extensive customization options including livery designs, aerodynamic package selections, and performance tuning. Our team works directly with buyers to create vehicles that match specific team colors, branding, and performance requirements."
            },
            {
              id: "4",
              title: "What is the delivery timeline?",
              content: "Standard delivery is 8-12 weeks from order confirmation. Priority builds are available with expedited timelines of 4-6 weeks. All vehicles are thoroughly tested and validated before delivery to ensure championship-ready performance."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="F1 frequently asked questions"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience the future of F1? Connect with our team to schedule your demonstration, discuss customization options, or place an order for our 2025 championship-winning lineup."
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule Demo", href: "mailto:demo@f1motors.com" },
            { text: "Get Quote", href: "mailto:sales@f1motors.com" }
          ]}
          useInvertedBackground="noInvert"
          ariaLabel="Contact F1 motors section"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",
              items: [
                { label: "2025 Models", href: "product" },
                { label: "Specifications", href: "feature" },
                { label: "Performance", href: "metrics" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Engineering", href: "feature" },
                { label: "Teams", href: "testimonial" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Warranty", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 F1 Motors. All rights reserved. Championship Excellence."
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}