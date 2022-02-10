const pool = require("../config/config")

const getDatas = (req, res) => {
    pool.query('SELECT * FROM friends_house ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getDataById = (req, res) => {
    const id = parseInt(req.query.id)
  
    pool.query('SELECT * FROM friends_house WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

const createData = async(req, res) => {
  const { friends_name, address, house_color, flood_risk, floors } = req.body
  const maxId = await pool.query('SELECT max(id) FROM friends_house')
  const inputId = maxId.rows[0].max + 1

  pool.query('INSERT INTO friends_house (id, friends_name, address, house_color, flood_risk, floors) VALUES ($1, $2,$3,$4,$5,$6)', [inputId, friends_name, address, house_color, flood_risk, floors], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added : ${friends_name}`)  
  })
  
}

const updateData = (req, res) => {
    const id = parseInt(req.query.id)
    const { friends_name, address, house_color, flood_risk, floors } = req.body
  
    pool.query(
      'UPDATE friends_house SET friends_name =$1, address=$2, house_color=$3, flood_risk=$4, floors=$5 WHERE id=$6',
      [friends_name, address, house_color, flood_risk, floors, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
      })
}

const deleteData = (req, res) => {
    const id = parseInt(req.query.id)
  
    pool.query('DELETE FROM friends_house WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(`User deleted with ID: ${id}`)
    })
  }

module.exports = {
    getDatas,
    getDataById,
    createData,
    updateData,
    deleteData
}