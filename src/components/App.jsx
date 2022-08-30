import { Reader } from "./Reader/Reader";
import data from "./Reader/ReaderData.json";

export const App = () => {
  return (
    <>
      <Reader data={data} />
    </>
  );
};
