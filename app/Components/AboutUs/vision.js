function VisionRibbon() {
    return (
        <>
            <div class="w-screen bg-white border border-gray-200 rounded-lg shadow mt-8 lg:hidden">
                <img class="rounded-t-lg" src="./assets/Vision.png" alt="" />
                <div class="p-5 bg-visionColor rounded-b-lg">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">Our Vision</h5>
                    <p class="mb-3 font-normal text-lg text-gray-100 ">We aim to to be the super app providing custom payment solution to the masses.</p>
                </div>
            </div>
            <div className="hidden lg:flex">
                <div class="w-screen bg-visionColor mt-8 justify-center flex fkex-row items-center">
                    <img class="py-4" style={{maxWidth:"30%",height:"auto"}} src="./assets/Vision_lg.png" alt="" />
                    <div class="p-5 ">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight text-white">Our Vision</h5>
                        <p class="mb-3 font-normal text-2xl text-gray-100 leading-10">We aim to to be the super app <br /> providing custom payment solution <br /> to the masses.</p>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default VisionRibbon;