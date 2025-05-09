// src/pages/Tarifs.jsx
import React from "react";

const data = [
  { pt: 1, f: "22 × 16 cm", p: "22 × 14 cm", m: "22 × 12 cm" },
  { pt: 2, f: "24 × 19 cm", p: "24 × 16 cm", m: "24 × 14 cm" },
  { pt: 3, f: "27 × 22 cm", p: "27 × 19 cm", m: "27 × 16 cm" },
  { pt: 4, f: "33 × 24 cm", p: "33 × 22 cm", m: "33 × 19 cm" },
  { pt: 5, f: "35 × 27 cm", p: "35 × 24 cm", m: "35 × 22 cm" },
  { pt: 6, f: "41 × 33 cm", p: "41 × 27 cm", m: "41 × 24 cm" },
  { pt: 8, f: "46 × 38 cm", p: "46 × 33 cm", m: "46 × 27 cm" },
  { pt: 10, f: "55 × 46 cm", p: "55 × 38 cm", m: "55 × 33 cm" },
  { pt: 12, f: "61 × 50 cm", p: "61 × 46 cm", m: "61 × 38 cm" },
  { pt: 15, f: "65 × 54 cm", p: "65 × 50 cm", m: "65 × 46 cm" },
  { pt: 20, f: "73 × 60 cm", p: "73 × 54 cm", m: "73 × 50 cm" },
  { pt: 25, f: "81 × 65 cm", p: "81 × 60 cm", m: "81 × 54 cm" },
  { pt: 30, f: "92 × 73 cm", p: "92 × 65 cm", m: "92 × 60 cm" },
  { pt: 40, f: "100 × 81 cm", p: "100 × 73 cm", m: "100 × 65 cm" },
  { pt: 50, f: "116 × 89 cm", p: "116 × 81 cm", m: "116 × 73 cm" },
  { pt: 60, f: "130 × 97 cm", p: "130 × 89 cm", m: "130 × 81 cm" },
  { pt: 80, f: "146 × 114 cm", p: "146 × 97 cm", m: "146 × 89 cm" },
  { pt: 100, f: "162 × 130 cm", p: "162 × 114 cm", m: "162 × 97 cm" },
  { pt: 120, f: "195 × 130 cm", p: "195 × 114 cm", m: "195 × 97 cm" },
];

export default function Tarifs() {
  return (
    <main className="gallery-page">
      <h2>Tarifs selon les dimensions de la toile (1 point = 40 €)</h2>
      <div style={{ overflowX: "auto" }}>
        <div className="table-responsive">
        <table className="tarifs-table">
          <thead>
            <tr>
              <th>Points</th>
              <th>F (figure)</th>
              <th>P (paysage)</th>
              <th>M (marine)</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ pt, f, p, m }) => (
              <tr key={pt}>
                <td>{pt}</td>
                <td>{f}</td>
                <td>{p}</td>
                <td>{m}</td>
                <td>{pt * 40} €</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {/* Le paragraphe à la fin */}
        <p className="tarifs__notes">
          Les termes “figure”, “paysage” et “marine” sont tout à fait
          arbitraires. Un artiste peut peindre un portrait sur un format M
          (marine), et peindre une plage sur un format P (paysage).
          <br />
          Les dimensions d’un tableau sont données en commençant par l’arête
          verticale. Ainsi un 40 F sera mentionné 100 × 81 cm ou 81 × 100 selon
          que le peintre a choisi de le peindre verticalement ou
          horizontalement.
        </p>
      </div>
      </main>
  );
}
