type TimelineDateType = {
  year: number;
  month: number;
  day: number;
};

type TimelineMediaType = {
  url: string;
  caption: string;
  link: string;
};

type TimelineTextType = {
  headline: string;
  text: string;
};

type TimelineType = {
  start_date: TimelineDateType;
  end_date: TimelineDateType;
  media: TimelineMediaType;
  text: TimelineTextType;
  background: {};
};
