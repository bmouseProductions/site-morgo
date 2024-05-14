import SectionOneHome from "./Sections/SectionOne/SectionOneHome";
import SectionTwoHome from "./Sections/SectionTwo/SectionTwoHome";
import SectionThreeHome from "./Sections/SectionThree/SectionThreeHome";
import SectionFourHome from "./Sections/SectionFour/SectionFourHome";
import SectionFiveHome from "./Sections/SecionFive/SectionFiveHome";
import Faixa from "../../components/Faixa/Faixa";


export default function Home() {
    return (
        <>
            <SectionOneHome />
            <SectionTwoHome />
            <SectionThreeHome />
            <SectionFourHome />
            <SectionFiveHome />
            <Faixa />
        </>
    )
}