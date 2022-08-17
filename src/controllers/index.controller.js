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
    const {nombrep, valorp} = req.body
    const response = await pool.query('insert into producto(nombrep, valorp) values($1,$2)',[nombrep, valorp])
    console.log(response)
    res.json('Registro Exitoso'+ response.rows)
}



const getVenta = async (req, res) =>{
    const response = await pool.query('select * from venta')
    console.log(response)
    res.json(response.rows)
}

const postVenta = async (req, res) =>{
    const {monto, productos, nombrec} = req.body
    const response = await pool.query('insert into venta(monto, productos, nombrec) values($1,$2,$3)',[monto, productos, nombrec])
    console.log(response)
    res.json('Registro Exitoso'+ response.rows)
}



const getVentaPP = async (req, res) =>{
    const np = req.params.np
    const response = await pool.query('select * from venta where $1 = any (productos)', [np])
    console.log(response)
    res.json(response.rows)
}


const getServMasVen = async (req, res) =>{
    const response = await pool.query('select productos , count(*)as repeticiones from venta group by productos having count(*)>0 order by repeticiones desc')
    console.log(response)
    res.json(response.rows)
}

const getCliMasCom = async (req, res) =>{
    const response = await pool.query('select nombrec , count(*)as repeticiones from venta group by nombrec having count(*)>0 order by repeticiones desc')
    console.log(response)
    res.json(response.rows)
}


module.exports = {
    getProducto,
    postProducto,
    getVenta,
    postVenta,
    getVentaPP,
    getServMasVen,
    getCliMasCom
}