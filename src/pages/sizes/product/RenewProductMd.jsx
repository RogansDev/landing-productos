import React from "react";
import Banner from "../../../../public/img-md/renew/renewformmd.png";

const RenewProductMd = () => {

  const category = [
    {
      id: 1,
      name: "libre de costo",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.22656 11.9412C7.22656 13.0162 8.05156 13.8829 9.07656 13.8829H11.1682C12.0599 13.8829 12.7849 13.1245 12.7849 12.1912C12.7849 11.1745 12.3432 10.8162 11.6849 10.5829L8.32656 9.41621C7.66823 9.18288 7.22656 8.82454 7.22656 7.80788C7.22656 6.87454 7.95156 6.11621 8.84323 6.11621H10.9349C11.9599 6.11621 12.7849 6.98288 12.7849 8.05788"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 5V15"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Telemedicina",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.441 17.0167H5.17435C2.54102 17.0167 1.66602 15.2667 1.66602 13.5084V6.49173C1.66602 3.8584 2.54102 2.9834 5.17435 2.9834H10.441C13.0743 2.9834 13.9493 3.8584 13.9493 6.49173V13.5084C13.9493 16.1417 13.066 17.0167 10.441 17.0167Z"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.2659 14.2501L13.9492 12.6251V7.36678L16.2659 5.74178C17.3992 4.95011 18.3326 5.43344 18.3326 6.82511V13.1751C18.3326 14.5668 17.3992 15.0501 16.2659 14.2501Z"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.58398 9.16699C10.2743 9.16699 10.834 8.60735 10.834 7.91699C10.834 7.22664 10.2743 6.66699 9.58398 6.66699C8.89363 6.66699 8.33398 7.22664 8.33398 7.91699C8.33398 8.60735 8.89363 9.16699 9.58398 9.16699Z"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  
  ];
  
  return (
    <div className="min-w-full">
      <div className="flex flex-col items-center justify-center p-5">
        <section className="mb-12">
          <img src={Banner} alt="" />
        </section>
        {/* titulo y subtitulo */}
        <section className="text-center mb-6">
          <h2 className="text-5xl text-primary-30 font-medium uppercase">
            Renew
          </h2>
          <p>Shampoo anti caída y anti caspa</p>
        </section>
        {/* subtitulo principal y categoria */}
        <section>
          <h2 className="text-center text-lg text-black font-medium mb-4">
            Descubre las ventajas de una <br /> orientación médica con Rogans
          </h2>
          <section className="flex items-center text-xs mb-4">
             {category.map((items) => (
               <section key={items.id} className="flex items-center justify-center gap-3 p-5">
                 <span className="flex items-center">{items.icon}</span>
                 <span className="text-sm">{items.name}</span>
               </section>
             ))}
          </section>
        </section>
        <form className="">

        </form>
      </div>
    </div>
  );
};

export default RenewProductMd;
