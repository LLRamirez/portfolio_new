import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MyModal from "./Modal";
import { Image } from "next/image";

export default function Photography() {
  const images = [
    "/static/images/subway.jpg",
    "/static/images/japantemple.jpg",
    "/static/images/up.png",
    "/static/images/mevegas.jpg",
    "/static/images/ayafire.jpg",
    "/static/images/treeEcua.jpg",
    "/static/images/bald.jpg",
    "/static/images/mecave.jpg",
    "/static/images/yah.jpg",
    "/static/images/sapa.jpg",
    "/static/images/camping.jpg",
    "/static/images/bkk.jpg",
    "/static/images/PRbooks.jpg",
    "/static/images/taranme.png",
    "/static/images/me+court.jpg",
    "/static/images/shama2.png",
    "/static/images/shaman.jpg",
    "/static/images/redcany.jpg",
    "/static/images/artisthousebkk.jpg",
    "/static/images/hammock.jpg",
    "/static/images/mebeacon.jpg",
    "/static/images/LA.jpg",
    "/static/images/boyz2skool.jpg",
    "/static/images/ayabed.jpg",
    "/static/images/menlo.jpg",
    "/static/images/face1.png",
    "/static/images/crownb.jpg",
    "/static/images/pai.jpg",
    "/static/images/pond.jpg",
    "/static/images/doggo.jpg",
    "/static/images/menmonkey.jpg",
    "/static/images/shama.png",
    "/static/images/DR.png",
    "/static/images/jcpark.jpg",
    "/static/images/buzz.jpg",
    "/static/images/miami-b.png",
    "/static/images/india.jpg",
    "/static/images/menlonshaman.jpg",
    "/static/images/cave.jpg",
    "/static/images/namyo.jpg",
    "/static/images/PRAlma.jpg",
    "/static/images/byebkk.jpg",
    "/static/images/Dadbeach.jpg",
    "/static/images/tararoof.jpg",
    "/static/images/tallMe.jpg",
    "/static/images/Bar.png",
    "/static/images/boatbkk.jpg",
    "/static/images/drinbarc.jpg",
    "/static/images/skii.jpg",
  ];

  return (
    <div id="travel" className="mt-12">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
        <MyModal />
      </ResponsiveMasonry>
    </div>
  );
}
