function MissionRibbon() {
    return (
        <>
            <div class="w-screen bg-white border border-gray-200 rounded-lg shadow mt-8 lg:hidden">
                <img class="rounded-t-lg" src="./assets/Mission.png" alt="" />
                <div class="p-5 bg-missionColor rounded-b-lg">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Our Mission</h5>
                    <p class="mb-3 font-normal text-gray-100 ">We aim to establish a sustainable service by providing financial power to every institution where banks have failed to do so.</p>
                </div>
            </div>
            <div className="hidden lg:flex lg:mt-10">
                <div class="w-screen bg-missionColor mt-8 justify-center flex fkex-row items-center">
                    <img class="rounded-lg" style={{ maxWidth: "30%", height: "auto" }} src="./assets/Mission-removebg-preview.png" alt="" />
                    <div class="p-5 ">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight text-white">Our Mission</h5>
                        <p class="mb-3 font-normal text-2xl text-gray-100 leading-10">We aim to establish a sustainable <br /> service by providing financial power <br /> to every institution where banks have <br /> failed to do so.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionRibbon;