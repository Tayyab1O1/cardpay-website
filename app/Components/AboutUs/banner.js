
function Banner() {


    const images = [
        "./assets/aboutUsBanner/photo1.png",
        "./assets/aboutUsBanner/photo2.png",
        "./assets/aboutUsBanner/photo3.png",
        "./assets/aboutUsBanner/photo4.png",
        "./assets/aboutUsBanner/photo5.png",
        "./assets/aboutUsBanner/photo6.png",
    ]

    return (
        <div className="hero lg:min-h-screen lg:justify-evenly w-screen bg-lightPurple bg-opacity-60 flex flex-col px-4 items-center py-2 lg:py-8">
            <div className="hero-content text-center grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:flex-wrap">
                <img src={images[0]} className="rounded-2xl shadow-md border-2 border-gray-100 lg:w-1/4" />
                <img src={images[1]} className="rounded-2xl shadow-md border-2 border-gray-100 lg:w-1/4" />
                <img src={images[3]} className="rounded-2xl shadow-md border-2 border-gray-100 lg:w-1/4" />
                <img src={images[2]} className="rounded-2xl shadow-md border-2 border-gray-100 lg:w-1/4" />
                <img src={images[4]} className="rounded-2xl shadow-md border-2 border-gray-100 hidden lg:inline lg:w-1/4" />
                <img src={images[5]} className="rounded-2xl shadow-md border-2 border-gray-100 hidden lg:inline lg:w-1/4" />
            </div>
            <div className="lg:mb-16">
                <h1 className="text-black font-semibold text-3xl lg:text-5xl mb-2">CardPay</h1>
                <h2 className="text-gray-700 font-medium lg:text-2xl lg:inline hidden">Solving the unsolved Problems</h2>

            </div>
            <h2 className="text-gray-700 font-medium text-lg lg:hidden">Solving the unsolved Problems</h2>
        </div>
    )


}

export default Banner;
