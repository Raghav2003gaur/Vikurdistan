import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="w-[80%] mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Our Story
            </h2>
          </div>
          
          {/* Why We Started */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
              Why We Started
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our story begins with our founder, Omar Chomani, a local of the
                  Kurdish city of Choman. Having spent his entire life in this
                  mountainous region, Omar knew the safest routes and the most
                  beautiful hidden spots that others often missed. He saw a gap in
                  the market for authentic, reliable tourism experiences and decided
                  to fill it, ensuring the growing demand for tourism in the area
                  could be met responsibly.
                </p>
                <p>
                  To achieve this, he gathered a diverse and knowledgeable team,
                  dedicated to ensuring our company consistently meets and exceeds
                  customer satisfaction expectations.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/aboutUs1.png"
                  alt="Our Story - Omar Chomani"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16 bg-gray-50 p-10 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/aboutUs2.png"
                alt="Our Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to motivate, educate, and thrill our customers through
                providing them with unimaginable experiences and showcasing the beauty
                that is located within Kurdistan and Iraq.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Our vision is to create an environmentally and socially aware approach
              to tourism, that provides forth a high quality of personality and trust,
              and in turn creating an everlasting memory.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16 bg-gray-50 p-10 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">
              Core Values
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              At VIKurdistan, we value providing authentic experiences while keeping
              our customers safe, supporting local communities, protecting the
              environment, and ensuring every traveler leaves satisfied.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
