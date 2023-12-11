import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Knowladges`.
 */
export type KnowladgesProps = SliceComponentProps<Content.KnowladgesSlice>;

/**
 * Component for "Knowladges" Slices.
 */
const Knowladges = ({ slice }: KnowladgesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for knowladges (variation: {slice.variation}) Slices
    </section>
  );
};

export default Knowladges;
