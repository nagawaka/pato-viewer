import React from "react";
import { graphql } from "gatsby";



const IndexPage = ({ data }) => {
  const { allSongsJson } = data;

  return (<div>
    <h1>Pato Viewer</h1>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Álbum</th>
          <th>Lançamento</th>
          <th>Popularidade</th>
        </tr>
      </thead>
      <tbody>
        {allSongsJson.edges.map(song => (
          <tr key={song.node.id}>
            <td>{song.node.id}</td>
            <td>{song.node.name}</td>
            <td>{song.node.album.name}</td>
            <td>{song.node.album.release_date}</td>
            <td>{song.node.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}

export const IndexQuery = graphql`
  query {
    allSongsJson(sort: {order: DESC, fields: popularity}) {
      edges {
        node {
          album {
            id
            name
            release_date
            release_date_precision
          }
          artists {
            name
            id
          }
          id
          name
          track_number
          preview_url
          popularity
        }
      }
    }
  }
`

export default IndexPage;