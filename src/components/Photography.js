import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Photography() {

  const [caption, setCaption ] = useState('tesst');
  const [selectedImage, setselectedImage ] = useState('');

  const newImages = [
    { url: "/static/images/subway.jpg", caption: "1 train in Dyckman, solo-dolo - NY, NY",},
    { url: "/static/images/japantemple.jpg", caption: "Temple by my apartment - Nagoya, JP"},
    { url: "/static/images/up.png", caption: "1st photoshoot at the crib - Jersey City, NJ"},
    { url: "/static/images/mevegas.jpg", caption: "Red Rock Canyon - NV"},
    { url: "/static/images/ayahuasca.jpg", caption: "Ayahuasca in Ecuador - Maca, EC"},
    { url: "/static/images/treeEcua.jpg", caption: "Tree at La Vida Divina retreat - Maca, EC"},
    { url: "/static/images/bald.jpg", caption: "A day after shaving my head - Krabi, TH"},
    { url: "/static/images/mecave.jpg", caption: "Same cave that boys soccer team got stuck in, 1 year before - Chiang Rai, TH"},
    { url: "/static/images/yah.jpg", caption: "Forever favorite mentor & friend Yah aka Yacira Valdez - Bangkok, TH"},
    { url: "/static/images/sapa.jpg", caption: "Hiking up rice field hills with Mamazoe & Deepak - Sapa, Vietnam"},
    { url: "/static/images/camping.jpg", caption: "Camping in bubblefuck Mass, park rangers are Racist AF - MA"},
    { url: "/static/images/bkk.jpg", caption: "bkk NV"},
    { url: "/static/images/PRbooks.jpg", caption: "Curbside bookstore - San Juan, PR"},
    { url: "/static/images/taranme.png", caption: "Waterfalls and Tara - Chang Mai, TH"},
    { url: "/static/images/me+court.jpg", caption: "Courtney & I + cig shirts - Bangkok, TH"},
    { url: "/static/images/shama2.png", caption: "Photoshoot with beautiful friends  helping out- Jersey City, NJ"},
    { url: "/static/images/shaman.jpg", caption: "Shamans don't smile during ceremonies - Maca, EC"},
    { url: "/static/images/redcany.jpg", caption: "Red Rock Canyon - NV"},
    { url: "/static/images/artisthousebkk.jpg", caption: "Artist house outskirts of Bkk - Bangkok, TH"},
    { url: "/static/images/hammock.jpg", caption: "Bungalow Island life - Koh Lanta, TH"},
    { url: "/static/images/mebeacon.jpg", caption: "Muesum in Beacon - Beacon, NY"},
    { url: "/static/images/LA.jpg", caption: "Venice Beach - Los Angels, CA"},
    { url: "/static/images/boyz2skool.jpg", caption: "On my way to work as a teacher - Bagkok, TH"},
    { url: "/static/images/ayabed.jpg", caption: "Ceremony during Ayahusca - Maca, EC"},
    { url: "/static/images/menlo.jpg", caption: "Ziplining & extreme sports with bff Lois - Banos, EC"},
    { url: "/static/images/face1.png", caption: "Face card - Baltimore, MD"},
    { url: "/static/images/crownb.jpg", caption: "Philly Museum- Philly, PA"},
    { url: "/static/images/pai.jpg", caption: "Picture I took in Northen Thailand - Pai, TH"},
    { url: "/static/images/pond.jpg", caption: "Swimming above a whole town that sank underwater - Sotuh, TH"},
    { url: "/static/images/doggo.jpg", caption: "Jason's Dog on the East side - Spanish Harlem, NY"},
    { url: "/static/images/menmonkey.jpg", caption: "They said monkeys like chips so I shared - Playa Del Carmen, MX"},
    { url: "/static/images/shama.png", caption: "Shama edibles photoshoot - Jercey City, NJ"},
    { url: "/static/images/DR.png", caption: "Spent a month with grandparents - Santiago, DR"},
    { url: "/static/images/jcpark.jpg", caption: "Liberty State Park - Jersey City, NJ"},
    { url: "/static/images/buzz.jpg", caption: "Fresh cut with a design - Bangok, TH"},
    { url: "/static/images/cwebay.jpg", caption: "Director at RI's Womens Business Center, event with BayCoast bank - Providence, RI"},
    { url: "/static/images/miamib.png", caption: "On my miami shit - Miami Beach, FL"},
    { url: "/static/images/india.jpg", caption: "Astrology in India - Rajistan, India"},
    { url: "/static/images/menlonshaman.jpg", caption: "Lois, Shaman & I, last ceremony - Maca, EC"},
    { url: "/static/images/cave.jpg", caption: "8 hours to get to the end of the cave - Chang Rai"},
    { url: "/static/images/namyo.jpg", caption: "My first cat Namyo - Jersey City, JC"},
    { url: "/static/images/PRAlma.jpg", caption: "Street art - San Juan, PR"},
    { url: "/static/images/byebkk.jpg", caption: "Farewell Bangkok with the homies - Bangkok, TH"},
    { url: "/static/images/Dadbeach.jpg", caption: "Las Terrenas with Dad - Las Terrenas, DR"},
    { url: "/static/images/tararoof.jpg", caption: "View from Tara's rooftop - Bangkok, TH"},
    { url: "/static/images/tallMe.jpg", caption: "1st photoshoot at the crib - Jersey, NJ"},
    { url: "/static/images/boatbkk.jpg", caption: "Took this during simpler times - Koh Tao, TH"},
    { url: "/static/images/drinbarc.jpg", caption: "Clicked as soon as we met, Dominican mother & daughter who own a bar - Barcelona, SP"},
    { url: "/static/images/skii.jpg", caption: "Skiing with my brother Genaro - Lakeside, NH"},
  ];

  return (
    <div id="travel" className="mt-12">
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
              selectedImage === image.url && (<div>{image.caption}</div>)
            }
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
