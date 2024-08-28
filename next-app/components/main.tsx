import React from "react"
import { useState } from "react"

const Main: React.FC = () =>  {
  const [toggle, setToggle] = useState(false)

  console.log("home page")

  return (
    <div className="leading-normal tracking-normal text-white gradient"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }} >
        
      <nav id="header" className="fixed w-full z-30 top-5 text-white">
        <div className="w-full gap-5 container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center gap-5">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              الجودة
            </a>
          </div>

          <a
            id="navAction"
            // href="https://wa.me/01158932877"
            className="b animate-bounce mx-auto items-center rounded-full shadow-2xl cursor-pointer lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full lg:mt-0 py-2 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <img className="w-16 h-10" src="/svg/whatsapp-svgrepo-com.svg" alt="" />
          </a>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Col */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-4xl font-bold leading-tight">
              Clean HQ ماذا يمكنك أن تستفيد من شركة
            </h1>
            <p className="leading-normal text-1xl md:text-2xl mb-8">
              تشير خدمة التنظيف إلى خدمة احترافية توفر تنظيف وصيانة المساحات السكنية أو التجارية.
              يمكن أن تشمل خدمات التنظيف مجموعة واسعة من المهام مثل التنظيف بالمكنسة الكهربائية ،
              والغبار ، والمسح ، وتنظيف النوافذ ، وتعقيم الأسطح. يمكن تقديم هذه الخدمات وفقًا لجدول
              زمني منتظم ، مثل يوميًا أو أسبوعيًا أو حسب الحاجة. يمكن أن يؤدي استئجار خدمة التنظيف
              إلى توفير الوقت والطاقة ، مما يسمح للأفراد والشركات بالتركيز على المهام المهمة
              الأخرى. بالإضافة إلى ذلك ، يمكن أن تحسن البيئة النظيفة الصحة العامة والرفاهية عن طريق
              الحد من انتشار الجراثيم والمواد المسببة للحساسية.
            </p>
          </div>
          {/* Right Col */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="../images/hero.png" alt="" />
          </div>
        </div>
      </div>

      <div className="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              ></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Main