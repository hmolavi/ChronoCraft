import axios from "axios";

interface Props {
  queryTopic: string;
  numEvents: number;
}

async function getSearchEvent({ queryTopic, numEvents }: Props) {
  const systemMessage =
    "You are an assistant that only writes JSON. Do not write normal text.";
  const query = `Give me a list of ${numEvents} of the most significant historical events during ${queryTopic} formatted in the following way filling in the brackets\: \n{\nstart_date: {year: (start year), month: (start month), day: (start day),},\nmedia: { url: "", caption: "", link: "",},\nend_date: { year: (end year), month: (end month), day: (end day),},\n\n unique_id: "",\n text: { headline: "(title of the event)", text: "(concise summary of the event, include important locations and stakeholders)",},\nbackground: {},},`;
  console.log(`Bearer ${process.env.OPENAI_API_KEY}`);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: `Query: ${query}\nSystem Message: ${systemMessage}\nUser:`,
        max_tokens: 1000,
        temperature: 1,
        n: 1,
        stop: "\n",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const message = response.data.choices[0].text.trim();
    // Save the message to a file or database
    // Example: fs.writeFileSync('message.txt', message);

    console.log("Message saved:", message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export default getSearchEvent;
