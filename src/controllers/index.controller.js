const {Pool}= require('pg');
const config={
    user: 'postgres',
    host: 'localhost',
    database: 'frameworks',
    password: 'asd'
};

const pool = new Pool(config);

const getProducto = async (req, res) =>{
    const response = await pool.query('select * from producto')
    console.log(response)
    res.json(response.rows)
}

const postProducto = async (req, res) =>{
    const {idproducto, nombrep, valorp} = req.body
    const response = await pool.query('insert into producto(idproducto, nombrep, valorp) values($1,$2,$3)',[idproducto, nombrep, valorp])
    console.log(response)
    res.json('Registro Exitoso'+ response.rows)
}

module.exports = {
    getProducto,
    postProducto
}