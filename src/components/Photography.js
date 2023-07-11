import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Photography() {

  const [caption, setCaption ] = useState('tesst');
  const [selectedImage, setselectedImage ] = useState('');

  const newImages = [
    { url: "/static/images/subway.jpg", caption: "Took the 1 train in Dyckman, solo-dolo - New York, NY",},
    { url: "/static/images/japantemple.jpg", caption: "Temple by my apartment - Nagoya, JP"},
    { url: "/static/images/up.png", caption: "Photoshoot at the crib - Jersey City, NJ"},
    { url: "/static/images/mevegas.jpg", caption: "Climbing rocks and hking in the desert, colors in nature are my favorite - Red Rock Canyon, NV"},
    { url: "/static/images/ayafire.jpg", caption: "They said stare into the fire, spirits came - Maca, EC"},
    { url: "/static/images/treeEcua.jpg", caption: "Cool tree at La Vida Divina retreat - Maca, EC"},
    { url: "/static/images/bald.jpg", caption: "A day after shaving my head - Bang Wa, TH"},
    { url: "/static/images/mecave.jpg", caption: "Same cave the boys soccer team got stuck in, 1 year before - Chiang Rai, TH"},
    { url: "/static/images/yah.jpg", caption: "Favorite mentor & forever friend Yah aka Yacira Valdez - Bangkok, TH"},
    { url: "/static/images/sapa.jpg", caption: "Hiking up rice field hills with Mamazoe & Deepak - Sapa, Vietnam"},
    { url: "/static/images/camping.jpg", caption: "Camping in bubblefuck, park rangers are Racist AF - MA"},
    { url: "/static/images/bkk.jpg", caption: "Chaopraya River at night - Bangkok TH"},
    { url: "/static/images/PRbooks.jpg", caption: "Curbside bookstore - San Juan, PR"},
    { url: "/static/images/taranme.png", caption: "Waterfalls and Tara - Chang Mai, TH"},
    { url: "/static/images/me+court.jpg", caption: "Courtney, cig shirts & an innocent night out - Bangkok, TH"},
    { url: "/static/images/shama2.png", caption: "Bautiful friends who offered to be models for our first photoshoot- Jersey City, NJ"},
    { url: "/static/images/shaman.jpg", caption: "Shamans don't smile during ceremonies - Maca, EC"},
    { url: "/static/images/redcany.jpg", caption: "Despite the map, we got lost in Red Rock Canyon - Vegas, NV"},
    { url: "/static/images/artisthousebkk.jpg", caption: "Artist house in the outskirts of the city - Bangkok, TH"},
    { url: "/static/images/hammock.jpg", caption: "Bungalow Island life feels natural- Koh Lanta, TH"},
    { url: "/static/images/mebeacon.jpg", caption: "Muesum with cool lights - Beacon, NY"},
    { url: "/static/images/LA.jpg", caption: "Walking around Venice Beach - Los Angels, CA"},
    { url: "/static/images/boyz2skool.jpg", caption: "On my way to work - Bagkok, TH"},
    { url: "/static/images/ayabed.jpg", caption: "Before vomiting into the bucket - Maca, EC"},
    { url: "/static/images/menlo.jpg", caption: "Extreme sports with bestest amiga Lois - Banos, EC"},
    { url: "/static/images/face1.png", caption: "Face card is giving - Baltimore, MD"},
    { url: "/static/images/crownb.jpg", caption: "Me in a different form - Philadelphia, PA"},
    { url: "/static/images/pai.jpg", caption: "Took this pic after hiking in Northen Thailand - Pai, TH"},
    { url: "/static/images/pond.jpg", caption: "Swimming above a whole town that sank underwater - Sotuh, TH"},
    { url: "/static/images/doggo.jpg", caption: "Jay-son's Dog & ice cream - Spanish Harlem, NY"},
    { url: "/static/images/menmonkey.jpg", caption: "They said monkeys like chips so I shared - Playa Del Carmen, MX"},
    { url: "/static/images/shama.png", caption: "Shama edibles photoshoot with friends - Jercey City, NJ"},
    { url: "/static/images/DR.png", caption: "A month with Dad & grandparents - Santiago, DR"},
    { url: "/static/images/jcpark.jpg", caption: "Liberty State Park looking cute - Jersey City, NJ"},
    { url: "/static/images/buzz.jpg", caption: "Fresh cut, sometimes miss feeling the AC blowing on my scalp - Bangok, TH"},
    { url: "/static/images/cwebay.jpg", caption: "RI's Womens Business Center, event with BayCoast bank - Providence, RI"},
    { url: "/static/images/miamib.png", caption: "On my Miami shit - Miami Beach, FL"},
    { url: "/static/images/india.jpg", caption: "Virgos in India - Rajistan, India"},
    { url: "/static/images/menlonshaman.jpg", caption: "Last ceremony, ready to break that ayahusca diet - Maca, EC"},
    { url: "/static/images/cave.jpg", caption: "8 hours to get to the end of the cave, 14 in total - Chiang Rai"},
    { url: "/static/images/namyo.jpg", caption: "Named my first cat Namyo, after a Japaense buddisht chant - Jersey City, JC"},
    { url: "/static/images/PRAlma.jpg", caption: "Street art during covid - San Juan, PR"},
    { url: "/static/images/byebkk.jpg", caption: "Farewell Bangkok & friends - Bangkok, TH"},
    { url: "/static/images/Dadbeach.jpg", caption: "Beach day with Dad - Las Terrenas, DR"},
    { url: "/static/images/tararoof.jpg", caption: "View from Tara's rooftop - Bangkok, TH"},
    { url: "/static/images/tallMe.jpg", caption: "Photoshoot at the crib - Jersey, NJ"},
    { url: "/static/images/boatbkk.jpg", caption: "Snapped this on a beautiful day in the south - Koh Tao, TH"},
    { url: "/static/images/drinbarc.jpg", caption: "Clicked as soon as we met, Dominican mother & daughter ( Sandy is also a Supermodel) who & run own a bar - Barcelona, SP"},
    { url: "/static/images/skii.jpg", caption: "Skiied with my brother Genaro - Lakeside, NH"},
  ];

  return (
    <div id="travel" className="mt-12 text-white">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {newImages.map((image, i) => (
           <>
            <img
              key={i}
              src={image.url}
              style={{ width: "100%", display: "block" }}
              alt=""
              onClick={() => setselectedImage(image.url)}
            />
            {
              selectedImage === image.url && (<div>
              <p className="text-white">{image.caption}</p>
              </div>)
            }
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
