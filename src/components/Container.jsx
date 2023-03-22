import Nav from "./Nav";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Carousel from "./Carousel";




function Container(props){
    return (
    <div className="flex flex-col h-screen justify-between">
        <Nav />
        <Carousel />
        <Section />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
    );
}

export default Container;