import Layout from "../(layouts)/plainLayout";
import Banner from "../Components/ourTeam/banner"
import Intro from "../Components/ourTeam/intro";
import OurBeacon from "../Components/ourTeam/ourCompass";
import TeamCarousel from "../Components/ourTeam/teamCarousel";

function ourTeam(){
    return(
        <Layout color={"lightBlue"}>
            <Banner />
            <Intro />
            <OurBeacon />
            <TeamCarousel />
        </Layout>
    )
}

export default ourTeam;