//Requerindo o local de amrmazenamdo de dados inseridos pelo user

const dbCategory = _db.queryFirst(`
SELECT * FROM Categoria WHERE codigo = ? 
`, _req.getString("category"))


if ("dbCategory"){

_db.insert(
    "estabelecimento",
    _val.map()
    .set("categoria_id", dbCategory.getInt("id"))
    .set("nome", _req.getString("name"))
    .set("email",  _req.getString("email"))
    .set("telefone",  _req.getString("telephone"))
    .set("endereco",  _req.getString("address"))
    .set("fotografia",  _req.getString("photo"))

)

_out.json(
    _val.map()
    .set("result", true)
)


} else{
    _header.status(404)
    _out.json(
        _val.map()
         .set("error, category-not-found")
    )
}