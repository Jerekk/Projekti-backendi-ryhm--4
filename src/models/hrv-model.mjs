

import promisePool from '../utils/database.mjs';

const listAllHrv = async () => {
    try {
      const sql = 'SELECT hrvValue FROM hrvData WHERE user_id = 5 ORDER BY created_at DESC LIMIT 20;';
      const [rows] = await promisePool.query(sql);
    //   localStorage.setItem('hrvData', JSON.stringify(rows));
      return rows;
    } catch (error) {
      console.error('listAllReadiness', error);
      return {error: 500, message: 'db error'};
    }
  };

export {listAllHrv};

