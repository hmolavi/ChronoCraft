import { useTimelineStore } from "@/store/zustand";

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
    const query = `Please generate a list of ${numEvents} of the most significant historical events related to "${queryTopic}". \n\nFormat each event strictly as follows:\n\n{\n  "start_date": {"year": (start year), "month": (start month), "day": (start day)},\n  "media": {"url": "", "caption": "", "link": ""},\n  "end_date": {"year": (end year), "month": (end month), "day": (end day)},\n  "unique_id": "", \n  "text": {\n    "headline": "(Title of the Event)",\n    "text": "(Concise Summary of the Event)"\n  },\n  "background": {}\n}`;

    const APIBody = {
      model: "gpt-3.5-turbo-0125",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: query },
      ],
      temperature: 0.7,
      max_tokens: 10000,
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
      const events = data.choices[0].message.content;
      setLoading(false);
      setEmpty(false);
      setTimeline(events);
      console.log(events);
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  return getSearchEvent;
};

export default useGetSearchEvent;
