import React from "react";
import "./css/Poster.css";
import firstposter from "../img/1.jpg";

const Poster = () => {
  return (
    <>
    <div className=" mt-[10%]">
      <div className="flex w-[100%] ml-10   justify-center items-center">
        <div className="flex w-[80%] rounded-sm justify-center items-center">
          <div className="w-[100%] h-[345px] first-content p-[40px]">
            <p
              style={{ lineHeight: 1 }}
              className="text-[48px] font-semibold mb-0"
            >
              Lowest Price
              <br /> Best Quality Shopping
            </p>
            <div className="w-[100%] mt-7 flex justify-center items-center rounded-md bg-white h-[60px]">
              <img
                className="h-7 w-7 mr-2 rounded-full bg-black icon-image"
                src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                alt="icon"
              />
              <p className="w-20 mr-5 font-medium gap-0">Free Delivery</p>
              <div className="h-[40px] border-r-2 mr-4 border-gray-400"></div>
              <img
                className="h-7 w-7 mr-2 rounded-full bg-black icon-image"
                src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                alt="icon"
              />
              <p className="w-20 mr-10">Cash on Delivery</p>
              <div className="h-[40px] border-r-2 mr-4 border-gray-400"></div>
              <img
                className="h-7 w-7 mr-2 rounded-full bg-black icon-image "
                src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                alt="icon"
              />
              <p className="w-20 mr-4">Easy Returns</p>
            </div>
            <div className="w-[60%] mt-7 flex justify-center items-center rounded-md playstore h-[50px]">
              <img
                className="h-[35px] w-auto"
                src="https://cdn-icons-png.flaticon.com/128/300/300218.png"
                alt="playstore"
              />
              <p className="text-white ml-2">Download the Meesho App</p>
            </div>
          </div>
          <div className="w-[100%] h-auto">
            <img className="" src={firstposter} alt="poster" />
          </div>
        </div>
      </div>
      <div className="container flex justify-center w-[100%] mt-10 items-center h-12">
        <div className="w-[242px] border-t-2 border-black"></div>
        <h1 className="mb-4 ml-4 middle-content mr-4 mt-4 text-[36px]">
          Top Categories to choose from
        </h1>
        <div className="w-[242px] border-t-2 border-black"></div>
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <div className="poster-2 mt-[5%]">
          <div className="h-[470px] flex items-end ">
            <img
              className="h-[427px]"
              src="https://images.meesho.com/images/marketing/1701835320853_400.webp"
              alt="womenstore"
            />
          </div>
          <div className="flex justify-between items-end w-[55%] h-[470px] top-[-8%]">
            <img
              className="h-[270px]"
              src="https://images.meesho.com/images/marketing/1692191045019_300.webp"
              alt="womenstore"
            />
            <img
              className="h-[270px]"
              src="https://images.meesho.com/images/marketing/1692191103963_300.webp"
              alt="womenstore"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-center"> 
        <div className="poster-3">
            <div>
                <img src="https://images.meesho.com/images/marketing/1704720710709_200.webp" alt="button-img"/>
            </div>
            <div className="flex justify-around  items-center h-[70%] w-[65%]">
                <div className="ml-[10%]">
                    <img src="https://images.meesho.com/images/marketing/1690978007288_200.webp" alt="button-img"/>
                    <img className="ml-[13%]" src="https://images.meesho.com/images/marketing/1704720614820_150.webp" alt="button-img"/>
                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1690978024110_200.webp" alt="button-img"/>
                    <img className="ml-[13%]" src="https://images.meesho.com/images/marketing/1704720604451_150.webp" alt="button-img"/>
                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1690977994925_200.webp" alt="button-img"/>
                    <img className="ml-[13%]" src="https://images.meesho.com/images/marketing/1704720593346_150.webp" alt="button-img"/>
                </div>
            </div>
        </div>
      </div>
      <div className=" flex justify-center items-center"> 
        <div className="poster-4">
            <div className="w-[70%] flex flex-col text-right p-[48px]">
                <h2 className="text-blue-600 text-[32px]">Become a Reseller and</h2>
                <p className="w-[100%] text-pink-800 font-bold text-[48px]">Start your Online Business
                    with Zero Investment</p>
                <div className="flex justify-end mt-5 items-center">
                    <img className=" rounded-sm h-[48px] mr-4 w-[180px]" src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" alt="playstore"/>
                    <img className=" rounded-smh-[48px] w-[180px]" src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" alt="playstore"/>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="poster-5">
            <div className="w-[80%]">
                <h1 className=" text-white text-[32px] h-40px font-semibold">Register as a Meesho Supplier</h1>
                <p className="text-white text-[16px] mt-[16px]" >Sell your products to crores of customers at 0% commission</p>
                <div className="flex mt-5">
                    <span class="material-symbols-outlined text-green-400 mr-1">
                        task_alt
                    </span>
                    <p className="text-white text-[16px] pr-5 border-r-2 border-white">Grow your business 10x</p>
                    <span class="material-symbols-outlined text-green-400 mr-1 ml-5">
                        task_alt
                    </span>
                    <p className="text-white text-[16px]  pr-5 border-r-2 border-white">Enjoy 100% Profit</p>
                    <span class="material-symbols-outlined text-green-400 mr-1 ml-5">
                        task_alt
                    </span>
                    <p className="text-white text-[16px]">Sell all over India</p>
                </div>
                    <button className="h-[60px] w-[150px] bg-slate-50 rounded-sm border-none text-[20px] mt-3">
                        Sign up now    
                    </button>    
                
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Poster;
