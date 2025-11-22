import "./HomeHeroSection.css";
import GlassCards from "../Components/GlassCards";
export default function MainHeroSection() {
  return (
    <div>
      <div className="title text-center md:mt-28">
        <h1 className="text-9xl font-bold text-lime-100">
          Grind <span className="opacity-50">Your </span>Limits, <br />
          <span>
            Rise <span className="opacity-50">Your </span>Game.
          </span>
        </h1>
      </div>
      <div className="flex justify-center -translate-y-80 relative ">
        <div className="absolute w-72 h-72 bg-cyan-50 top-1/2 rounded-full blur-[90rem] z-0"></div>
        <div className="absolute w-72 h-72 bg-cyan-50 bottom-1/3 rounded-full  blur-[90rem] z-0"></div>
        
        {/* Cards positioned behind and around the image */}
        {/* Top Left Card - Rotated -15deg */}
        <div className="absolute top-[300px] left-[600px] rotate-[-15deg]">
          <GlassCards
            icon={
              <svg
                stroke="currentColor"
                fill="yellowGreen"
                viewBox="0 0 416 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"></path>
              </svg>
            }
            title={"Steps"}
            value={"6"}
          />
        </div>

        {/* Top Right Card - Rotated 15deg */}
        <div className="absolute top-[300px] right-[600px]  rotate-[15deg]">
          <GlassCards
            icon={
              <svg
                stroke="currentColor"
                fill="yellowGreen"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path>
              </svg>
            }
            title={"Kcal"}
            value={"650"}
          />
        </div>

        {/* Bottom Left Card - Rotated -12deg */}
        <div className="absolute bottom-0 left-[600px]  rotate-[-30deg]">
          <GlassCards
            icon={
              <svg
                stroke="currentColor"
                fill="yellowGreen"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H9v1.07A7.002 7.002 0 018 16 7 7 0 017 2.07V1H6a.5.5 0 01-.5-.5zm3 4.5a.5.5 0 00-1 0v3.5h-3a.5.5 0 000 1H8a.5.5 0 00.5-.5V5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
            title={"Hours"}
            value={"1.5"}
          />
        </div>

        {/* Bottom Right Card - Rotated 12deg */}
        <div className="absolute bottom-0 right-[600px]  rotate-[30deg]">
          <GlassCards
            icon={
              <svg
                stroke="currentColor"
                fill="yellowGreen"
                stroke-width="0"
                viewBox="0 0 640 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"></path>
              </svg>
            }
            title={"Sets"}
            value={"2"}
          />
        </div>

        <img
          src="src/assests/GymHeroSection.png"
          alt="GymHeroSection"
          className="relative z-10 rounded-3xl"
        />
      </div>
    </div>
  );
}
