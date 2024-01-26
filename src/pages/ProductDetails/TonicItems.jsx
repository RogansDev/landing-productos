import React from "react";
import Banner from "../../../public/img/tonicbanner.jpg";
import Second from "../../../public/img/tonic-items.jpg";
import Expant from "../../../public/img/bannertonic.jpg";
import ScreenFirst from "../../../public/img/cuadrotonic1.jpg";
import ScreenSecond from "../../../public/img/cuadrotonic2.jpg";
import ScreenThrid from "../../../public/img/cuadrotonic3.jpg";
import DetailPart from "../../../public/img/tonicfooter.jpg";

const TonicItems = () => {
  return (
    <div className="flex flex-col h-auto p-5 overflow-hidden">
      {/* header */}
      <div className="flex items-center mx-auto p-5 mb-4">
        <section className=" relative top-9 left-[9rem] flex flex-col w-[50%]">
          {/* logo */}
          <article className="relative bottom-[8rem]">
            <svg
              width="187"
              height="47"
              viewBox="0 0 187 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2238 31.1419H3.24244V8.33423H0L2.36947 0.313952H11.2238V3.63484C12.0344 2.56966 12.9698 1.69244 14.0298 1.06585C15.0275 0.439269 16.3369 0.125977 17.9581 0.125977C18.2699 0.125977 18.6441 0.125977 19.0806 0.125977C19.517 0.125977 19.9535 0.188635 20.39 0.251294L17.8958 8.52221C15.1522 8.20892 13.2192 8.89812 12.0968 10.5899C11.6603 11.2792 11.4109 12.0311 11.3486 12.783C11.2238 13.5349 11.2238 14.2868 11.2238 14.9761V31.1419Z"
                fill="black"
              />
              <path
                d="M53.6231 15.4139C53.6231 17.7323 53.1866 19.8627 52.3759 21.8052C51.5653 23.7475 50.443 25.4393 49.0088 26.8178C47.5747 28.1963 45.9534 29.3241 44.0828 30.1387C42.2122 30.9533 40.2168 31.3292 38.0967 31.3292C35.9767 31.3292 33.9814 30.9533 32.1107 30.1387C30.2401 29.3868 28.6188 28.259 27.1846 26.8178C25.8129 25.3767 24.6905 23.6849 23.8799 21.7425C23.0693 19.8001 22.6328 17.607 22.6328 15.226C22.6328 13.3463 23.0069 11.4665 23.7552 9.64936C24.5035 7.83231 25.5635 6.20319 26.9352 4.76204C28.3071 3.3209 29.9283 2.19305 31.8613 1.31583C33.7319 0.438609 35.852 0 38.0967 0C40.3415 0 42.3369 0.438609 44.2699 1.25317C46.1405 2.06773 47.8241 3.19558 49.1959 4.63672C50.5677 6.07787 51.6277 7.70699 52.4383 9.52405C53.249 11.4665 53.6231 13.4089 53.6231 15.4139ZM45.517 15.7273C45.517 14.6621 45.3299 13.5969 44.8934 12.657C44.5193 11.7171 43.9581 10.9026 43.2722 10.2134C42.5863 9.52405 41.7757 8.96014 40.9027 8.5842C40.0297 8.20826 39.0945 8.02028 38.0967 8.02028C37.0367 8.02028 36.1014 8.20826 35.1661 8.64687C34.2931 9.0228 33.4825 9.58671 32.7966 10.276C32.1107 10.9652 31.6119 11.7798 31.2378 12.7197C30.8636 13.6596 30.6766 14.6621 30.6766 15.79C30.6766 16.8551 30.8636 17.9203 31.3001 18.7976C31.7366 19.7374 32.2354 20.4893 32.9213 21.1785C33.6072 21.8678 34.3555 22.3691 35.2284 22.8077C36.1014 23.1836 37.0367 23.4342 37.972 23.4342C39.0321 23.4342 39.9674 23.2463 40.9027 22.8077C41.8381 22.3691 42.5863 21.8052 43.2722 21.1159C43.9581 20.4266 44.457 19.6121 44.8311 18.6723C45.3299 17.795 45.517 16.7925 45.517 15.7273Z"
                fill="black"
              />
              <path
                d="M79.1263 0.313292H87.1078V28.8229C87.1078 29.5121 87.1078 30.1387 87.1078 30.828C87.1078 31.4545 87.0457 32.1438 86.9204 32.8331C86.7961 33.5223 86.5465 34.1488 86.2346 34.8381C85.9229 35.5274 85.4241 36.2166 84.8005 36.9058C82.4934 39.6001 78.7521 40.9159 73.5143 40.9159C71.2696 40.9159 69.0248 40.6653 66.8423 40.1641C64.6599 39.6628 62.4152 38.9736 60.1704 38.0963L62.9764 30.5773C64.4105 31.1412 65.9694 31.7052 67.5282 32.2064C69.0871 32.7077 70.8954 32.9584 72.8907 32.9584C74.2626 32.9584 75.3849 32.8331 76.1955 32.5197C77.0062 32.2691 77.6297 31.8305 78.0662 31.3292C78.5026 30.828 78.7521 30.2014 78.8768 29.4494C79.0015 28.6976 79.0639 27.883 79.0639 27.0058V22.6197L77.0062 29.1988H72.579C70.459 29.1988 68.4636 28.8229 66.7176 28.071C64.9094 27.3191 63.3505 26.2539 62.0411 24.9381C60.7316 23.6222 59.6716 22.0558 58.9856 20.2387C58.2374 18.4215 57.8633 16.4792 57.8633 14.4114C57.8633 12.5317 58.2374 10.7146 58.9233 8.96014C59.6092 7.20572 60.6069 5.70192 61.8539 4.38609C63.1011 3.07027 64.5976 2.00507 66.3435 1.19051C68.0895 0.37595 69.9601 0 72.0178 0C73.3896 0 74.6367 0.187976 75.759 0.563926C76.8815 0.939874 78.0038 1.44114 79.0639 2.06773V0.313292H79.1263ZM79.1263 21.3666V15.9779C79.1263 13.3463 78.4403 11.4038 77.1309 10.088C75.8214 8.77217 74.2002 8.08294 72.3919 8.08294C71.4566 8.08294 70.5837 8.27091 69.773 8.70952C68.9624 9.08546 68.2765 9.64937 67.7154 10.276C67.1541 10.9026 66.7176 11.6545 66.4059 12.469C66.0941 13.2836 65.9694 14.0355 65.9694 14.85C65.9694 15.7273 66.1565 16.5418 66.4682 17.3564C66.78 18.1083 67.2164 18.7976 67.8401 19.4241C68.4636 20.0507 69.1495 20.4893 70.0224 20.8652C70.8331 21.2412 71.8307 21.4292 72.8907 21.4292H79.1263V21.3666Z"
                fill="black"
              />
              <path
                d="M115.729 0.313952H123.711V23.1842H126.953L124.584 31.2045H115.729V24.2495L113.671 31.2045H109.12C106.812 31.2045 104.817 30.8912 103.071 30.3273C101.325 29.7634 99.6417 28.6982 98.0829 27.2571C96.4619 25.7532 95.2148 23.9989 94.2795 21.9938C93.4064 19.9887 92.9072 17.921 92.9072 15.6653C92.9072 13.5975 93.2812 11.5924 94.0921 9.71274C94.903 7.83296 95.9627 6.20385 97.3341 4.7627C98.7064 3.32155 100.327 2.1937 102.198 1.37915C104.069 0.564586 106.064 0.125977 108.185 0.125977C109.743 0.125977 111.115 0.37661 112.237 0.81522C113.422 1.25383 114.544 1.88041 115.667 2.69497V0.313952H115.729ZM115.729 23.1842V16.4798C115.729 15.1014 115.542 13.8482 115.106 12.783C114.732 11.7177 114.17 10.8406 113.485 10.1513C112.799 9.46211 111.988 8.96078 111.115 8.58486C110.242 8.20892 109.244 8.02094 108.247 8.02094C107.249 8.02094 106.314 8.20892 105.441 8.58486C104.568 8.96078 103.819 9.52477 103.133 10.214C102.448 10.9032 101.948 11.7177 101.574 12.6577C101.2 13.5975 101.013 14.6627 101.013 15.7906C101.013 16.7304 101.2 17.6703 101.574 18.5476C101.948 19.4248 102.448 20.2393 103.195 20.9286C103.882 21.6178 104.754 22.1817 105.815 22.5577C106.874 22.9336 108.059 23.1842 109.432 23.1842H115.729Z"
                fill="black"
              />
              <path
                d="M160.066 31.1404H151.149V13.7214C151.149 11.8416 150.775 10.4632 150.027 9.58597C149.279 8.7087 147.969 8.27012 146.099 8.27012H140.674V31.1404H132.692V8.33278H129.45L131.757 0.3125H140.674V7.14227L142.794 0.3125H146.847C149.091 0.3125 151.087 0.563134 152.77 1.12706C154.454 1.69099 155.951 2.81884 157.198 4.57327C158.133 5.8891 158.694 7.20492 158.881 8.39544C159.069 9.58597 159.131 10.8391 159.131 12.0923V23.1828H162.311L160.066 31.1404Z"
                fill="black"
              />
              <path
                d="M184.256 10.0887C182.76 9.21149 181.388 8.52221 180.079 8.08359C178.832 7.64499 177.771 7.39436 176.961 7.39436C176.275 7.39436 175.714 7.58233 175.277 7.89562C174.903 8.20892 174.654 8.71015 174.654 9.27415C174.654 9.90071 175.091 10.4646 176.026 11.0285C176.899 11.5924 178.458 12.2817 180.702 13.0963C182.76 13.9108 184.319 15.0387 185.379 16.4798C186.439 17.921 187 19.738 187 21.8058C187 22.9336 186.751 24.0615 186.19 25.1893C185.628 26.3172 184.943 27.3197 183.944 28.1969C183.009 29.0741 181.825 29.7634 180.515 30.3273C179.206 30.8912 177.647 31.1419 176.026 31.1419C173.718 31.1419 171.723 30.8912 170.039 30.3273C168.356 29.7634 166.672 29.1369 165.113 28.3222L167.233 20.6153C168.792 21.5552 170.414 22.307 172.097 22.871C173.781 23.3722 175.153 23.6856 176.275 23.6856C177.086 23.6856 177.709 23.4976 178.208 23.1842C178.707 22.871 178.956 22.3697 178.956 21.6805C178.956 21.2419 178.77 20.8659 178.458 20.5526C178.146 20.2393 177.709 19.9887 177.273 19.738C175.901 19.1741 174.591 18.6729 173.282 18.109C172.035 17.545 170.85 16.9184 169.915 16.1665C168.917 15.4147 168.169 14.5374 167.545 13.4722C166.922 12.4071 166.61 11.0912 166.61 9.46212C166.61 8.20892 166.86 7.0184 167.359 5.89055C167.857 4.7627 168.544 3.76017 169.416 2.88295C170.289 2.00573 171.349 1.31648 172.596 0.81522C173.844 0.313952 175.215 0.125977 176.774 0.125977C178.644 0.125977 180.391 0.37661 181.949 0.87788C183.508 1.37915 185.067 1.94308 186.564 2.56966L184.256 10.0887Z"
                fill="black"
              />
              <path
                d="M151.724 42.017C151.724 41.0729 151.935 40.2259 152.359 39.4761C152.783 38.717 153.358 38.1246 154.086 37.6988C154.823 37.2729 155.638 37.0601 156.532 37.0601C157.582 37.0601 158.499 37.3146 159.282 37.8237C160.065 38.3329 160.636 39.0549 160.995 39.9898H159.489C159.222 39.4066 158.835 38.9577 158.329 38.643C157.831 38.3282 157.233 38.1709 156.532 38.1709C155.859 38.1709 155.257 38.3282 154.722 38.643C154.188 38.9577 153.769 39.4066 153.465 39.9898C153.161 40.5637 153.009 41.2395 153.009 42.017C153.009 42.7853 153.161 43.4611 153.465 44.0443C153.769 44.6181 154.188 45.0625 154.722 45.3772C155.257 45.692 155.859 45.8493 156.532 45.8493C157.233 45.8493 157.831 45.6966 158.329 45.3911C158.835 45.0764 159.222 44.6274 159.489 44.0443H160.995C160.636 44.97 160.065 45.6873 159.282 46.1964C158.499 46.6963 157.582 46.9462 156.532 46.9462C155.638 46.9462 154.823 46.738 154.086 46.3214C153.358 45.8956 152.783 45.3078 152.359 44.558C151.935 43.8082 151.724 42.9612 151.724 42.017ZM168.56 44.7107H164.359L163.585 46.8629H162.259L165.741 37.2406H167.192L170.66 46.8629H169.334L168.56 44.7107ZM168.2 43.6832L166.459 38.7957L164.718 43.6832H168.2ZM177.249 46.8629L174.956 42.9057H173.436V46.8629H172.178V37.185H175.287C176.014 37.185 176.628 37.31 177.125 37.5599C177.631 37.8099 178.009 38.1477 178.258 38.5735C178.507 38.9994 178.631 39.4854 178.631 40.0315C178.631 40.698 178.438 41.2857 178.051 41.7949C177.673 42.304 177.102 42.6419 176.337 42.8085L178.756 46.8629H177.249ZM173.436 41.8921H175.287C175.969 41.8921 176.48 41.7255 176.821 41.3922C177.161 41.0497 177.332 40.5962 177.332 40.0315C177.332 39.4576 177.161 39.0133 176.821 38.6985C176.489 38.3837 175.978 38.2264 175.287 38.2264H173.436V41.8921ZM181.842 38.2125V41.4477H185.352V42.4891H181.842V45.8216H185.766V46.8629H180.585V37.1711H185.766V38.2125H181.842Z"
                fill="black"
              />
            </svg>
          </article>
          {/* titulo */}
          <article className="relative bottom-16">
            <h3 className="mb-2 text-gray-700">Loción Minoxidil (spray)</h3>
            <h1 className="uppercase font-semibold tracking-wider text-secondary-50 text-5xl mb-2">
              Tonic
            </h1>
            <span className="text-2xl text-gray-500 font-medium">
              Mejora el crecimiento capilar <br /> sin resecarlo gracias <br />{" "}
              a extractos naturales
            </span>
            <button className="bg-black text-white flex items-center gap-2 py-3 px-5 rounded-lg relative top-8">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16602 1.66699V4.16699"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.834 1.66699V4.16699"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.41602 7.5752H17.5827"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.8327 15.8333C18.8327 16.4583 18.6577 17.05 18.3493 17.55C17.7743 18.5167 16.716 19.1667 15.4993 19.1667C14.6577 19.1667 13.891 18.8583 13.3077 18.3333C13.0494 18.1167 12.8244 17.85 12.6494 17.55C12.341 17.05 12.166 16.4583 12.166 15.8333C12.166 13.9917 13.6577 12.5 15.4993 12.5C16.4993 12.5 17.391 12.9417 17.9993 13.6333C18.516 14.225 18.8327 14.9917 18.8327 15.8333Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1992 15.8333L15.0242 16.6583L16.7992 15.0166"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.08366V13.6336C17.3917 12.942 16.5 12.5003 15.5 12.5003C13.6583 12.5003 12.1667 13.992 12.1667 15.8337C12.1667 16.4587 12.3417 17.0503 12.65 17.5503C12.825 17.8503 13.05 18.117 13.3083 18.3337H7.16667C4.25 18.3337 3 16.667 3 14.167V7.08366C3 4.58366 4.25 2.91699 7.16667 2.91699H13.8333C16.75 2.91699 18 4.58366 18 7.08366Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4961 11.4167H10.5036"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.41209 11.4167H7.41957"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.41209 13.9167H7.41957"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Agenda tu cita gratis
            </button>

            <button className="bg-black text-white flex items-center gap-2 py-2 px-12 rounded-lg relative left-[30rem] top-[6rem]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16602 1.66699V4.16699"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.834 1.66699V4.16699"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.41602 7.5752H17.5827"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.8327 15.8333C18.8327 16.4583 18.6577 17.05 18.3493 17.55C17.7743 18.5167 16.716 19.1667 15.4993 19.1667C14.6577 19.1667 13.891 18.8583 13.3077 18.3333C13.0494 18.1167 12.8244 17.85 12.6494 17.55C12.341 17.05 12.166 16.4583 12.166 15.8333C12.166 13.9917 13.6577 12.5 15.4993 12.5C16.4993 12.5 17.391 12.9417 17.9993 13.6333C18.516 14.225 18.8327 14.9917 18.8327 15.8333Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1992 15.8333L15.0242 16.6583L16.7992 15.0166"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.08366V13.6336C17.3917 12.942 16.5 12.5003 15.5 12.5003C13.6583 12.5003 12.1667 13.992 12.1667 15.8337C12.1667 16.4587 12.3417 17.0503 12.65 17.5503C12.825 17.8503 13.05 18.117 13.3083 18.3337H7.16667C4.25 18.3337 3 16.667 3 14.167V7.08366C3 4.58366 4.25 2.91699 7.16667 2.91699H13.8333C16.75 2.91699 18 4.58366 18 7.08366Z"
                  stroke="#FCFCFC"
                  strokeWidth="1.25"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4961 11.4167H10.5036"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.41209 11.4167H7.41957"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.41209 13.9167H7.41957"
                  stroke="#FCFCFC"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Agenda tu cita gratis
            </button>
          </article>
        </section>
        {/* banner primario*/}
        <section className="flex items-center p-5 w-[50%]">
          <article>
            <img src={Banner} alt="" />
          </article>
          <article></article>
        </section>
      </div>
      {/* seccion de producto */}
      <div className="flex items-center relative left-[10rem] mb-2">
        <article className="w-[50%]">
          <img src={Second} alt="" className="object-cover" />
        </article>
        <article className="w-[50%]">
          <h1 className="text-4xl font-medium text-secondary-50 mb-8">
            ¿Qué es Rogans <br /> Tonic?
          </h1>
          <p className="w-[25rem]">
            Rogans Tonic es una fórmula creada para aportar al crecimiento
            capilar de hombres y mujeres con Minoxidil como su principal activo,
            además de otros ingredientes naturales que ayudan a la hidratación
            de la fibra capilar.
          </p>
        </article>
      </div>
      {/* seccion de segundo banner  */}
      <div className="mx-auto p-5 relative">
        <img src={Expant} alt="" className="object-cover" />
        <div>
          <h2 className="relative bottom-[10rem] left-[3rem] text-4xl text-white font-medium">
            Solución natural para <br /> un cabello saludable <br /> Rogans
            Tonic
          </h2>
        </div>
      </div>
      {/* seccion de fotos */}
      <div className="flex items-center gap-4 p-5 relative bottom-[4rem] m-5">
        <section className="relative ">
          <img src={ScreenFirst} alt="" />
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Estimula los folículos <br /> pilosos
          </h2>
        </section>
        <section className="relative">
          <img src={ScreenSecond} alt="" />
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Promoviendo un crecimiento <br /> más rápido y sano
          </h2>
        </section>
        <section className="relative">
          <img src={ScreenThrid} alt="" />
          <h2 className="absolute bottom-9 left-7 text-white text-2xl font-400">
            Protege el cabello de agentes contaminantes
          </h2>
        </section>
      </div>
      {/* COMO FUNCIONA */}
      <div className="flex items-center mx-auto p-5">
        <section className="w-[50%] pl-12">
          <h2 className="text-4xl font-semibold text-secondary-50 mb-20">
            ¿Cómo funciona Rogans <br /> Tonic?
          </h2>
          <section className="flex items-center gap-3 mb-6">
            <article className="flex flex-col gap-2 ">
              <h2 className="text-2xl font-medium">Paso 01</h2>
              <p className="">
                Aplicar SHAMPOO ROGANS ELIXIR sobre el cuero cabelludo húmedo{" "}
              </p>
            </article>
            <article className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Paso 02</h2>
              <p>
                Masajear suavemente y permitir que actué durante 3 minutos.{" "}
              </p>
            </article>
          </section>
          {/* seccion 2*/}
          <section className="flex items-center ">
            <article className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Paso 03</h2>
              <p>Enjuagar delicadamente con <br /> abundante agua. </p>
            </article>
            <article className="flex flex-col gap-2 relative left-[4.3rem]">
              <h2 className="text-2xl font-medium">Paso 04</h2>
              <p>Repetir la aplicación si es <br /> necesario. </p>
            </article>
          </section>
        </section>
        {/* foto */}
        <section className="w-[50%]">
          <img src={DetailPart} alt="" />
        </section>
      </div>
    </div>
  );
};

export default TonicItems;
