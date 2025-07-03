import PropTypes from "prop-types";

export default function LabelSection({ title = "Top Stories" }) {
  return (
    <div className="inline-block w-fit mb-4 px-4 py-2 bg-green-600 rounded-tr-2xl">
      <span className="font-medium text-white text-lg">{title}</span>
    </div>
  );
}

LabelSection.propTypes = {
  title: PropTypes.string,
};