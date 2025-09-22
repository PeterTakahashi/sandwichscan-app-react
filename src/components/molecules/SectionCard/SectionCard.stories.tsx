import { SectionCard } from "@/components/molecules/SectionCard";

export default {
  title: "Molecules/SectionCard",
  component: SectionCard,
};

export const Default = {
  args: {
    title: "Total Revenue",
    description: "Total revenue generated from all sandwich attacks",
    value: "$1,234,567",
    footNote: "Steady performance increase",
    footNoteDescription: "Meets growth projections",
  },
};
