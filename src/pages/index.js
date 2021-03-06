import React from "react";
import { Link, graphql } from "gatsby";

import DataTable from './../components/data-table';

const IndexPage = ({ data }) => {
  const { allSongsJson } = data;

  return (<div>
    <h1>Pato Viewer - <small>{allSongsJson.totalCount} músicas</small></h1>

    <Link to="/tone">Ordenar por tom</Link>

    <DataTable allSongsJson={allSongsJson} />
  </div>)
}

export const IndexQuery = graphql`
  query {
    allSongsJson(sort: {order: DESC, fields: popularity}) {
      totalCount,
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
          features {
            acousticness
            danceability
            duration_ms
            energy
            instrumentalness
            key
            liveness
            loudness
            speechiness
            mode
            tempo
            time_signature
            type
            valence
          }
        }
      }
    }
  }
`

export default IndexPage;