import React from "react";
import { Link } from "react-router-dom";

const TourCard = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
      <img 
      //src={props.image} 
      src={`${backendUrl}${props.image}`}
      alt={props.name} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      <button
        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-default"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6" 
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
          </svg>
        </span>
      </button>
      </div>
      <div class="p-3">
        <div class="flex items-center justify-between mb-3">
          <h5 class="block font-sans text-xl antialiased font-extrabold leading-snug tracking-normal text-blue-gray-900 mx-3 ">
            {props.name}
          </h5>
          <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="-mt-0.5 h-5 w-5 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {props.ratings}
          </p>
        </div>

        <div class="w-full max-w-md p-0">
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate  ">
                      {props.nights} Nights - {props.days} Days
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate ">
                      Starting at &#8377; {props.price} per person
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-6 pt-3">
        <Link  to={`/tour/${props.id}`} >
        <button
          class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Book Now
        </button>
        
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
