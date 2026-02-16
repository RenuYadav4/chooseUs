import api from "./api"

export const validateSpecialDate = async (specialDate)=>{
    const response = await api.post("/validate",{specialDate});
    return response.data;
};

export const generateLetter = async (answers) => {
  const response = await api.post("/generate", {
    answers
  });

  return response.data;
};