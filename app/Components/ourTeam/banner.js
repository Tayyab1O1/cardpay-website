
function Banner() {



    return (
        <div className="hero w-screen bg-lightGreen bg-opacity-60 flex flex-col lg:flex-row  items-center pt-2 pb-6">
            <div className="hero-content text-center flex flex-cols ">
                <img src='./assets/ourTeam/teamBanner.png' className="w-full lg:w-5/6" />
            </div>
            <div>
                <h1 className="text-black font-semibold mt-4 text-3xl lg:text-4xl">The Aces of CardPay</h1>
                <h2 className="text-gray-700 font-medium text-2xl px-4 leading-10 mt-4 hidden lg:flex ">Where dedication, collaboration <br /> and brilliance converge</h2>
            </div>
            <h2 className="text-gray-700 font-medium text-lg px-8 lg:hidden">Where dedication, collaboration, and brilliance converge</h2>
        </div>
    )


}

export default Banner;
