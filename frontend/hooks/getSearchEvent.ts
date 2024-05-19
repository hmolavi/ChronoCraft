import axios from "axios";

interface Props {
  queryTopic: string;
  numEvents: number;
}

// async function getSearchEvent({ queryTopic, numEvents }: Props) {
//   const systemMessage =
//     "You are an assistant that only writes JSON. Do not write normal text.";
//   const query = `Give me a list of ${numEvents} of the most significant historical event during ${queryTopic} formatted in the following way filling in the brackets\: \n{\nstart_date: {year: (start year), month: (start month), day: (start day),},\nmedia: { url: "", caption: "", link: "",},\nend_date: { year: (end year), month: (end month), day: (end day),},\n\n unique_id: "",\n text: { headline: "(title of the event)", text: "(concise summary of the event)",},\nbackground: {},},`;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/engines/davinci-codex/completions",
//       {
//         prompt: `Query: ${query}\nSystem Message: ${systemMessage}\nUser:`,
//         max_tokens: 1000,
//         temperature: 1,
//         n: 1,
//         stop: "\n",
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );

//     const message = response.data.choices[0].text.trim();
//     // Save the message to a file or database
//     // Example: fs.writeFileSync('message.txt', message);

//     console.log("Message saved:", message);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

async function getSearchEvent({ queryTopic, numEvents }: Props) {
  console.log("Calling the OpenAI API");
  const systemMessage =
    "You are an assistant that only writes JSON. Do not write normal text.";
  const query = `Give me a list of ${numEvents} of the most significant historical event during ${queryTopic} formatted in the following way filling in the brackets: {start_date: {year: (start year), month: (start month), day: (start day),}, media: { url: "", caption: "", link: "",}, end_date: { year: (end year), month: (end month), day: (end day),}, unique_id: "", text: { headline: "(title of the event)", text: "(concise summary of the event)",}, background: {},},`;

  // For 0-10
  // What is the sentiment of this tweet with a value between 0 and 10 (10 being its very positive)? 

  const APIBody = {
    "model": "gpt-3.5-turbo-0125",
    // "prompt": `Query: ${query}\nSystem Message: ${systemMessage}\nUser:`,
    "messages": [
      {"role":"system", "content": systemMessage},
      {"role":"user", "content": query}],
    "temperature": 1,
    "max_tokens": 1000,
    "top_p": 1.0,
    "frequency_penalty": 0.0,
    "presence_penalty": 0.0
  }
  // if (process.env.REACT_APP_OPENAI_API_KEY == undefined) throw new Error("KEY UNDEFINED");
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    },
    body: JSON.stringify(APIBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log(data);
  });
}

export default getSearchEvent;
