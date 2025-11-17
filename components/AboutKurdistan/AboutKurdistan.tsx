import React from "react";
import Image from "next/image";

const AboutKurdistan = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="w-[80%] mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            About Kurdistan
          </h1>
          <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
        </div>

        {/* The Kurdistan Region Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                The Kurdistan Region of Iraq
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  is an autonomous region located in the northern part of the
                  country, which is home to a large Kurdish population. The
                  region is made up of four governorates: Erbil, Sulaymaniyah,
                  Duhok, and Halabja. These governorates share borders with
                  Iran, Syria, and Turkey, and they are situated in an area
                  known as Iraqi Kurdistan.
                </p>
                <p>
                  The Kurdistan Region has a population of approximately 5
                  million people and is home to a diverse mix of cultures and
                  languages. The region has a long and complex history, and
                  Kurds in Iraq have struggled for autonomy and independence
                  throughout the 20th century. During this time, Kurds have
                  faced Arabization, genocide, and other forms of oppression at
                  the hands of the central Iraqi government in Baghdad.
                </p>
                <p>
                  After the Gulf War in 1991, the Iraqi government established
                  no-fly zones over most of Iraqi Kurdistan, which allowed the
                  Kurds to experiment with self-governance and establish an
                  autonomous region. The Baghdad government only recognized the
                  autonomy of the Kurdistan Region after the fall of Saddam
                  Hussein in 2003.
                </p>
                <p>
                  Today, the Kurdistan Region is the only part of the larger
                  region known as Kurdistan that has achieved autonomy. The
                  other parts of Kurdistan (Syria, Turkey, and Iran) do not
                  have official autonomous regions, and Kurds in these countries
                  continue to struggle for their rights and independence.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/RegionOfIraq.png"
                alt="Kurdistan Region of Iraq"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* The Flag Section */}
        <section className="mb-16 bg-gray-50 p-10 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/flag.png"
                alt="Kurdistan Flag"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">The Flag</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  of Kurdistan is a symbol of the Kurdish people and their
                  struggle for autonomy and independence. The flag was originally
                  created by the Society for the Rise of Kurdistan in 1920, and
                  it has been adopted as the national flag of various Kurdish
                  states throughout history.
                </p>
                <p>
                  One of the most well-known versions of the Kurdish flag is the
                  one used by the Kurdistan Region of Iraq, which was adopted in
                  1992. This flag features a yellow sun with 21 rays on a red
                  background, with the rays representing the 21 Kurdish provinces
                  that make up the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Peshmerga Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">The Peshmerga</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                (<span className="italic">&apos;those who face death&apos;</span>) are the
                military forces of the Kurdistan Region of Iraq. They are
                responsible for the security of the region and are responsible for
                protecting the people of the Kurdistan Region from external
                threats. The Peshmerga have a long history dating back to the
                18th century, when they served as a tribal border guard for the
                Ottoman and Safavid empires.
              </p>
              <p>
                In the 19th century, the Peshmerga became a well-trained and
                disciplined guerrilla force, and they played a key role in the
                struggle for Kurdish autonomy and independence.
              </p>
              <p>
                Today, the Peshmerga are officially under the command of the
                Kurdistan Regional Government&apos;s Ministry of Peshmerga Affairs. In
                2003, during the Iraq War, the Peshmerga played a key role in the
                mission to capture Saddam Hussein. They have also been involved in
                the fight against ISIS in Iraq and Syria, where they have proven
                to be an effective and reliable partner in the coalition against
                the terrorist group.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Peshmerga.png"
                alt="Peshmerga forces"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Nawroz Section */}
        <section className="mb-16 bg-gray-50 p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Nawroz</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Nawroz.png"
                alt="Nawroz Celebration with bonfires"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4 text-gray-700 leading-relaxed">
              <p>
                The legend of the arrival of spring in Asia Minor dates back to
                ancient Iranian legends, which were retold in various texts
                including the Shahnameh and the Sharafnama. According to the
                legend, an evil Assyrian king named Zuhak conquered Iran and
                ruled for one thousand years, causing spring to no longer come to
                Kurdistan. During this time, two young men were sacrificed to
                Zahak&apos;s serpents daily.
              </p>
              <p>
                A nobleman named Fereydun led a revolt against Zahak, which was
                led by a blacksmith named Kaveh(Kawa) who had lost six sons to
                Zahak. Kaveh trained the young men who had been saved from
                sacrifice into an army, and they marched to Zahak&apos;s castle where
                Kaveh killed the king with a hammer. The lighting of fires on
                March 20, the day of Kaveh&apos;s victory, has become a symbol of
                freedom and a way for Kurds to remember their strength as a
                people. It is also a tradition to jump across a fire at Newroz.
              </p>
              <p>
                The festival marks the first day of spring (21st March) and the
                new year in the Kurdish calendar. It is a time of joy and
                celebration, with people coming together to participate in various
                activities such as dancing, singing, and games, and to enjoy
                special foods and the reading of poetry. The lighting of bonfires
                on the eve of Newroz is a common tradition, symbolizing the end
                of winter and the arrival of spring. Newroz has a rich cultural
                and historical significance for Kurds and is an important aspect
                of their identity. It is a time for Kurds to celebrate their
                culture and traditions and to come together as a community.
              </p>
            </div>
          </div>
        </section>

        {/* Kurdish Clothes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Kurdish Clothes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Kurdish men wear their traditional clothes routinely, not only on
                special occasions. It&apos;s a two, three piece clothes, the top which
                is like a closed jacket ,pants which are called Shalvar (wide
                trousers which close at the ankles closely) and a piece of cloth
                around the waist named Pshten, and also a type of shoes called
                Klash. The Kurdish costume was worn many days in the past.
                Currently some women still wear them on a daily basis, especially
                by the older generation.
              </p>
              <p>
                The dresses worn on a daily basis tend to be modest in color and
                have little or no accessories or embroideries. In the present day
                the Kurdish dress is more commonly worn on special occasions.
              </p>
              <p>
                The traditional Kurdish women&apos;s outfit includes either a vest
                called Helag or long-sleeved jacket called Salta or Kawaa, a long
                overcoat worn over a gown. An underdress and puffy pants are worn
                beneath the gown. A belt over the gown is also needed.
                Traditionally women wore Kurdish hats ornamented with valued
                coloured stones, beads and gold pieces. Over time this has become
                less common. Now it is more popular among women to only
                accessorize with gold jewelry.
              </p>
              <p>
                Usually younger women and young girls wear brightly coloured
                dresses adorned with many beads and sequins, and the older women
                wear darker colors. However, older women tend to wear more gold
                jewelry because traditionally when women married they would
                receive a dowry of gold jewelry pieces from their groom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/kurdishClothes1.png"
                  alt="Kurdish Traditional Clothes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/kurdishClothes2.png"
                  alt="Kurdish Traditional Clothes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/kurdishClothes3.png"
                  alt="Kurdish Traditional Clothes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/kurdishClothes4.png"
                  alt="Kurdish Traditional Clothes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutKurdistan;


