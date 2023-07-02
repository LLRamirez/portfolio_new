import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Photography() {

const images = [
  "/subway.jpg",
  "/japantemple.jpg",
  "/up.png",
  "/mevegas.jpg",
  "/ayafire.jpg",
  "/treeEcua.jpg",
  "/bald.jpg",
  "/mecave.jpg",
  "/yah.jpg",
  "/sapa.jpg",
  "/camping.jpg",
  "/bkk.jpg",
  "/PRbooks.jpg",
  "/shama2.png",
  "/shaman.jpg",
  "/redcany.jpg",
  "/hammock.jpg",
  "/mebeacon.jpg",
  "/LA.jpg",
  "/boyz2skool.jpg",
  "/ayabed.jpg",
  "/face1.png",
  "/crownb.jpg",
  "/pai.jpg",
  "/pond.jpg",
  "/doggo.jpg",
  "/menmonkey.jpg",
  "/shama.png",
  "/DR.png",
  "/jcpark.jpg",
  "/buzz.jpg",
  "/menlonshaman.jpg",
  "/cave.jpg",
  "/namyo.jpg",
  "/byebkk.jpg",
  "/Dadbeach.jpg",
  "/tallMe.jpg",
  "/Bar.png",
  "/boatbkk.jpg",
  "/drinbarc.jpg",
  "/skii.jpg",
]

  return (
    <div id="travel" className="mt-12">
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  );
}



