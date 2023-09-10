"use client";
type PeriodProps = {
  start: string;
  end: string;
};

const Period = ({ start, end }: PeriodProps): JSX.Element => {
  return (
    <span className="bg-purple-600/10 p-4 rounded-[2rem]">
      {start} - {end}
    </span>
  );
};

const Timeline = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-4">
      <Period start="August 2020" end="Present" />
      <Period start="August 2020" end="Present" />
      <Period start="August 2020" end="Present" />
      <Period start="August 2020" end="Present" />
      <Period start="August 2020" end="Present" />
    </div>
  );
};

export default Timeline;
