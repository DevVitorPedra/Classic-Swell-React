import  Pool from 'pg'

 const pool = new Pool.Pool ({
    user:"postgres",
    password: "Si92886423!",
    host: "localhost",
    port: 5432,
    database:"pern_stack_users"
})

export default pool
