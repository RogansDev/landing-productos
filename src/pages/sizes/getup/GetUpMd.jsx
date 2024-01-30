import React from "react";
import Banner from "../../../../public/img/bannerMd.jpg";
import SexImg from "../../../../public/img-md/get-up/itemsmd1.jpg";
import Banner2 from "../../../../public/img-md/get-up/banner-pareja.jpg";
import BannerHeader from "../../../../public/img-md/get-up/bannerheader.jpg";
import Items1 from "../../../../public/img-md/get-up/items1.jpg";
import Items2 from "../../../../public/img-md/get-up/itemsmd3.png";
import Items3 from "../../../../public/img-md/get-up/items3.jpg";
import { IngreImgMd } from "../../../theme/img";
import { Link } from "react-router-dom";

const GetUpMd = () => {
  const { NaranjaMd, CocoMd, AzucarMd, AloeveraMd, GotaMd } = IngreImgMd;
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
    
  ];

  const questions = [
    {
      id: 1,
      name: "¿Son seguros de usar?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "¿Cuánto tiempo tardan en hacer efecto?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "¿Son necesarios para todas las personas?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "¿Pueden interactuar con otros medicamentos?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "¿Son efectivos para todos los tipos de disfunción sexual?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      name: "¿Cuáles son los efectos secundarios comunes?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 7,
      name: "¿Se pueden tomar a largo plazo?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 8,
      name: "¿Pueden mejorar la calidad de las relaciones sexuales?",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 10.5H15.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 15.75V5.25"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 md:hidden ">
        {/* header */}
        <header className="relative">
          {/* contenedor de banner y titulo del banner y logo */}
          <div className="">
            <section>
              <img
                src={Banner}
                alt="banner-producto"
                className="object-cover w-[40rem] h-[735px]"
              />
            </section>
            <section className="absolute top-5 left-[3.5rem] flex flex-col items-center  gap-7 ">
              <article>
                <svg
                  width="62"
                  height="27"
                  viewBox="0 0 62 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M3.79323 5.28973C4.07666 5.34034 4.31707 5.48965 4.51445 5.73765C4.71184 5.98565 4.81053 6.26654 4.81053 6.58034C4.81053 6.84858 4.73967 7.09152 4.59796 7.30915C4.46131 7.52172 4.26139 7.69127 3.99821 7.8178C3.73503 7.93927 3.42883 8 3.0796 8H0.969086V2.72371H2.98091C3.34025 2.72371 3.64899 2.78444 3.90711 2.90591C4.16523 3.02738 4.36009 3.19187 4.49168 3.39938C4.62327 3.60182 4.68906 3.82958 4.68906 4.08264C4.68906 4.38631 4.60808 4.63937 4.44613 4.84182C4.28417 5.04426 4.06654 5.19357 3.79323 5.28973ZM1.83455 4.94051H2.90499C3.18842 4.94051 3.40858 4.87724 3.56548 4.75071C3.72744 4.61912 3.80842 4.43186 3.80842 4.18892C3.80842 3.95105 3.72744 3.76631 3.56548 3.63472C3.40858 3.49807 3.18842 3.42974 2.90499 3.42974H1.83455V4.94051ZM3.00369 7.29396C3.29723 7.29396 3.52752 7.22311 3.69454 7.08139C3.86156 6.93968 3.94507 6.74229 3.94507 6.48923C3.94507 6.23111 3.8565 6.02613 3.67935 5.8743C3.50221 5.72246 3.26687 5.64655 2.97332 5.64655H1.83455V7.29396H3.00369ZM9.51655 3.81692L6.95053 9.96627H6.05469L6.90498 7.93167L5.25756 3.81692H6.22171L7.39844 7.00548L8.62072 3.81692H9.51655Z"
                      fill="white"
                    />
                    <path
                      d="M3.72123 20.8662H1.07502V13.3044H0L0.785593 10.6453H3.72123V11.7464C3.98998 11.3932 4.3001 11.1024 4.65154 10.8946C4.98231 10.6869 5.41647 10.583 5.95396 10.583C6.05733 10.583 6.18139 10.583 6.3261 10.583C6.47081 10.583 6.61552 10.6038 6.76023 10.6246L5.93329 13.3668C5.02365 13.2629 4.38279 13.4914 4.01065 14.0523C3.86594 14.2808 3.78325 14.5301 3.76258 14.7794C3.72123 15.0287 3.72123 15.278 3.72123 15.5065V20.8662Z"
                      fill="white"
                    />
                    <path
                      d="M17.7777 15.6554C17.7777 16.424 17.633 17.1303 17.3642 17.7744C17.0954 18.4183 16.7233 18.9793 16.2478 19.4363C15.7723 19.8933 15.2348 20.2672 14.6146 20.5373C13.9944 20.8074 13.3329 20.932 12.6299 20.932C11.9271 20.932 11.2655 20.8074 10.6453 20.5373C10.0251 20.288 9.48758 19.9141 9.01208 19.4363C8.55727 18.9585 8.18516 18.3976 7.91639 17.7536C7.64764 17.1096 7.50293 16.3825 7.50293 15.593C7.50293 14.9698 7.62697 14.3466 7.87504 13.7441C8.12314 13.1417 8.47458 12.6016 8.92939 12.1238C9.38422 11.646 9.92171 11.272 10.5626 10.9812C11.1828 10.6903 11.8857 10.5449 12.6299 10.5449C13.3742 10.5449 14.0358 10.6903 14.6766 10.9604C15.2968 11.2305 15.855 11.6044 16.3098 12.0822C16.7647 12.56 17.1161 13.1002 17.3848 13.7026C17.6536 14.3466 17.7777 14.9906 17.7777 15.6554ZM15.0901 15.7593C15.0901 15.4061 15.0281 15.0529 14.8834 14.7413C14.7593 14.4297 14.5733 14.1596 14.3459 13.9311C14.1184 13.7026 13.8497 13.5156 13.5603 13.391C13.2708 13.2663 12.9607 13.204 12.6299 13.204C12.2785 13.204 11.9684 13.2663 11.6583 13.4118C11.3689 13.5364 11.1001 13.7234 10.8727 13.9519C10.6453 14.1804 10.4799 14.4505 10.3559 14.7621C10.2318 15.0737 10.1698 15.4061 10.1698 15.78C10.1698 16.1332 10.2318 16.4863 10.3765 16.7772C10.5213 17.0888 10.6866 17.3381 10.914 17.5666C11.1415 17.7951 11.3895 17.9613 11.679 18.1067C11.9684 18.2314 12.2785 18.3145 12.5886 18.3145C12.9401 18.3145 13.2502 18.2522 13.5603 18.1067C13.8704 17.9613 14.1184 17.7744 14.3459 17.5458C14.5733 17.3173 14.7387 17.0473 14.8627 16.7357C15.0281 16.4448 15.0901 16.1124 15.0901 15.7593Z"
                      fill="white"
                    />
                    <path
                      d="M26.2338 10.6488H28.88V20.1011C28.88 20.3296 28.88 20.5373 28.88 20.7658C28.88 20.9736 28.8594 21.2021 28.8179 21.4306C28.7767 21.6591 28.6939 21.8669 28.5905 22.0954C28.4872 22.3239 28.3218 22.5524 28.115 22.7809C27.3501 23.6742 26.1097 24.1105 24.3731 24.1105C23.6289 24.1105 22.8846 24.0274 22.1611 23.8612C21.4375 23.695 20.6933 23.4665 19.949 23.1756L20.8793 20.6827C21.3548 20.8697 21.8716 21.0567 22.3885 21.2229C22.9053 21.3891 23.5049 21.4722 24.1664 21.4722C24.6212 21.4722 24.9933 21.4306 25.2621 21.3267C25.5309 21.2436 25.7376 21.0982 25.8823 20.932C26.027 20.7658 26.1097 20.5581 26.151 20.3088C26.1924 20.0595 26.2131 19.7895 26.2131 19.4986V18.0444L25.5309 20.2257H24.063C23.3601 20.2257 22.6986 20.1011 22.1197 19.8518C21.5202 19.6025 21.0034 19.2493 20.5692 18.8131C20.1351 18.3768 19.7836 17.8575 19.5562 17.255C19.3081 16.6525 19.1841 16.0085 19.1841 15.323C19.1841 14.6998 19.3081 14.0973 19.5355 13.5156C19.763 12.934 20.0937 12.4354 20.5072 11.9991C20.9207 11.5629 21.4168 11.2097 21.9957 10.9396C22.5745 10.6696 23.1947 10.5449 23.877 10.5449C24.3318 10.5449 24.7453 10.6072 25.1174 10.7319C25.4895 10.8565 25.8616 11.0227 26.2131 11.2305V10.6488H26.2338ZM26.2338 17.6289V15.8424C26.2338 14.9698 26.0063 14.3258 25.5722 13.8896C25.138 13.4533 24.6005 13.2248 24.001 13.2248C23.6909 13.2248 23.4015 13.2871 23.1327 13.4325C22.864 13.5572 22.6366 13.7441 22.4505 13.9519C22.2644 14.1596 22.1197 14.4089 22.0164 14.679C21.913 14.9491 21.8716 15.1983 21.8716 15.4684C21.8716 15.7593 21.9337 16.0293 22.037 16.2994C22.1404 16.5487 22.2851 16.7772 22.4919 16.9849C22.6986 17.1927 22.926 17.3381 23.2154 17.4627C23.4842 17.5874 23.8149 17.6497 24.1664 17.6497H26.2338V17.6289Z"
                      fill="white"
                    />
                    <path
                      d="M38.3688 10.6453H41.015V18.2279H42.0899L41.3045 20.887H38.3688V18.5811L37.6864 20.887H36.1775C35.4124 20.887 34.751 20.7831 34.172 20.5962C33.5931 20.4092 33.035 20.056 32.5182 19.5782C31.9808 19.0796 31.5673 18.498 31.2572 17.8332C30.9677 17.1684 30.8022 16.4829 30.8022 15.735C30.8022 15.0495 30.9262 14.3847 31.1951 13.7615C31.464 13.1382 31.8153 12.5981 32.27 12.1203C32.7249 11.6425 33.2624 11.2686 33.8826 10.9985C34.5028 10.7284 35.1645 10.583 35.8674 10.583C36.3842 10.583 36.8389 10.6661 37.2111 10.8115C37.604 10.9569 37.9759 11.1647 38.3481 11.4347V10.6453H38.3688ZM38.3688 18.2279V16.0051C38.3688 15.5481 38.3066 15.1326 38.162 14.7794C38.038 14.4262 37.8519 14.1354 37.6246 13.9069C37.3972 13.6784 37.1284 13.5122 36.8389 13.3875C36.5494 13.2629 36.2187 13.2006 35.888 13.2006C35.5573 13.2006 35.2472 13.2629 34.9577 13.3875C34.6683 13.5122 34.42 13.6991 34.1927 13.9277C33.9653 14.1562 33.7998 14.4262 33.6758 14.7379C33.5519 15.0495 33.4897 15.4026 33.4897 15.7766C33.4897 16.0882 33.5519 16.3998 33.6758 16.6906C33.7998 16.9815 33.9653 17.2515 34.2133 17.4801C34.4409 17.7086 34.7301 17.8955 35.0817 18.0202C35.433 18.1448 35.8259 18.2279 36.2808 18.2279H38.3688Z"
                      fill="white"
                    />
                    <path
                      d="M53.0686 20.8703H50.1122V15.0951C50.1122 14.4719 49.9883 14.0148 49.74 13.724C49.4921 13.4331 49.058 13.2877 48.4378 13.2877H46.6391V20.8703H43.9928V13.3085H42.918L43.6828 10.6494H46.6391V12.9138L47.342 10.6494H48.6858C49.4299 10.6494 50.0916 10.7325 50.6497 10.9195C51.208 11.1064 51.7042 11.4804 52.1177 12.0621C52.4278 12.4983 52.6136 12.9346 52.6757 13.3293C52.7379 13.724 52.7585 14.1395 52.7585 14.555V18.232H53.8127L53.0686 20.8703Z"
                      fill="white"
                    />
                    <path
                      d="M61.0904 13.8861C60.5945 13.5953 60.1395 13.3668 59.7054 13.2213C59.292 13.0759 58.9404 12.9928 58.6718 12.9928C58.4444 12.9928 58.2583 13.0551 58.1134 13.159C57.9895 13.2629 57.9067 13.4291 57.9067 13.6161C57.9067 13.8238 58.0516 14.0108 58.3617 14.1977C58.6512 14.3847 59.168 14.6132 59.9122 14.8833C60.5945 15.1533 61.1113 15.5273 61.4626 16.0051C61.8142 16.4829 62.0001 17.0853 62.0001 17.7709C62.0001 18.1448 61.9176 18.5188 61.7315 18.8927C61.5454 19.2666 61.318 19.599 60.987 19.8898C60.6769 20.1807 60.2844 20.4092 59.85 20.5962C59.4159 20.7831 58.8991 20.8662 58.3617 20.8662C57.5966 20.8662 56.9352 20.7831 56.3769 20.5962C55.8188 20.4092 55.2605 20.2015 54.7437 19.9314L55.4466 17.3762C55.9634 17.6878 56.5011 17.9371 57.0592 18.124C57.6175 18.2902 58.0722 18.3941 58.4444 18.3941C58.713 18.3941 58.9197 18.3318 59.0852 18.2279C59.2505 18.124 59.3332 17.9578 59.3332 17.7293C59.3332 17.5839 59.2714 17.4593 59.168 17.3554C59.0646 17.2515 58.9197 17.1684 58.7751 17.0853C58.3202 16.8984 57.8861 16.7322 57.452 16.5452C57.0386 16.3582 56.6457 16.1505 56.3356 15.9012C56.0049 15.6519 55.7567 15.3611 55.55 15.0079C55.3432 14.6548 55.2399 14.2185 55.2399 13.6784C55.2399 13.2629 55.3226 12.8682 55.4881 12.4942C55.6533 12.1203 55.8809 11.7879 56.1701 11.4971C56.4596 11.2062 56.8112 10.9777 57.2247 10.8115C57.6381 10.6453 58.0928 10.583 58.6096 10.583C59.2298 10.583 59.8088 10.6661 60.3256 10.8323C60.8424 10.9985 61.3593 11.1855 61.8555 11.3932L61.0904 13.8861Z"
                      fill="white"
                    />
                    <path
                      d="M50.3032 24.4775C50.3032 24.1644 50.3734 23.8836 50.514 23.635C50.6545 23.3833 50.8452 23.1869 51.0866 23.0457C51.3309 22.9046 51.6011 22.834 51.8975 22.834C52.2457 22.834 52.5495 22.9184 52.8092 23.0872C53.0689 23.256 53.2581 23.4954 53.3772 23.8053H52.8779C52.7894 23.612 52.6611 23.4631 52.4931 23.3588C52.3281 23.2544 52.1297 23.2023 51.8975 23.2023C51.6744 23.2023 51.4746 23.2544 51.2974 23.3588C51.1201 23.4631 50.9812 23.612 50.8805 23.8053C50.7797 23.9956 50.7293 24.2197 50.7293 24.4775C50.7293 24.7322 50.7797 24.9562 50.8805 25.1496C50.9812 25.3398 51.1201 25.4872 51.2974 25.5915C51.4746 25.6959 51.6744 25.748 51.8975 25.748C52.1297 25.748 52.3281 25.6974 52.4931 25.5961C52.6611 25.4918 52.7894 25.3429 52.8779 25.1496H53.3772C53.2581 25.4565 53.0689 25.6943 52.8092 25.8631C52.5495 26.0289 52.2457 26.1117 51.8975 26.1117C51.6011 26.1117 51.3309 26.0427 51.0866 25.9046C50.8452 25.7634 50.6545 25.5685 50.514 25.3199C50.3734 25.0713 50.3032 24.7905 50.3032 24.4775ZM55.8852 25.3705H54.4925L54.2359 26.0841H53.7961L54.9506 22.8938H55.4316L56.5815 26.0841H56.1417L55.8852 25.3705ZM55.7661 25.0299L55.1888 23.4094L54.6116 25.0299H55.7661ZM58.7662 26.0841L58.0057 24.7721H57.5018V26.0841H57.0849V22.8754H58.1157C58.3568 22.8754 58.5601 22.9168 58.725 22.9997C58.8928 23.0826 59.0182 23.1946 59.1007 23.3358C59.1831 23.477 59.2244 23.6381 59.2244 23.8191C59.2244 24.0401 59.1602 24.235 59.0319 24.4038C58.9065 24.5726 58.7173 24.6846 58.4639 24.7399L59.2656 26.0841H58.7662ZM57.5018 24.436H58.1157C58.3416 24.436 58.5111 24.3808 58.6242 24.2703C58.737 24.1567 58.7937 24.0064 58.7937 23.8191C58.7937 23.6289 58.737 23.4816 58.6242 23.3772C58.5143 23.2728 58.3448 23.2207 58.1157 23.2207H57.5018V24.436ZM60.2889 23.2161V24.2887H61.4526V24.634H60.2889V25.7388H61.59V26.0841H59.872V22.8708H61.59V23.2161H60.2889Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </article>
              <article className="flex flex-col items-center justify-center -mb-4 relative ">
                <span className="text-xl text-primary-30 -mb-6">
                  Suplemento vitamínico
                </span>
                <h1 className="text-[6rem] font-normal -mb-4">Get up</h1>
                <p className="text-xl text-primary-40 mb-6">
                  Afrodisiaco para hombres
                </p>
                <button className="py-3 px-10 w-[20rem]  bg-black rounded-xl text-white flex items-center justify-center gap-2">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 6.39143V5.5831C6.75 3.7081 8.25833 1.86643 10.1333 1.69143C12.3667 1.47476 14.25 3.2331 14.25 5.42476V6.57476"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99986 18.3332H12.9999C16.3499 18.3332 16.9499 16.9915 17.1249 15.3582L17.7499 10.3582C17.9749 8.32484 17.3915 6.6665 13.8332 6.6665H7.16652C3.60819 6.6665 3.02486 8.32484 3.24986 10.3582L3.87486 15.3582C4.04986 16.9915 4.64986 18.3332 7.99986 18.3332Z"
                      stroke="#FFFFFF"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4131 10.0002H13.4206"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.57859 10.0002H7.58608"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Adquiérelo ahora
                </button>
              </article>
            </section>
          </div>
          {/* seccion de parrafo y ventajas */}
          <div className="flex items-center justify-center gap-3 mb-20">
            <article className="text-xl font-bold pl-4">
              Obtén una <br /> asesoría gratis en tu primera <br /> compra
            </article>
            <article className="flex flex-col gap-4 rounded-md relative bottom-8 right-4 bg-white w-[10rem]">
              <section className="flex flex-col items-center justify-center gap-4 p-5 ">
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
                <h2 className="text-center">
                  Libre <br />
                  de costo
                </h2>
              </section>
              <section className="flex flex-col items-center justify-center gap-4 mb-4">
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
                <h2 className="text-center">
                  Donde te encuentres <br /> (Telemedicina)
                </h2>
              </section>
              <section className="flex flex-col items-center justify-center gap-4">
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
                <h2 className="text-center">
                  Asesoría <br /> personalizada
                </h2>
              </section>
            </article>
          </div>
          {/* imagen del producto */}
          <div className="flex flex-col items-center justify-center gap-4 mb-[4rem]">
            <img src={BannerHeader} alt="" className="w-full mb-12" />
            <section className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-medium text-secondary-40 mb-8">
                Una dosis diaria de pasión{" "}
              </h2>
              <p className="text-xl text-primary-30 w-[98%] p-1 text-center">
                <span className="font-medium text-black">Get up </span>
                es un producto con ingredientes naturales, mejorar la salud y el
                bienestar sexual de los hombres. Brinda una experiencia
                placentera y duradera, sin causar adicción u otras afecciones
              </p>
            </section>
          </div>
          {/* seccion de items y banner secondario */}
          <section>
            <article className="flex items-center gap-5 p-2 mb-4">
              <img src={SexImg} alt="" className="h-[145px]  relative left-2"/>
              <h2 className="text-2xl text-secondary-40 ">
                Revitaliza tu <br /> vida Íntima con <br /> Get Up
              </h2>
            </article>
            <article className="flex items-center justify-center gap-4 mb-4">
              <section>
                <img src={Items1} alt="" className="h-[168px]" />
                <h2 className="absolute bottom-[20.4rem] left-7  text-xl text-white">
                  Mejora de la <br /> disfunción <br /> eréctil
                </h2>
              </section>
              <section>
                <img src={Items2} alt="" className="rounded-[13px]"/>
                <h2 className="absolute bottom-[20.4rem] left-[15rem] text-xl text-white">
                  Incremento en <br /> la resistencia <br /> sexual
                </h2>
              </section>
            </article>
          </section>
          <section className="p-3">
            <img src={Items3} alt="" className="-z-10" />
            <h2 className="text-3xl text-white absolute bottom-12 left-12">
              Revitaliza tu <br /> vida Íntima con <br />
              Get Up
            </h2>
          </section>
        </header>
        <main>
          {/* texto y bottom adquierelo ya */}
          <section className="flex items-center justify-between p-4">
            <h2 className="text-2xl font-semibold w-[50%]">
               Único  producto con asesoría  <br />médica sexual en tu primera compra
            </h2>
            <Link to="https://rogansya.com/checkout/"  className="py-2 text-sm bg-black rounded-md w-[12rem] text-white flex items-center justify-center gap-2 relative top-[2.5rem]">
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
          </section>
          {/* banner */}
          <section className="mb-20">
            <img src={Banner2} alt="" className="p-4"/>
          </section>
          <section className="mb-20 w-full h-[37rem]">
            <section>
              <article>
                <img
                  src={NaranjaMd}
                  alt="IMG-NARANJA"
                  className="relative left-[16rem]"
                />
                <img
                  src={CocoMd}
                  alt="IMG-COCO"
                  className="relative bottom-[6rem]"
                />
                <img src={AzucarMd} alt="AZUCAR.IMG" />
                <img
                  src={AloeveraMd}
                  alt="ALOE-IMG"
                  className="relative left-[17rem] bottom-[7rem]"
                />
                <img
                  src={GotaMd}
                  alt="GOTA-IMG"
                  className="relative bottom-[27rem] left-[22rem]"
                />
              </article>
              <article className="flex flex-col items-center justify-center gap-5 relative bottom-[39rem]">
                <article className="">
                  <h2 className="text-2xl text-secondary-40">
                    Ingredientes Get Up
                  </h2>
                </article>
                <article className="flex items-center justify-center gap-3">
                  {ingredientes.map((ing) => (
                    <section className="flex flex-grow  items-center justify-center gap-3">
                      <span className="block">{ing.name}</span>
                      <span>{ing.icon}</span>
                    </section>
                  ))}
                </article>
              </article>
            </section>
          </section>
          {/* PREGUNTAS */}
          <section className="flex flex-col items-center justify-center gap-4">
             {questions.map((quest) => (
                <article className="flex items-start gap-4 p-2 w-auto " key={quest.id}>
                    <span className="w-[96%] text-center text-sm">{quest.name}</span>
                </article>
             ))}
             <span className="h-20"></span>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GetUpMd;
