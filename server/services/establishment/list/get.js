const dbSearch = `%${_req.getString('search')}%`;

const dbEstablishments = _db.query(
  `
SELECT   
estabelecimento.*,
categoria.nome AS categoria_nome ,
categoria.codigo AS categoria_codigo

FROM estabelecimento 

INNER JOIN categoria ON estabelecimento.categoria_id = categoria.id
WHERE 1=1 
AND estabelecimento.active = true
AND categoria.active = true
AND (
  categoria.nome LIKE ?
  OR
  estabelecimento.nome LIKE ?
)
 
`,
  dbSearch,
  dbSearch,
);

// Esta forma não é muito utilizada no React
const list = _val.list();
for (const dbEstablishment of dbEstablishments) {
  list.add(
    _val
      .map()
      .set('uid', dbEstablishment.getString('uid'))
      .set('name', dbEstablishment.getString('nome'))
      .set('email', dbEstablishment.getString('email'))
      .set('telephone', dbEstablishment.getString('telefone'))
      .set('address', dbEstablishment.getString('endereco'))
      .set(
        'category',
        _val
          .map()
          .set('name', dbEstablishment.getString('categoria_nome'))
          .set('code', dbEstablishment.getString('categoria_codigo')),
      ),
  );
}

_out.json(list);
