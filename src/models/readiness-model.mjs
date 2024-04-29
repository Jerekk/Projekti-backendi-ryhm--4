
// readinessModel.js

import promisePool from '../utils/database.mjs';

const listAllReadiness = async () => {
  try {
    const sql =
  'SELECT readiness FROM CubiosData ' +
  'WHERE user_id = 5 ORDER BY entry_date DESC LIMIT 1;';
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (error) {
    console.error('listAllReadiness', error);
    return {error: 500, message: 'db error'};
  }
};

export {listAllReadiness};


