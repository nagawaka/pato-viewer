import React from "react";
import { graphql } from "gatsby";



const IndexPage = ({ data }) => {
  const { allSongsCsv } = data;

  return (<div>
    <h1>Pato Viewer</h1>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Álbum</th>
          <th>Lançamento</th>
          <th>Relacionado</th>
        </tr>
      </thead>
      <tbody>
        {allSongsCsv.edges.map(song => (
          <tr key={song.node.id}>
            <td>{song.node.id}</td>
            <td>{song.node.nome}</td>
            <td>{song.node.album}</td>
            <td>{song.node.release}</td>
            <td>{song.node.related}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export const IndexQuery = graphql`
  query {
    allSongsCsv(sort: {order: ASC, fields: [release, album]}) {
      edges {
        node {
          id
          nome
          album
          release
          related
        }
      }
    }
  }
`

export default IndexPage;