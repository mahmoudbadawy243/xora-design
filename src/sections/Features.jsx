import { Element } from "react-scroll";
import Button from "../components/Button";
// Import all icons and images
import zapIcon from "../assets/images/zap.svg";
import feature1Image from "../assets/images/feature-1.png";
import feature2Image from "../assets/images/feature-2.png";
import feature3Image from "../assets/images/feature-3.png";
// Import other feature images as needed

export default function Features() {
  return (
    <Element name="features">
      <section className="py-32 max-lg:py-24 max-md:py-16">
        <div className="container">
          {/* Update all image references to use imported variables */}
          <div className="feature-item">
            <img src={feature1Image} alt="Feature 1" />
            {/* Other content */}
          </div>
          
          <div className="feature-item">
            <img src={feature2Image} alt="Feature 2" />
            {/* Other content */}
          </div>
          
          <div className="feature-item">
            <img src={feature3Image} alt="Feature 3" />
            {/* Other content */}
          </div>
          
          {/* Button with imported icon */}
          <Button icon={zapIcon}>Try it now</Button>
        </div>
    </section>
      </Element>
  );
}
