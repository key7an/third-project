import axios from "axios";

const fetcher = async (url: string) => {
  const response = await axios.get(url);

  const data = await response.data;

  return data;
};

export default fetcher;
