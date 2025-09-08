const AllStudent = async () => {
  const res = await fetch("./index.json");
  const data = await res.json();

  return data;
};

export { AllStudent };
