import React from "react";
import DetailPart from "../../../../public/img/detailParttwo.jpg";
import DownBanner from "../../../../public/img/pie-img.jpg";
import { GetImgLg, IngreImg } from "../../../theme/img";
import { Link } from "react-router-dom";

const GetUpLg = () => {
  const {
    Banner,
    BannerFoot,
    Second,
    SeccionBanner,
    ScreenFirst,
    ScreenSecond,
    ScreenThrid,
  } = GetImgLg;


  const { Naranja, Coco, Aloevera, Azucar, Gota, GotaC, GotaIz } = IngreImg;

  
  const ingredientes = [
    {
      id: 1,
      name: "Agua",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.447266"
            y="6.5"
            width="9.19222"
            height="9.19222"
            rx="1"
            transform="rotate(-45 0.447266 6.5)"
            fill="#404040"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Aloe vera",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.447266"
            y="6.5"
            width="9.19222"
            height="9.19222"
            rx="1"
            transform="rotate(-45 0.447266 6.5)"
            fill="#404040"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Malta",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.447266"
            y="6.5"
            width="9.19222"
            height="9.19222"
            rx="1"
            transform="rotate(-45 0.447266 6.5)"
            fill="#404040"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Borojó",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.447266"
            y="6.5"
            width="9.19222"
            height="9.19222"
            rx="1"
            transform="rotate(-45 0.447266 6.5)"
            fill="#404040"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Maca Prebióticos",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.447266"
            y="6.5"
            width="9.19222"
            height="9.19222"
            rx="1"
            transform="rotate(-45 0.447266 6.5)"
            fill="#404040"
          />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Palasitone",
    },
  ];

  return (
    <div className="relative flex flex-col gap-4">
      <header className="mb-20">
        {/* banner */}
        <section>
          <img src={Banner} alt="" className="w-auto p-8" />
        </section>
        {/* titulo y texto del banner*/}
        <section className="flex flex-col items-center justify-between p-8  rounded-md absolute top-[20rem] left-[3rem]">
          <article className="relative bottom-[19rem] right-[4rem]">
            <svg
              width="142"
              height="60"
              viewBox="0 0 142 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  d="M8.23611 10.7926C8.88525 10.9085 9.43586 11.2505 9.88794 11.8185C10.34 12.3865 10.5661 13.0298 10.5661 13.7485C10.5661 14.3629 10.4038 14.9193 10.0792 15.4177C9.76622 15.9046 9.30835 16.2929 8.70558 16.5827C8.10281 16.8609 7.4015 17 6.60167 17H1.76791V4.91558H6.37563C7.19865 4.91558 7.90575 5.05469 8.49693 5.33289C9.08811 5.61109 9.53439 5.98782 9.83578 6.46309C10.1372 6.92676 10.2879 7.44838 10.2879 8.02797C10.2879 8.72348 10.1024 9.30307 9.73145 9.76674C9.36051 10.2304 8.86207 10.5724 8.23611 10.7926ZM3.7501 9.99278H6.20176C6.8509 9.99278 7.35514 9.84788 7.71448 9.55809C8.08542 9.2567 8.27089 8.82781 8.27089 8.2714C8.27089 7.72659 8.08542 7.30349 7.71448 7.0021C7.35514 6.68912 6.8509 6.53264 6.20176 6.53264H3.7501V9.99278ZM6.4278 15.3829C7.10012 15.3829 7.62754 15.2207 8.01007 14.8961C8.3926 14.5715 8.58386 14.1194 8.58386 13.5399C8.58386 12.9487 8.38101 12.4792 7.9753 12.1315C7.56959 11.7837 7.03057 11.6098 6.35825 11.6098H3.7501V15.3829H6.4278ZM21.3444 7.41941L15.4673 21.5034H13.4156L15.363 16.8435L11.5899 7.41941H13.7981L16.4932 14.7222L19.2926 7.41941H21.3444Z"
                  fill="white"
                />
                <path
                  d="M8.52283 47.8942H2.46215V30.5752H0L1.79926 24.485H8.52283V27.0067C9.13835 26.1979 9.84863 25.5318 10.6535 25.056C11.4111 24.5802 12.4055 24.3423 13.6365 24.3423C13.8732 24.3423 14.1574 24.3423 14.4888 24.3423C14.8203 24.3423 15.1517 24.3899 15.4831 24.4374L13.5892 30.718C11.5058 30.4801 10.038 31.0034 9.18569 32.2881C8.85426 32.8114 8.66487 33.3824 8.61752 33.9534C8.52283 34.5243 8.52283 35.0953 8.52283 35.6187V47.8942Z"
                  fill="white"
                />
                <path
                  d="M40.716 35.9526C40.716 37.7131 40.3846 39.3308 39.769 40.8058C39.1535 42.2807 38.3013 43.5654 37.2122 44.6121C36.1232 45.6589 34.8921 46.5153 33.4716 47.1339C32.0512 47.7524 30.536 48.0379 28.9261 48.0379C27.3163 48.0379 25.8011 47.7524 24.3806 47.1339C22.9602 46.5629 21.7291 45.7065 20.64 44.6121C19.5984 43.5178 18.7461 42.2331 18.1305 40.7582C17.515 39.2832 17.1836 37.6179 17.1836 35.8099C17.1836 34.3825 17.4677 32.9551 18.0359 31.5753C18.6041 30.1955 19.409 28.9584 20.4506 27.8641C21.4924 26.7698 22.7234 25.9133 24.1912 25.2472C25.6117 24.5811 27.2216 24.248 28.9261 24.248C30.6307 24.248 32.1459 24.5811 33.6137 25.1996C35.0341 25.8182 36.3126 26.6746 37.3542 27.7689C38.396 28.8633 39.2009 30.1003 39.8164 31.4801C40.432 32.9551 40.716 34.4301 40.716 35.9526ZM34.5607 36.1906C34.5607 35.3817 34.4186 34.5728 34.0872 33.8591C33.8031 33.1454 33.3769 32.5269 32.8561 32.0036C32.3353 31.4801 31.7198 31.0519 31.0568 30.7665C30.394 30.481 29.6837 30.3382 28.9261 30.3382C28.1212 30.3382 27.411 30.481 26.7007 30.814C26.0378 31.0995 25.4223 31.5277 24.9014 32.0511C24.3806 32.5745 24.0018 33.193 23.7178 33.9067C23.4337 34.6204 23.2916 35.3817 23.2916 36.2381C23.2916 37.047 23.4337 37.8558 23.7651 38.522C24.0965 39.2356 24.4753 39.8066 24.9961 40.3299C25.517 40.8534 26.0852 41.234 26.7481 41.567C27.411 41.8525 28.1212 42.0428 28.8314 42.0428C29.6364 42.0428 30.3466 41.9001 31.0568 41.567C31.7671 41.234 32.3353 40.8058 32.8561 40.2824C33.3769 39.759 33.7558 39.1405 34.0398 38.4268C34.4186 37.7606 34.5607 36.9994 34.5607 36.1906Z"
                  fill="white"
                />
                <path
                  d="M60.0835 24.4859H66.1444V46.1347C66.1444 46.658 66.1444 47.1339 66.1444 47.6572C66.1444 48.133 66.0971 48.6564 66.002 49.1798C65.9076 49.7032 65.7181 50.179 65.4813 50.7023C65.2446 51.2257 64.8658 51.7491 64.3923 52.2725C62.6404 54.3184 59.7994 55.3175 55.8221 55.3175C54.1176 55.3175 52.413 55.1272 50.7557 54.7466C49.0985 54.366 47.394 53.8426 45.6894 53.1764L47.8201 47.4669C48.9091 47.8951 50.0929 48.3233 51.2766 48.704C52.4603 49.0847 53.8335 49.275 55.3486 49.275C56.3903 49.275 57.2426 49.1798 57.8581 48.9419C58.4737 48.7515 58.9471 48.4185 59.2786 48.0379C59.61 47.6572 59.7994 47.1815 59.8941 46.6105C59.9888 46.0395 60.0362 45.421 60.0362 44.7549V41.4243L58.4737 46.4201H55.1119C53.502 46.4201 51.9868 46.1347 50.661 45.5637C49.288 44.9928 48.1042 44.1839 47.1099 43.1848C46.1156 42.1856 45.3106 40.9961 44.7898 39.6163C44.2216 38.2364 43.9375 36.7615 43.9375 35.1914C43.9375 33.7639 44.2216 32.3842 44.7424 31.0519C45.2633 29.7197 46.0209 28.5778 46.9678 27.5786C47.9148 26.5795 49.0512 25.7706 50.377 25.1521C51.7028 24.5335 53.1232 24.248 54.6857 24.248C55.7274 24.248 56.6744 24.3908 57.5266 24.6763C58.379 24.9617 59.2312 25.3424 60.0362 25.8182V24.4859H60.0835ZM60.0835 40.4727V36.3809C60.0835 34.3825 59.5626 32.9075 58.5684 31.9084C57.574 30.9092 56.343 30.3858 54.9698 30.3858C54.2596 30.3858 53.5967 30.5286 52.9811 30.8616C52.3656 31.1471 51.8448 31.5753 51.4187 32.0511C50.9925 32.5269 50.661 33.0979 50.4243 33.7164C50.1876 34.335 50.0929 34.9059 50.0929 35.5244C50.0929 36.1906 50.2349 36.8091 50.4717 37.4276C50.7084 37.9985 51.0398 38.522 51.5134 38.9977C51.9868 39.4735 52.5077 39.8066 53.1705 40.092C53.7861 40.3775 54.5437 40.5203 55.3486 40.5203H60.0835V40.4727Z"
                  fill="white"
                />
                <path
                  d="M87.8747 24.485H93.9354V41.8516H96.3972L94.5984 47.9418H87.8747V42.6604L86.3119 47.9418H82.856C81.1037 47.9418 79.5888 47.7039 78.2628 47.2757C76.9368 46.8475 75.6587 46.0386 74.475 44.9443C73.2441 43.8023 72.2972 42.4701 71.587 40.9476C70.924 39.425 70.5449 37.8549 70.5449 36.142C70.5449 34.5719 70.8289 33.0493 71.4447 31.622C72.0604 30.1946 72.8651 28.9575 73.9065 27.8632C74.9485 26.7688 76.1794 25.9124 77.5998 25.2939C79.0203 24.6753 80.5358 24.3423 82.1457 24.3423C83.3294 24.3423 84.3708 24.5326 85.2233 24.8657C86.1231 25.1987 86.9749 25.6745 87.8275 26.293V24.485H87.8747ZM87.8747 41.8516V36.7606C87.8747 35.7138 87.7324 34.7622 87.4012 33.9534C87.1172 33.1445 86.691 32.4784 86.1703 31.955C85.6496 31.4317 85.0338 31.051 84.3708 30.7655C83.7078 30.4801 82.9504 30.3373 82.193 30.3373C81.4355 30.3373 80.7253 30.4801 80.0623 30.7655C79.3993 31.051 78.8308 31.4793 78.3101 32.0026C77.7894 32.526 77.4103 33.1445 77.1264 33.8582C76.8424 34.5719 76.7001 35.3807 76.7001 36.2372C76.7001 36.9509 76.8424 37.6645 77.1264 38.3307C77.4103 38.9968 77.7894 39.6153 78.3573 40.1387C78.8786 40.6621 79.541 41.0903 80.3463 41.3758C81.1509 41.6612 82.0507 41.8516 83.0927 41.8516H87.8747Z"
                  fill="white"
                />
                <path
                  d="M121.545 47.896H114.774V34.6688C114.774 33.2414 114.49 32.1947 113.922 31.5286C113.354 30.8625 112.359 30.5294 110.939 30.5294H106.819V47.896H100.759V30.577H98.2969L100.048 24.4868H106.819V29.673L108.429 24.4868H111.507C113.211 24.4868 114.727 24.6771 116.005 25.1054C117.284 25.5336 118.42 26.39 119.367 27.7222C120.077 28.7214 120.503 29.7206 120.645 30.6246C120.788 31.5286 120.835 32.4802 120.835 33.4318V41.8533H123.249L121.545 47.896Z"
                  fill="white"
                />
                <path
                  d="M139.916 31.9075C138.781 31.2414 137.739 30.718 136.744 30.3849C135.797 30.0518 134.992 29.8615 134.377 29.8615C133.856 29.8615 133.43 30.0043 133.098 30.2422C132.814 30.4801 132.625 30.8607 132.625 31.2889C132.625 31.7647 132.957 32.1929 133.667 32.6211C134.33 33.0493 135.514 33.5728 137.218 34.1913C138.781 34.8098 139.964 35.6663 140.769 36.7606C141.574 37.8549 142 39.2347 142 40.8048C142 41.6612 141.811 42.5177 141.385 43.3741C140.958 44.2306 140.438 44.9919 139.68 45.6579C138.97 46.324 138.07 46.8475 137.076 47.2757C136.081 47.7039 134.898 47.8942 133.667 47.8942C131.915 47.8942 130.4 47.7039 129.121 47.2757C127.843 46.8475 126.564 46.3717 125.38 45.7531L126.99 39.9009C128.174 40.6145 129.406 41.1855 130.684 41.6137C131.962 41.9943 133.004 42.2323 133.856 42.2323C134.471 42.2323 134.945 42.0895 135.324 41.8516C135.702 41.6137 135.892 41.233 135.892 40.7097C135.892 40.3766 135.75 40.0912 135.514 39.8532C135.277 39.6153 134.945 39.425 134.614 39.2347C133.572 38.8065 132.578 38.4259 131.583 37.9977C130.636 37.5694 129.737 37.0936 129.027 36.5227C128.269 35.9517 127.701 35.2856 127.227 34.4767C126.754 33.6679 126.517 32.6687 126.517 31.4317C126.517 30.4801 126.706 29.576 127.085 28.7196C127.464 27.8632 127.985 27.1019 128.647 26.4358C129.31 25.7697 130.116 25.2463 131.063 24.8657C132.01 24.485 133.051 24.3423 134.235 24.3423C135.655 24.3423 136.981 24.5326 138.165 24.9132C139.349 25.2939 140.532 25.7221 141.669 26.1979L139.916 31.9075Z"
                  fill="white"
                />
                <path
                  d="M115.212 56.1528C115.212 55.4358 115.373 54.7926 115.695 54.2233C116.017 53.6469 116.453 53.197 117.006 52.8737C117.566 52.5503 118.185 52.3887 118.863 52.3887C119.661 52.3887 120.357 52.582 120.951 52.9686C121.546 53.3552 121.98 53.9035 122.252 54.6134H121.109C120.906 54.1705 120.612 53.8297 120.227 53.5906C119.85 53.3516 119.395 53.2322 118.863 53.2322C118.352 53.2322 117.895 53.3516 117.489 53.5906C117.083 53.8297 116.765 54.1705 116.534 54.6134C116.303 55.0492 116.188 55.5623 116.188 56.1528C116.188 56.7361 116.303 57.2493 116.534 57.6921C116.765 58.1279 117.083 58.4653 117.489 58.7043C117.895 58.9433 118.352 59.0628 118.863 59.0628C119.395 59.0628 119.85 58.9468 120.227 58.7149C120.612 58.4758 120.906 58.135 121.109 57.6921H122.252C121.98 58.3951 121.546 58.9398 120.951 59.3264C120.357 59.706 119.661 59.8957 118.863 59.8957C118.185 59.8957 117.566 59.7376 117.006 59.4213C116.453 59.0979 116.017 58.6516 115.695 58.0822C115.373 57.5129 115.212 56.8697 115.212 56.1528ZM127.996 58.1982H124.807L124.219 59.8325H123.212L125.856 52.5257H126.958L129.591 59.8325H128.584L127.996 58.1982ZM127.724 57.418L126.402 53.7066L125.079 57.418H127.724ZM134.595 59.8325L132.853 56.8275H131.699V59.8325H130.744V52.4836H133.105C133.657 52.4836 134.123 52.5785 134.5 52.7682C134.885 52.958 135.172 53.2146 135.361 53.5379C135.55 53.8613 135.644 54.2303 135.644 54.645C135.644 55.1511 135.497 55.5974 135.203 55.9841C134.916 56.3707 134.483 56.6272 133.902 56.7537L135.739 59.8325H134.595ZM131.699 56.0579H133.105C133.622 56.0579 134.011 55.9313 134.27 55.6783C134.528 55.4182 134.658 55.0738 134.658 54.645C134.658 54.2092 134.528 53.8718 134.27 53.6328C134.018 53.3938 133.63 53.2743 133.105 53.2743H131.699V56.0579ZM138.082 53.2638V55.7205H140.747V56.5112H138.082V59.0417H141.062V59.8325H137.128V52.473H141.062V53.2638H138.082Z"
                  fill="white"
                />
              </g>
            </svg>
          </article>
          <article className="flex flex-col relative bottom-[11rem]">
            <span className="text-primary-40 -mb-5">Suplemento vitamínico</span>
            <h2 className="uppercase font-medium text-[4rem]">Get up</h2>
            <p className="font-semibold text-xl leading-7 mb-6">
              Afrodisiaco para <br /> hombres
            </p>
            <Link to="https://rogansya.com/checkout/" className="flex items-center justify-center cursor-pointer gap-4 bg-black py-3 px-4 rounded-md text-white w-[17rem]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 6.39143V5.5831C6.75 3.7081 8.25833 1.86643 10.1333 1.69143C12.3667 1.47476 14.25 3.2331 14.25 5.42476V6.57476"
                  stroke="#FCFCFC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99986 18.3332H12.9999C16.3499 18.3332 16.9499 16.9915 17.1249 15.3582L17.7499 10.3582C17.9749 8.32484 17.3915 6.6665 13.8332 6.6665H7.16652C3.60819 6.6665 3.02486 8.32484 3.24986 10.3582L3.87486 15.3582C4.04986 16.9915 4.64986 18.3332 7.99986 18.3332Z"
                  stroke="#FCFCFC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4131 10.0002H13.4206"
                  stroke="#FCFCFC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.57859 10.0002H7.58608"
                  stroke="#FCFCFC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Adquiérelo ahora
            </Link>
          </article>
        </section>
        {/* categoria de items */}
        <section className="flex items-center justify-center gap-6 relative bottom-[3.5rem] mb-6">
          <article className="rounded-t-lg bg-white w-[40rem] h-[8rem] flex items-center justify-between gap-4 shadow-lg p-5">
            <section className="flex items-center justify-center gap-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.22656 11.9412C7.22656 13.0162 8.05156 13.8829 9.07656 13.8829H11.1682C12.0599 13.8829 12.7849 13.1245 12.7849 12.1912C12.7849 11.1745 12.3432 10.8162 11.6849 10.5829L8.32656 9.41621C7.66823 9.18288 7.22656 8.82454 7.22656 7.80788C7.22656 6.87454 7.95156 6.11621 8.84323 6.11621H10.9349C11.9599 6.11621 12.7849 6.98288 12.7849 8.05788"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5V15"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>
                Libre <br />
                de costo
              </h2>
            </section>
            <section className="flex items-center justify-center gap-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.441 17.0167H5.17435C2.54102 17.0167 1.66602 15.2667 1.66602 13.5084V6.49173C1.66602 3.8584 2.54102 2.9834 5.17435 2.9834H10.441C13.0743 2.9834 13.9493 3.8584 13.9493 6.49173V13.5084C13.9493 16.1417 13.066 17.0167 10.441 17.0167Z"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2659 14.2501L13.9492 12.6251V7.36678L16.2659 5.74178C17.3992 4.95011 18.3326 5.43344 18.3326 6.82511V13.1751C18.3326 14.5668 17.3992 15.0501 16.2659 14.2501Z"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.58398 9.16699C10.2743 9.16699 10.834 8.60735 10.834 7.91699C10.834 7.22664 10.2743 6.66699 9.58398 6.66699C8.89363 6.66699 8.33398 7.22664 8.33398 7.91699C8.33398 8.60735 8.89363 9.16699 9.58398 9.16699Z"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>
                Donde te encuentres <br /> (Telemedicina)
              </h2>
            </section>
            <section className="flex items-center justify-center gap-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33268 5.00033H11.666C13.3327 5.00033 13.3327 4.16699 13.3327 3.33366C13.3327 1.66699 12.4993 1.66699 11.666 1.66699H8.33268C7.49935 1.66699 6.66602 1.66699 6.66602 3.33366C6.66602 5.00033 7.49935 5.00033 8.33268 5.00033Z"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3333 3.34961C16.1083 3.49961 17.5 4.52461 17.5 8.33294V13.3329C17.5 16.6663 16.6667 18.3329 12.5 18.3329H7.5C3.33333 18.3329 2.5 16.6663 2.5 13.3329V8.33294C2.5 4.53294 3.89167 3.49961 6.66667 3.34961"
                  stroke="#F08080"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>
                Donde te encuentres <br /> (Telemedicina)
              </h2>
            </section>
          </article>
          <article>
            <p className="text-xl font-semibold relative top-[3rem]">
               Único  producto con asesoría  <br />médica sexual en tu primera compra
            </p>
          </article>
        </section>
      </header>
      {/* seccion de contenido de producto */}
      <div className="flex items-center justify-center gap-6 relative left-[1rem] mb-20">
        <article className="]">
          <h1 className="text-4xl font-medium text-secondary-40 mb-8">
            Revitaliza <br /> tu vida Íntima con <br /> Get Up
          </h1>
          <p className="w-[25rem]">
            Get Up es un producto con ingredientes naturales, mejorar la salud y
            el bienestar sexual de los hombres. Brinda una experiencia
            placentera y duradera, sin causar adicción u otras afecciones
          </p>
        </article>
        <article className="">
          <img
            src={Second}
            alt=""
            className="object-cover w-[552px] h-[503px] rounded-md"
          />
        </article>
      </div>
      {/* seccion de banner secondario */}
      <div className="mx-auto p-5 relative ">
        <img src={SeccionBanner} alt="" className="object-cover w-full h-[30rem]" />
      </div>
      {/* seccion de fotos */}
      <div className="flex items-center gap-4 p-5 relative bottom-[4rem] left-[9.5rem] m-5">
        <section className="relative ">
          <img src={ScreenFirst} alt="" className="w-[19rem]"/>
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Mejora de la <br /> disfunción eréctil
          </h2>
        </section>
        <section className="relative">
          <img src={ScreenSecond} alt="" className="w-[19rem]"/>
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Mejora del rendimiento <br /> físico y energía
          </h2>
        </section>
        <section className="relative">
          <img src={ScreenThrid} alt="" className="w-[19rem]"/>
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Incremento en la <br /> resistencia sexual
          </h2>
        </section>
      </div>
      {/* adquierelo ya */}
      <Link to="https://rogansya.com/checkout/" className="relative bottom-9 left-[2rem] mb-20">
        <img src={BannerFoot} alt="banner-adqierele-ya" />
      </Link>
      {/* los ingredientes */}
      <section className="mb-20  w-full h-[37rem] ">
        {/* <img src={DownBanner} alt="" /> transform rotate-45 animate-spin*/}
        <section>
          <section>
            <img
              src={Naranja}
              alt=""
              className="animate-bounce w-[263px] h-[166px] relative left-[58rem] top-[2rem]"
            />
            <img
              src={Aloevera}
              alt=""
              className="animate-bounce relative left-[74.2rem] top-[10rem]"
            />
            <img
              src={Coco}
              alt=""
              className=" animate-bounce w-[126px] h-[126px] relative left-[7rem] bottom-[20rem]"
            />
            <img
              src={Azucar}
              alt=""
              className=" animate-bounce w-[273px] h-[276px] relative left-1 bottom-[10rem]"
            />
            <img
              src={Gota}
              alt=""
              className=" animate-bounce  relative left-[60rem] bottom-[25rem]"
            />
            <img
              src={GotaC}
              alt=""
              className=" animate-bounce w-[66px] h-[56px] relative left-[20rem] bottom-[44rem]"
            />
            <img
              src={GotaIz}
              alt=""
              className=" animate-bounce w-[100px] h-[116px] relative left-[20rem] bottom-[34rem]"
            />
          </section>
          <section className="flex flex-col items-center justify-center gap-5 relative bottom-[50rem]">
            <article className="">
              <h2 className="text-2xl text-secondary-40">
                Ingredientes Get Up
              </h2>
            </article>
            <article className="flex items-center justify-center">
              {ingredientes.map((ing) => (
                <section className="flex items-center justify-center gap-3">
                  <span className="">{ing.name}</span>
                  <span>{ing.icon}</span>
                </section>
              ))}
            </article>
          </section>
        </section>
      </section>
      {/* preguntas */}
      <section className="flex flex-col justify-start gap-4 relative left-[24rem]">
        <h2 className="text-2xl font-medium text-secondary-40 relative left-[6rem] mb-6">
          Resolvemos tus dudas
        </h2>
        <article className="mb-2">
          <h2>
            ¿Si tengo problemas cardiacos o hipertensión puedo tomar GET UP?
          </h2>
        </article>
        <article>
          <h2>¿Si lo tomo la gente puede notarlo inmediatamente?</h2>
        </article>
        <article className="mb-2">
          <h2>¿Tiene algún efecto secundario si dejo de tomarlo?</h2>
        </article>
        <article className="mb-2">
          <h2 className="w-[60%]">
            ¿si una persona deja de tomar GET UP solo volverá a su estado
            inicial <br /> o al rendimiento sexual que tenía antes de empezar su
            tratamiento?
          </h2>
        </article>
        <article className="mb-2">
          <h2>
            ¿Con Cuánto tiempo de anticipación es recomendado de tomarlo antes
            <br /> del acto sexual?
          </h2>
        </article>
        <article className="mb-2">
          <h2 className="w-[60%]">
            ¿Con get up no es necesario anticipar el acto sexual, simplemente{" "}
            <br />
            se recomienda tomar la dosis diaria indicada y con esto al momento{" "}
            <br />
            del acto sexual las cosas se darán de una manera más fácil para
            beneficiar el <br /> placer en pareja. ?
          </h2>
        </article>
        <article className="h-40"></article>
      </section>
    </div>
  );
};

export default GetUpLg;
