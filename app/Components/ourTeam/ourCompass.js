function ourBeacon() {

    return (
        <div>
            <h1 className="text-blue-900 mt-8 text-2xl lg:mt-16 lg:text-5xl lg:text-left lg:px-32 font-semibold">Our Guiding Beacons</h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:space-x-14 px-4 gap-6  mt-4">

                {/* integrity */}
                <div className="lg:w-1/4 card bg-lightBlue text-black shadow-xl items-center py-4">
                    <img src="./assets/icons/integrity.png" style={{maxWidth:"40%", height:'auto'}} className="px-6" alt="integrity" />
                    <div className="card-body py-2 items-center">
                        <h2 className="card-title text-2xl font-medium">Integrity</h2>
                        <p className="text-gray-500 text-lg">Doing it the Proper way, adhering to the morals</p>
                    </div>
                </div>

                {/* Trust */}
                <div className="lg:w-1/4 card bg-lightBlue text-black shadow-xl items-center py-4">
                    <img src="./assets/icons/trust.png" style={{maxWidth:"40%", height:'auto'}} className="px-6" alt="Trust" />
                    <div className="card-body py-2 items-center">
                        <h2 className="card-title text-2xl font-medium">Trust</h2>
                        <p className="text-gray-500 text-lg">Sharing a sense of security from everyone</p>
                    </div>
                </div>

                {/* Honesty */}
                <div className="lg:w-1/4 card bg-lightBlue text-black shadow-xl items-center py-4">
                    <img src="./assets/icons/honesty.png" style={{maxWidth:"40%", height:'auto'}} className="px-6" alt="Honesty" />
                    <div className="card-body py-2 items-center">
                        <h2 className="card-title text-2xl font-medium">Honesty</h2>
                        <p className="text-gray-500 text-lg">Believing in truthful and pure communication</p>
                    </div>
                </div>

                {/* Fairness */}
                <div className="lg:w-1/4 card bg-lightBlue text-black shadow-xl items-center py-4">
                    <img src="./assets/icons/fairness.png" style={{maxWidth:"40%", height:'auto'}} className="px-6" alt="Fairness" />
                    <div className="card-body py-2 items-center">
                        <h2 className="card-title text-2xl font-medium">Fairness</h2>
                        <p className="text-gray-500 text-lg">Equality and inclusivty, dealing matters equitably</p>
                    </div>
                </div>

                  {/* Respect */}
                  <div className="lg:w-1/4 card bg-lightBlue text-black shadow-xl items-center py-4">
                    <img src="./assets/icons/respect.png" style={{maxWidth:"40%", height:'auto'}} className="px-6" alt="Respect" />
                    <div className="card-body py-2 items-center">
                        <h2 className="card-title text-2xl font-medium">Respect</h2>
                        <p className="text-gray-500 text-lg">Showing kindness and empathy as a daily routine</p>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ourBeacon;