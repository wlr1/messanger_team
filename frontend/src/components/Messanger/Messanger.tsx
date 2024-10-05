import React from "react";

const Messanger = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#632828] to-black items-center justify-center">
      <div className="container mx-auto px-4 text-white">
        {/* Header */}
        <header className="flex justify-between items-center py-8">
          <div className="text-2xl font-bold text-white">
            <span className="ml-2">[name/logo]</span>
          </div>
          <nav className="block space-x-2 text-md ">
            <a
              href="#"
              className="bg-transparent hover:bg-white/15 hover:text-white transition-transform transform hover:scale-105 text-[#DB5353] rounded-lg px-4 py-2 "
            >
              Home
            </a>
            <a
              href="#"
              className="bg-transparent hover:bg-white/15 hover:text-white transition-transform transform hover:scale-105 text-[#DB5353] rounded-lg px-4 py-2 "
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[#DB5353] bg-transparent hover:bg-white/15 hover:text-white transition-transform transform hover:scale-105  rounded-lg px-4 py-2 "
            >
              About us
            </a>
            <a
              href="#"
              className="text-[#DB5353] bg-transparent hover:bg-white/15 hover:text-white transition-transform transform hover:scale-105  rounded-lg px-4 py-2 "
            >
              Sign Up
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex flex-col lg:flex-row items-center justify-between mt-16">
          {/* Left content */}
          <div className="max-w-lg text-center lg:text-left mb-28">
            <h1 className="text-4xl font-bold leading-9 w-[333px] mb-20">
              Welcome to [name] – your anonymity!
            </h1>
            <p className="text-lg text-[#DB5353] mb-8 w-[555px] ">
              Welcome to our messenger. We do not collect your data, but only
              provide an opportunity to communicate anonymously.
            </p>
            <div className="flex justify-center lg:justify-start space-x-12 mb-8 mt-10 ">
              <button className="bg-transparent border border-white/20 py-4 px-12 rounded-lg hover:bg-white hover:text-[#DB5353] transition duration-300">
                Sign Up
              </button>
              <button className="bg-transparent border border-white/20 py-4 px-12 rounded-lg hover:bg-white hover:text-[#DB5353] transition duration-300">
                Learn More
              </button>
            </div>
            <div className="space-y-6 mt-12">
              <p className="text-white font-bold text-2xl">[number]</p>
              <p className="text-[#DB5353] text-lg">Count of users</p>
            </div>
          </div>

          {/* Right content: phone mockup */}
          <div className="mr-20 mb-16">
            <div className="flex items-center justify-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="500"
                viewBox="0 0 133 270"
                fill="none"
              >
                <rect
                  x="5.76904"
                  y="6.56393"
                  width="120"
                  height="257"
                  rx="10"
                  fill="url(#paint0_linear_2203_87)"
                />
                <g filter="url(#filter0_i_2203_87)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.32432 11.184C2.38477 14.9906 2.38477 19.9737 2.38477 29.9399L2.38477 239.189C2.38477 249.155 2.38477 254.138 4.32432 257.945C6.0304 261.293 8.75271 264.015 12.1011 265.721C15.9077 267.661 20.8908 267.661 30.857 267.661L102.148 267.661C112.114 267.661 117.097 267.661 120.904 265.721C124.252 264.015 126.974 261.293 128.68 257.945C130.62 254.138 130.62 249.155 130.62 239.189L130.62 29.9399C130.62 19.9737 130.62 14.9906 128.68 11.184C126.974 7.83566 124.252 5.11335 120.904 3.40727C117.097 1.46771 112.114 1.46771 102.148 1.46771L30.857 1.46771C20.8908 1.46771 15.9077 1.46771 12.1011 3.40727C8.75271 5.11335 6.0304 7.83566 4.32432 11.184ZM7.33805 26.5644C7.33805 19.5777 7.33805 16.0844 8.69774 13.4159C9.89376 11.0686 11.8022 9.16016 14.1495 7.96414C16.818 6.60445 20.3113 6.60445 27.298 6.60445L33.4294 6.60445C33.7331 6.60445 33.885 6.60445 34.0066 6.64871C34.2104 6.7229 34.371 6.88346 34.4452 7.08729C34.4894 7.20888 34.4894 7.36073 34.4894 7.66442C34.4894 10.0939 34.4894 11.3087 34.8434 12.2814C35.437 13.9121 36.7215 15.1966 38.3521 15.7901C39.3248 16.1441 40.5396 16.1441 42.9691 16.1441L90.0355 16.1441C92.4651 16.1441 93.6798 16.1441 94.6525 15.7901C96.2832 15.1966 97.5677 13.9121 98.1612 12.2814C98.5152 11.3087 98.5152 10.0939 98.5152 7.66442C98.5152 7.36073 98.5152 7.20888 98.5595 7.08729C98.6337 6.88346 98.7943 6.7229 98.9981 6.64871C99.1197 6.60445 99.2715 6.60445 99.5752 6.60445L105.707 6.60445C112.693 6.60445 116.187 6.60445 118.855 7.96414C121.202 9.16016 123.111 11.0686 124.307 13.4159C125.667 16.0844 125.667 19.5777 125.667 26.5644L125.667 242.564C125.667 249.551 125.667 253.044 124.307 255.713C123.111 258.06 121.202 259.969 118.855 261.165C116.187 262.524 112.693 262.524 105.707 262.524L27.298 262.524C20.3113 262.524 16.818 262.524 14.1495 261.165C11.8022 259.969 9.89376 258.06 8.69774 255.713C7.33805 253.044 7.33805 249.551 7.33805 242.564L7.33805 26.5644Z"
                    fill="#E9E8FF"
                  />
                </g>
                <g filter="url(#filter1_dii_2203_87)">
                  <path
                    d="M59.6184 10.0901C59.6184 9.47984 60.1131 8.98511 60.7234 8.98511L72.4645 8.98511C73.0748 8.98511 73.5695 9.47984 73.5695 10.0901C73.5695 10.7004 73.0748 11.1951 72.4645 11.1951L60.7234 11.1951C60.1131 11.1951 59.6184 10.7004 59.6184 10.0901Z"
                    stroke="#07052C"
                    stroke-width="0.358347"
                  />
                </g>
                <g filter="url(#filter2_i_2203_87)">
                  <path
                    d="M80.5366 10.0901C80.5366 9.38089 79.9617 8.80594 79.2524 8.80594C78.5432 8.80594 77.9683 9.38089 77.9683 10.0901C77.9683 10.7994 78.5432 11.3743 79.2524 11.3743C79.9617 11.3743 80.5366 10.7994 80.5366 10.0901Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_2203_87"
                    x="2.38477"
                    y="1.46771"
                    width="128.235"
                    height="266.91"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.716693" />
                    <feGaussianBlur stdDeviation="0.716693" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2203_87"
                    />
                  </filter>
                  <filter
                    id="filter1_dii_2203_87"
                    x="57.4683"
                    y="7.55173"
                    width="17.1763"
                    height="5.97265"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.53752" dy="0.716693" />
                    <feGaussianBlur stdDeviation="0.716693" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2203_87"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2203_87"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.895867" dy="-1.25421" />
                    <feGaussianBlur stdDeviation="0.716693" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_2203_87"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.716693" dy="0.716693" />
                    <feGaussianBlur stdDeviation="0.53752" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_2203_87"
                      result="effect3_innerShadow_2203_87"
                    />
                  </filter>
                  <filter
                    id="filter2_i_2203_87"
                    x="77.2516"
                    y="8.80594"
                    width="3.28505"
                    height="3.6434"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-0.716693" dy="1.07504" />
                    <feGaussianBlur stdDeviation="0.53752" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.65 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2203_87"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2203_87"
                    x1="66"
                    y1="-63.5"
                    x2="65.769"
                    y2="263.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A13535" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute">
                <p className="text-xl mb-4 font-bold">Maximal anonymity</p>
                <hr className="w-[100px] mx-auto" />
                <p className="mt-4 text-sm font-bold">Only with us</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messanger;
