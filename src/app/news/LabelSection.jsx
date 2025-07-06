import PropTypes from "prop-types";

export default function LabelSection({ title = "Top Stories" }) {
  return (
    <div className="inline-block w-fit mb-2 sm:mb-5 px-2 sm:px-4 py-1 sm:py-2 bg-green-600 rounded-tr-[10px] sm:rounded-tr-[20px]">
      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white">{title}</span>
    </div>
  );
}

LabelSection.propTypes = {
  title: PropTypes.string,
};