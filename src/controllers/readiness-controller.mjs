import {listAllReadiness} from '../models/readiness-model.mjs';


const getReadiness = async (req, res) => {
  const result = await listAllReadiness();
  console.log(result);
  if (result.error) {
    return res.status(result.error).json(result.message);
  }

  return res.json(result);
};

export {getReadiness};
