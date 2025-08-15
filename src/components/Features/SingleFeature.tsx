import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  return (
    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
      <div className="mb-4 text-primary flex justify-center">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="mb-4 text-gray-600">{feature.paragraph}</p>
      {feature.cta && (
        <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          {feature.cta}
        </button>
      )}
    </div>
  );
};

export default SingleFeature;
