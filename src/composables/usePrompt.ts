import promptConfigurator from "prompt-sync";

const usePrompt = (asking: string, defaultValue?: string) =>
  promptConfigurator({ sigint: true })({
    ask: `${asking} : `,
    value: defaultValue,
  });

export default usePrompt;
