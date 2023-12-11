import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experiences`.
 */
export type ExperiencesProps = SliceComponentProps<Content.ExperiencesSlice>;

/**
 * Component for "Experiences" Slices.
 */
const Experiences = ({ slice }: ExperiencesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for experiences (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Experiences;
