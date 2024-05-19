import { useTimelineStore } from "@/store/zustand";
import { v4 as uuidv4 } from "uuid";

interface Props {
  queryTopic: string;
  numEvents: number;
}

const useGetSearchEvent = () => {
  const { setLoading, setTimeline, setEmpty } = useTimelineStore();

  const getSearchEvent = async ({ queryTopic, numEvents }: Props) => {
    console.log("Calling the OpenAI API");
    const systemMessage =
      "You are an assistant that only writes JSON. Do not write normal text.";
    const query = `Give me a list of ${numEvents} of the most significant historical events during ${queryTopic} formatted in the following way. Only fill in the brackets:\n {"start_date": {"year": (start year), "month": (start month), "day": (start day),}, "media": { "url": "", "caption": "", "link": "",}, "end_date": { "year": (end year), "month": (end month), "day": (end day),}, "unique_id": "(unique id)", "text": { "headline": "(title of the event)", "text": "(concise summary of the event)",}, "background": {},}`;

    const APIBody = {
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: query },
      ],
      temperature: 1,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify(APIBody),
        }
      );

      const data = await response.json();
      let events = data.choices[0].message.content;
      events = JSON.parse(events).map((event) => ({
        ...event,
        unique_id: uuidv4(),
      }));

      setLoading(false);
      setEmpty(false);
      setTimeline(events);
      console.log(events);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return getSearchEvent;
};

export default useGetSearchEvent;
