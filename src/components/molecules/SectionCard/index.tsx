import { IconTrendingUp } from "@tabler/icons-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";

type Props = {
  description: string;
  value: string;
  footNote: string;
  footNoteDescription: string;
};

export function SectionCard({
  description,
  value,
  footNote,
  footNoteDescription,
}: Props) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}{" "}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {footNote} <IconTrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">{footNoteDescription}</div>
      </CardFooter>
    </Card>
  );
}
