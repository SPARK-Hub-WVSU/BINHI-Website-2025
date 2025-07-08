import PropTypes from "prop-types";

/**
 * LabelSection component
 * Renders a stylized section label (e.g., "Top Stories", "Latest News")
 * - Displays the section title with a green background and rounded top-right corner
 * - Responsive padding and font size for different screen sizes
 *
 * Props:
 *   - title (string): The label text to display (default: "Top Stories")
 */
export default function LabelSection({ title = "Top Stories" }) {
  return (
      <h2 className="w-fit text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white 
        mb-2 sm:mb-5 px-2 sm:px-4 py-1 sm:py-2 bg-green-600 rounded-tr-[10px] sm:rounded-tr-[20px]">
        {title}
      </h2>
  );
}

// PropTypes for type checking
LabelSection.propTypes = {
  title: PropTypes.string,
};