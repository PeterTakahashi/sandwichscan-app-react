import { Input } from "@/components/atoms/Input";

type Props = {
  setColumnFilters: (filters: { id: string; value: string }[]) => void;
};

export const FilterInput = ({ setColumnFilters }: Props) => (
  <Input
    placeholder="attacker or victim address..."
    onChange={(e) => {
      const value = e.target.value;
      setColumnFilters([
        { id: "victim_address__exact__or__attacker_address__exact", value },
      ]);
    }}
    className="max-w-sm"
  />
);
