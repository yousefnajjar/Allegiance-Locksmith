import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Unlocking Solutions"
          paragraph="Allegiance Locksmith is your expert partner in ensuring seamless access to your vehicle, home, or business. Whether it's lockouts, key cutting, or intricate computer programming, we are here to make the process effortless for you."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
