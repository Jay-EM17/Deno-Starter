import { config } from "../config.ts";
import { User } from "../models/users.ts";

export const fetchData = async (): Promise<User[]> => {
  const data = await Deno.readFile(config.DB_PATH);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);
  return JSON.parse(decodedData);
};

export const persistData = async (data: any): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(config.DB_PATH, encoder.encode(JSON.stringify(data)));
};
