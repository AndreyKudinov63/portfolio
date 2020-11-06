import React from 'react';

const TableHeader = () => {
  return (
    <thead striped bordered hover variant="dark">
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th></th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.surname}</td>
        <td>
          <button class="btn-outline-primary btn-lt btn-change7" onClick={() => props.removeCharacter(index)}>Удалить</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = props => {
  const { characterData, removeCharacter } = props

  return (
    <table class="table">
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

export default Table;