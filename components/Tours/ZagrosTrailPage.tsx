import React from "react";

const stages = [
  {
    title: "Stage 1: Shush to Akre",
    text: [
      "Drive from Erbil to Shush, where we will begin our trek.",
      "The Trek begins in the historic village of Shush, once home to Jewish and Christian communities. The route follows wide tracks past an old synagogue, monastery ruins, and a prehistoric cave. Small shops and rest stops are available in Gundki and Khirdas. The trail ends with a forested climb and descent into Akre’s town center.",
    ],
  },
  {
    title: "Stage 2: Akre to Hashtga",
    text: [
      "This stage begins in central Akre and climbs stone steps to the remains of an ancient citadel overlooking the plains. The trail then descends into the mountains on an old, wide pass road with scenic views and a natural spring. Caution is advised near a former military site.",
      "Do not leave the marked path. The descent into Hashtga is less defined, with loose rocks and foliage. Overnight camping in Hashtga.",
    ],
  },
  {
    title: "Stage 3: Hashtga – Safti – Alka",
    text: [
      "Due to current closures, we leave Hashtga by car and transfer to Safti. From here we slowly climb into the hills behind.",
      "The valleys here are lush and green all year round and is a maze of streams and waterfalls. Overnight camping in Alka.",
    ],
  },
  {
    title: "Stage 4: Alka to Harbo",
    text: [
      "This recently scouted stage climbs out of Alka and maintains a steady elevation along a remote ridge, offering sweeping views of the Great Zab River and surrounding valleys.",
      "While the trail skirts several villages, it remains isolated, passing shepherd camps and orchards with minimal infrastructure. Carry sufficient water and food. The stage ends in Harbo, where a small shop and a homestay are available.",
    ],
  },
  {
    title: "Stage 5: Harbo – Khalan",
    text: [
      "This long stage begins above the Great Zab River, following it for 5 km before ascending steeply to a ridgeline with panoramic views.",
      "The trail then descends to an iron bridge and traces the dramatic “dragon’s back” mountain. A second bridge crossing at Hanary offers small shops and a castle-themed house. The final stretch climbs back up to Khalan, where a homestay is available, as well as one nearby in Qamyran.",
    ],
  },
  {
    title: "Stage 6: Khalan to Soran",
    text: [
      "This is the longest stage of the trek and will be split over two days. It is one of the most spectacular sections of the trail.",
      "First, we will be ascending Bradost Mountain until we reach a mountain road built by Saddam Hussein in the 1970s. From here we will return to Khalan by car for the night. The next morning, we transfer back to the same spot and climb through the mountain forests to reach the city of Soran. Overnight in Soran at local homestay.",
    ],
  },
  {
    title: "Stage 7: Soran to Rwanduz - Saran",
    text: [
      "Drive from Soran City to natural trail. Today’s trek will bring a welcome change of pace, this is one of the shorter parts of the trail, which allows you to appreciate the stunning scenery that surrounds you.",
      "The route takes you through the territory of an old Peshmerga training base and along the ridge of a steep canyon overlooking the town of Rawanduz. Afterwards we will leave Rawanduz by car and head to the start of the nature trail into the Akoyan Valley. It is another long stretch with a steep ascent at the end, climbing 500 meters up old cow paths to reach the ancient village of Saran. Overnight in Saran at local homestay.",
    ],
  },
  {
    title: "Stage 8: Saran to Dargala",
    text: [
      "Starting in the mountain village of Saran, this stage ascends through orchards to a jeep track leading to a high mountain pass between Karokh and Hendrin peaks, significant in Kurdish oral tradition.",
      "The pass exceeds 2,000 meters and may be snow-covered in winter; local guide advice is essential. Descending on the eastern side, the trail passes springs, and ruins of an old church before reaching Dargala, a village known for its historical guerrilla fighters. Accommodation and small shops are available in Dargala.",
    ],
  },
  {
    title: "Stage 9: Dargala to Rezan",
    text: [
      "Leaving Dargala, the route descends along a paved road before crossing a stream and skirting the hillside southward. It passes through Razhukaryan, showcasing a riverside footpath, then climbs 300 meters on a 4×4 track to a highpoint with expansive views.",
      "Hikers must remain on the marked trail due to unmarked minefields nearby; local guides are essential. The path continues above the town on Omurawah before crossing a private footbridge (access arranged by guides) and finishes in Rezan village, where a homestay, restaurant, and shop are available.",
    ],
  },
  {
    title: "Stage 10: Rezan to Choman",
    text: [
      "The route departs Rezan by road, climbing gradually through the dramatic Balakayati region via 4×4 tracks and a small village.",
      "After crossing two streams and a small pass, hikers are rewarded with clear views of Halgurd and Sakran mountains, near the Iranian border. The trail descends to Nawdaran village before reaching Choman town, which offers multiple homestays, restaurants, shops, and local guides. Choman serves as a base for trips, including climbs of Halgurd for experienced hikers after completing the ZMT.",
    ],
  },
  {
    title: "Stage 11: Choman to Halgurd Base",
    text: [
      "This final stage is a continuous ascent, leaving Choman by road for 5 km before transitioning to trails and 4×4 tracks that wind through remote highlands.",
      "The route passes streams, waterfalls, and wildflowers, with no resupply points—bring all necessary food and water. At 2,250 m, warning signs for unexploded ordinance appear; stay strictly on the trail. The stage ends at a broad alpine plateau beneath Mount Halgurd, Iraq’s highest peak.",
    ],
  },
];

const ZagrosTrailPage = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="w-[85%] mx-auto space-y-12">
        <header className="text-center space-y-3 animate-fade-up-slow">
          <p className="uppercase tracking-[0.5em] text-gray-500 text-sm">
            Zagros Mountain Trail
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            Our Upcoming Zagros Mountain Trail (ZMT) Trips
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our exciting new trek in the Kurdish region of Northern Iraq covers 12 stages of the Zagros Mountain Trail (ZMT).
            This 15-day adventure (93.3 km) follows ancient pilgrimage, trading, and shepherds’ paths through valleys, canyons, waterfalls, parts of the Great Zab River,
            and over steep mountain passes, concluding at the base of Iraq’s tallest mountain, Mount Halgurd, near the Iranian border. The trek connects 30 rural communities and passes archaeological, religious,
            and cultural sites, creating a phenomenal adventure you will never forget.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { title: "ZMT Trip 1", dates: "15th November 2025 – 27th November 2025" },
            { title: "ZMT Trip 2", dates: "2nd May 2026 – 14th May 2026" },
            { title: "ZMT Trip 3", dates: "15th November 2026 – 27th November 2026" },
          ].map((trip) => (
            <div
              key={trip.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 space-y-2 hover:shadow-2xl transition animate-float-slow"
              role="presentation"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Next Trip</p>
              <h3 className="text-2xl font-semibold text-blue-950">{trip.title}</h3>
              <p className="text-gray-600">{trip.dates}</p>
            </div>
          ))}
        </section>

        <section className="space-y-10">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 uppercase tracking-[0.4em]">Stage {index + 1}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/80 border border-rose-300 text-rose-600 font-semibold">
                    Zagros Trail
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-blue-950">{stage.title}</h2>
                <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                  {stage.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="border border-dashed border-gray-300 rounded-3xl p-10 text-center animate-[pulse_3s_ease-in-out_infinite]">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Gallery</h2>
          <p className="text-gray-500">Gallery coming soon.</p>
        </section>
      </div>
    </div>
  );
};

export default ZagrosTrailPage;

