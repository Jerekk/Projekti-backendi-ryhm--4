import {listAllHrv} from '../models/hrv-model.mjs';

const getHrv = async (req, res) => {
  const result = await listAllHrv();
  console.log(result);
  if (result.error) {
    return res.status(result.error).json(result.message);
  }

  return res.json(result);
};

export {getHrv};
