import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Swiper.css";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import all_product from "../Assets/all_product";
import Item from "../Item/Item";

export default function SwiperContent() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="swiper">
          {all_product.map((item, i) => (
            <SwiperSlide style={{ width: "100px", paddingBottom: "41px" }}>
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // import "./Swiper.css";
// import all_product from "../Assets/all_product";
// import Item from "../Item/Item";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function SwiperContent() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {all_product.map((item, i) => (
//           <SwiperSlide style={{ width: "100px" }}>
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
