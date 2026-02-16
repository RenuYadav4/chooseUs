import api from "./api"

export const validateSpecialDate = async (specialDate)=>{
    const response = await api.post("/api/love/validate",{specialDate});
    return response.data;
};

export const generateLetter = async (answers) => {
  const response = await api.post("/api/love/generate", {
    answers
  });

  return response.data;
};