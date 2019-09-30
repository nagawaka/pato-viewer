import React from "react";

const DataTable = ({ allSongsJson }) => {
  const tones = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb"];

  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Nome</th>
          <th>Álbum</th>
          <th>Popularidade</th>
          <th>Lançamento</th>
          <th>Tom</th>
          <th>time_signature</th>
          <th>acousticness</th>
          <th>danceability</th>
          <th>energy</th>
          <th>instrumentalness</th>
          <th>liveness</th>
          <th>loudness</th>
          <th>speechiness</th>
          <th>tempo</th>
          <th>valence</th>
          <th>duration_ms</th>
        </tr>
      </thead>
      <tbody>
        {allSongsJson.edges.map((song, idx) => {
          const { node } = song;
          const { features, album } = node;

          return (
            <tr key={song.node.id}>
              <td>{idx + 1}</td>
              <td>{node.name}</td>
              <td>{album.name}</td>
              <td>{node.popularity}</td>
              <td>{album.release_date}</td>
              <td>{tones[features.key % tones.length]} ({features.key}) {features.mode==1 ? '' : 'm'}</td>
              <td>{features.time_signature}</td>
              <td>{features.acousticness}</td>
              <td>{features.danceability}</td>
              <td>{features.energy}</td>
              <td>{features.instrumentalness}</td>
              <td>{features.liveness}</td>
              <td>{features.loudness}</td>
              <td>{features.speechiness}</td>
              <td>{features.tempo}</td>
              <td>{features.valence}</td>
              <td>{features.duration_ms}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable;