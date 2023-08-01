

function Banner() {
    return (
        <div className="hero min-h bg-lightBlue items-start lg:w-screen ">
            <div className="hero-content text-center flex flex-col lg:flex-row ">
                <div className="lg:pl-24">
                    <h1 className="text-black font-medium text-3xl px-2 lg:text-6xl  lg:text-left lg:leading-snug">Smart,Secure & Quick Payments</h1>
                    <h3 className="hidden lg:flex text-gray-600 mt-2 text-xl text-left px-1">Your solution for all payments Anywhere, Anytime</h3>
                    <button className="btn btn-md mt-4 px-4 hidden lg:flex rounded-full border-none text-white bg-blue-500 py-1 text-md font-semibold">Get CardPay</button>
                </div>
                <h3 className="text-gray-500 text-lg px-1 lg:hidden">Your solution for all payments Anywhere, Anytime</h3>
                <button className="btn btn-sm rounded-full lg:hidden border-none text-white bg-blue-500 px-2 py-1 text-md font-semibold">Get CardPay</button>
                <img src="./assets/mockup.png" style={{maxWidth:'70%', height:'auto'}} className="lg:p-8" />
            </div>
        </div>
    )


}

export default Banner;
