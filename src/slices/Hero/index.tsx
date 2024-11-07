import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText, PrismicText } from "@prismicio/react";
import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <AnimatedContent slice={slice}/>
    </Bounded>
  );
};

export default Hero;
