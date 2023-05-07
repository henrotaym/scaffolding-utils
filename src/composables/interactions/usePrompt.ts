import { question } from "readline-sync";

const usePrompt = (asking: string, defaultValue?: string) =>
  question(asking, { defaultInput: defaultValue });

export default usePrompt;
