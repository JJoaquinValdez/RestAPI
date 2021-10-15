import { getConnection, sql, queries } from '../database/index'

export const getProducts =  async (req,res) => {
   try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    
    res.json(result.recordset);
   } catch (error) {
       res.status(500);
       res.send(error.message);
   }
}

export const createNewProduct = async (req,res) =>{
    const { name, description} = req.body;
    let {quantity} = req.body;

    if(name==null ||description==null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
    }
    if(quantity==null){
        quantity=0;
    }
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input("name", sql.VarChar,name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity) 
    .query(queries.addNewProduct);
    res.json({name, description, quantity});
  } catch (error) {
        res.status(500);
        res.send(error.message);
  }
}
export const getProductbyId = async (req,res)=>{
   const{id} = req.params;
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('Id', id)
    .query(queries.getProductbyId);
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const DeleteProductbyId = async (req,res)=>{
    const{id} = req.params;
   try {
     const pool = await getConnection();
     const result = await pool.request()
     .input('Id', id)
     .query(queries.DeleteProduct);
     res.sendStatus(204);
   } catch (error) {
     res.status(500);
     res.send(error.message);
   }
 }

 export const getTotalProducts = async (req,res)=>{
     try {
        console.log("Count");
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalProduct);
        res.json(result.recordset[0]['']);
     } catch (error) {
        res.status(500);
        res.send(error.message);
     }
 }
 export const updateProductbyId = async (req,res) =>{
  const {name,description, quantity} = req.body;
  if(name==null||description==null, quantity==null){
    return res.status(400).json({msg: "Bad request. Please Fill all fields"});
  }

  const pool = await getConnection();
  await pool.request()
  .input("name",sql.VarChar, name)
  .input("description", sql.Text, description)
  .input("quantity", sql.Int, quantity)
  .query(queries.updateProductbyId);
  res.json({name, description, quantity}); 
 }