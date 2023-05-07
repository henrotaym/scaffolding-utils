import { keyInYN } from "readline-sync";

const useConfirm = (asking: string) => keyInYN(asking);

export default useConfirm;
