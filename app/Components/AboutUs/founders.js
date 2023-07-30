function Founders() {
    return (
        <div className="mt-8 px-4 w-screen lg:px-16">

            <h1 className="text-2xl lg:text-5xl lg:mt-16 lg:px-32 lg:mb-12 text-left mb-4 text-blue-800 font-semibold">Our Founding Team</h1>
            <div className="lg:grid lg:grid-cols-3 lg:space-x-8 lg:px-32">

                <div className="card bg-transparent shadow-xl">
                    <figure><img src="/assets/Tayyab.jpg" style={{maxHeight:"94%",width:'100%'}} alt="Tayyab" className="lg:rounded-t-2xl"/></figure>
                    <div className="card-body text-black items-center">
                        <h2 className="card-title">Tayyab Rashad</h2>
                        <h2 className="font-semibold">CEO</h2>
                        <p>LUMS 23" BSc ACF</p>
                    </div>
                </div>

                <div className="card bg-transparent shadow-xl mt-4">
                    <figure><img src="/assets/Suleman.jpg" alt="Suleman" /></figure>
                    <div className="card-body text-black items-center">
                        <h2 className="card-title">Suleman Mahmood</h2>
                        <h2 className="font-semibold">CTO</h2>
                        <p>LUMS 23" BSc CS</p>
                    </div>
                </div>

                <div className="card bg-transparent shadow-xl mt-4">
                    <figure><img src="/assets/Shamsi.jpg" alt="Shamsi" /></figure>
                    <div className="card-body text-black items-center">
                        <h2 className="card-title w-max">Abdul Rehman Shamsi</h2>
                        <h2 className="font-semibold">CMO</h2>
                        <p>LUMS 23" BSc MGS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders;