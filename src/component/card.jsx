import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Card = () => {
  return (
    <Swiper
      // The rest of your Swiper props
      modules={[Navigation,  A11y]}
      spaceBetween={35} // Adjusted spacing slightly for realism
      slidesPerView={'auto'} // Changed to 4, as 3 is often too wide for mobile
      navigation
      pagination={false}
      scrollbar={false}
    >
      <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">1</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYgqP-FM9E4u1IbMtOKfqd2ha2nti95bI-jg9xOXxJAcO6Xj9hwy02O4dFu0-oZ_jSi-NQFHPZQwn1NO7eA5LVqqGZIfy9YPjg1G6GzZPMRODawEZXb_7Ks9Ryjl-xUANYCs.webp?r=d90" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 2 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">2</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVCzd41nKAatdvwy0DT1M5D-xSzSdBdKklegmczhdyKYvEEwunaUUcE5xr7Zjkn9Ywhm3n-2g0wi5s1nB3J1bAhe8t3j0ENBjxw.webp?r=267" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 3 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">3</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABemK-aHwX63DztqbWwQ0xnYGvHYuoYkQ3l3ZIwftPjmuJxC461m-FOI7ZN_bzolsgGd_3_dbacKgr5mV292UjjEYJGCgIubIQOs.webp?r=273" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 4 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">4</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG.webp?r=f17" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 5 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">5</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQyNT9Mdd2wR9KVzh2iO_T3rTEydvDSlf0_4EnLYou_zEgzr5juLda9NmQT2srWqiFh-7PKVRzRgoB5Eg-xA5DQHFPeSd1MHDzryhJqxIeayTICsi6DMPp4I8uH8NdtaV5Ji.webp?r=e05" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 6 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">6</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWUsrobyjfthn3cn_9LIwE_08qG_rgI5BTJaI7ecvgxEMp1e2Zu7hPQ9HGeNgVVWrgu2Wj-vfUphdz8RniXmEvla02KBce2uV_kB0vtctN0CX4QBQDr4oQpGGQd59uuKk87Z.webp?r=b86" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 7 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">7</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZxdHsYg10iHLQm7e8pxLnbn1eGa3nJwHH_AVi2qgNL6hYH9xMi2ESvKx-zy40e9woWRPcPuwFNR6iD2bMQC7TbcfsDWVccDtMk.webp?r=213" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 8 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">8</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbKjhiyoLvd9eVvrJJz3gL_8FeRpmDRo6dB5XZsgm2gAsi31g5RxXiTMnIH2xWNkvUmaO132F6sHVB_Nj6NHNSeyfKZ9vTo6dtiQyYyB0QBWr35OwyaYOnEwytjzLIYKelT9.webp?r=c56" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 9 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">9</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWEZL5Vbt_dlyyWb0jDVlEI20Y6UCH1mePgmg4Pyf7sbXl1oC-bFjLBv3laUDGDGSS-SqrfidxWVL0gDpdiY1K_x3yx6IDtACOY.webp?r=97b" alt="" />
        </div>
    </SwiperSlide>

    {/* Rank 10 */}
    <SwiperSlide className="movie-slide">
        <div class="ranking-card-inner">
            <div class="ranking-number">10</div> 
            <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT--QQ4wqsTMWqkL6PgOy_oo2fHHQ4bFXtP1fEPAZz90nMu3qRQHp1v0eOYP5smMrCHZl1B7ZsgEdJHueVRy3sMN3naXuwV7WR9VrEtQ5ETXLljqiAcT1TeV3zw1bBrtT-m9.webp?r=f63" alt="" />
        </div>
    </SwiperSlide>
    </Swiper>
  );
};
export default Card;