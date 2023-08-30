"use client";
type PeriodProps = {
  start: string;
  end: string;
};

const Period = ({ start, end }: PeriodProps): JSX.Element => {
  return (
    <span className="bg-white/10 p-4 rounded-[2rem] outline outline-white/60">
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
