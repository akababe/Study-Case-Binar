const pool = require("../config/config")

const getDatas = (req, res) => {
    pool.query('SELECT * FROM m_stock ORDER BY mat_in ASC', (error, results) => {
      if (error) {
        throw res.status(400).json(error)
      }
      res.status(200).json(results.rows)
    })
}

const getDataById = (req, res) => {
    const mid = parseInt(req.params.mid)
  
    pool.query('SELECT * FROM m_stock WHERE mid = $1', [mid], (error, results) => {
      if (error) {
        throw res.status(400).json(error)
      }
      res.status(200).json(results.rows)
    })
  }

const createData = async(req, res) => {
  const { mat_desc, mat_in, mat_out, mat_rack, mat_vendor } = req.body
  const maxId = await pool.query('SELECT max(mid) FROM m_stock')
  const inputId = maxId.rows[0].max + 1

  pool.query('INSERT INTO m_stock (mid, mat_desc, mat_in, mat_out, mat_rack, mat_vendor) VALUES ($1, $2,$3,$4,$5,$6)', [inputId, mat_desc, mat_in, mat_out, mat_rack, mat_vendor], (error, results) => {
    if (error) {
      throw res.status(400).json(error)
    }
    res.status(201).send(`User added : ${mat_desc}`)  
  })
  
}

const updateData = (req, res) => {
    const mid = parseInt(req.query.mid)
    const { mat_desc, mat_in, mat_out, mat_rack, mat_vendor} = req.body
  
    pool.query(
      'UPDATE m_stock SET mat_desc =$1, mat_in=$2, mat_out=$3, mat_rack=$4, mat_vendor=$5 WHERE mid=$6',
      [mat_desc, mat_in, mat_out, mat_rack, mat_vendor, mid],
      (error, results) => {
        if (error) {
          throw res.status(400).json(error)
        }
        res.status(200).send(`User modified with ID: ${mid}`)
      })
}

const deleteData = (req, res) => {
    const mid = parseInt(req.query.mid)
  
    pool.query('DELETE FROM m_stock WHERE mid = $1', [mid], (error, results) => {
      if (error) {
        throw res.status(400).json(error)
      }
      res.status(200).json(`User deleted with ID: ${mid}`)
    })
  }

module.exports = {
    getDatas,
    getDataById,
    createData,
    updateData,
    deleteData
}