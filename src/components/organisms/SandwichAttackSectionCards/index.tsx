import { SectionCard } from "@/components/molecules/SectionCard";

type Props = {
  totalCount: number;
  totalRevenueUsd: number;
  totalProfitUsd: number;
  totalHarmUsd: number;
};

const SandwichAttackSectionCards = ({
  totalCount,
  totalRevenueUsd,
  totalProfitUsd,
  totalHarmUsd,
}: Props) => {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <SectionCard
            description="Total Sandwich Attacks"
            value={totalCount.toLocaleString()}
            footNote="Number of sandwich attacks detected"
            footNoteDescription=""
          />
          <SectionCard
            description="Total Revenue"
            value={`$${totalRevenueUsd.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`}
            footNote="Total revenue generated from all sandwich attacks"
            footNoteDescription=""
          />
          <SectionCard
            description="Total Profit"
            value={`$${totalProfitUsd.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`}
            footNote="Total profit from sandwich attacks after costs"
            footNoteDescription=""
          />
          <SectionCard
            description="Total Harm"
            value={`$${totalHarmUsd.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`}
            footNote="Estimated total harm to victims from sandwich attacks"
            footNoteDescription=""
          />
        </div>
      </div>
    </div>
  );
};

export { SandwichAttackSectionCards };
