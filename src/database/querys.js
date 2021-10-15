export const queries =  {
    getAllProducts: "SELECT * FROM Products",
    addNewProduct:  
    "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
    getProductbyId: 'SELECT * FROM Products WHERE Id = @Id ',
    DeleteProduct: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id',
    getTotalProduct: 'SELECT COUNT(*) FROM Products',
    updateProductbyId: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity'

}