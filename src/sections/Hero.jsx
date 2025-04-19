import { Element, Link as LinkScroll } from "react-scroll"; // Element act as div to scroll to
import Button from "../components/Button";
// import { Link as LinkScroll } from "react-scroll";

export default function Hero() {
  return (
    <section className=" relative pt-60 pb-40 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption md:pb-6 small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h3 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 font-semibold max-md:mb-10">
              We design XORA AI video Editor to be an easy to use, quick to
              learn and superisingly powerful .
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="../src/assets/images/zap.svg"> Try it now </Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="../src/assets/images/hero.png"
              alt="hero"
              className="size-[1000px] ml-auto mt-[80px] max-lg:h-auto "
            />
          </div>
        </div>
      </Element>
    </section>
  );
}
