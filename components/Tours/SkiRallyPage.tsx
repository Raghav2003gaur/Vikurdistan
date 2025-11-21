import React from "react";
import Image from "next/image";

const skiGallery = Array.from(
  { length: 13 },
  (_, index) => `/images/skiImg/${index + 1}.png`
);

const trips = [
  {
    title: "Next Rally",
    dates: "February 1st 2026 – February 10th 2026",
  },
];

const SkiRallyPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="w-[85%] mx-auto space-y-14">
        <header className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            Welcome to the Ski Rally & Festival February 2026!
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get ready for an amazing 10-day journey packed with snow, music, culture, and fun.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-8">
          <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Set in the stunning Przhè mountains in Choman, Erbil Province, this special winter festival mixes
              top skiing and snowboarding with lively cultural events. Whether you’re an experienced athlete or a
              beginner, take this chance to see the beauty of Kurdistan from a new angle.
            </p>
            <p>
              Having hosted 6 different Ski Rally Festivals, we’ve mastered the art of providing a truly unique experience to this region.
            </p>
            <p>
              We are the first company to have introduced the sport of skiing to Iraq and Kurdistan. Our festivals have reached thousands of sport
              enthusiasts and have attracted various lucrative businesses as partners and sponsors.
            </p>
            <p>
              We have also attracted attention from local channels and foreign media outlets, which allowed our festivals to be internationally recognized.
            </p>
            <p>
              At first glance, Iraq is an unusual location to host a backcountry ski race. While the snow-covered mountains of the Kurdistan region
              have long been used by shepherds and farmers, ski touring in the region is a new activity with very few people aware of it.
            </p>
            <p>
              Given the tumultuous and violent history of this area, the region lacks ski infrastructure, equipment and knowledgeable skiers.
            </p>
            <p>
              However, locals love to play in the snow in the winter and there is local interest in skiing. We, at VIKurdistan hope to continue to build
              upon this shared love of winter with the Ski Rally and the Choman Ski Club.
            </p>
            <p>
              The first Iraq Ski Rally took place In February 2018 as an experimental event. Located in the town of Choman, a small mountain town in northern Iraq along
              the border with Iran, over 20 skiers participated, coming from Australia, United States, Switzerland, Denmark and Slovakia, alongside a large group of Kurdish and Arab skiers.
            </p>
            <p>
              Key ACTIVITIES include ski and snowboard races, cultural performances and traditional music, local food and artisan markets, workshops and activities for youth, NGO and sponsor booths, evening entertainment and networking for guests and partners.
            </p>
            <p>
              The Iraq Ski Rally has partnered with Free to Run, an international NGO, to include a group of girls living in refugee camps as part of the Ski Club. These girls have received ski training from professional instructors and have participated in the Ski Rally event.
            </p>
            <p>
              Adventure-based sports like skiing can be a way for girls living in areas of conflict to build their physical, emotional and social well-being: developing them into community leaders so they can bring people together across cultural, ethnic and religious lines.
            </p>
            <p>
              Finding ways for women and girls to safety and boldly by engaging in outdoor activities allows them to regain public space and changes their views about the roles that women have in society.
            </p>
            <p>
              Skiing is one way to allow for an understanding and buy-in for women and to empower them to be part of the solution.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-950">Next Rally</h3>
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="bg-gray-100 rounded-2xl p-4 border border-gray-200"
              >
                <p className="text-lg font-semibold text-red-600">{trip.title}</p>
                <p className="text-sm text-gray-600">{trip.dates}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-blue-950">Gallery</h2>
            <p className="text-sm text-gray-500">Ski Rally Highlights</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skiGallery.map((src) => (
              <div key={src} className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt="Ski Rally"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkiRallyPage;

