export const enableDebug = false;

export const uiDebug = (isClient: boolean) => {
  if (enableDebug) {
    return isClient ? "border-red-400 border" : "border-blue-400 border";
  }

  return "";
};
