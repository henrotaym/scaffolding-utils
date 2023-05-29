const useLastFolderName = (path: string) => path.split("/").slice(-1)[0];

export default useLastFolderName;
