import { Koulen } from "@next/font/google";
import EventCards from "./EventCards";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

interface Props {
  events?: { name: string; img: string; ticket: string }[];
  day: string;
  e: any;
}

const EventGrid = ({ events, day, e }: Props) => {
  return (
    <div className="grid w-[100vw] grid-cols-1 gap-14 p-10 sm:grid-cols-2 md:gap-14  lg:grid-cols-4 lg:gap-16 ">
      {e?.map((e: any, i: any) => {
        return <EventCards event={e} key={i} />;
      })}
    </div>
  );
};

export default EventGrid;
