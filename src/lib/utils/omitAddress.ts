const omitAddress = (address: string) => {
  if (!address) return "-";
  const a = address;
  return `${a.slice(0, 8)}...${a.slice(-6)}`;
};
export { omitAddress };
