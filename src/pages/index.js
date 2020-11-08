import React from "react"
import Sims from "../../static/jdsims.jpg"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#917f68",
        height: "100%",
        margin: "0 0 0 0",
        padding: "0 0 100px",
      }}
    >
      <h2>James Davis Sims</h2>
      <img src={Sims} alt="James Davis Sims" width="600" height="600"></img>
      <p
        style={{
          margin: "10px 80px",
          textAlign: "left",
        }}
      >
        Mr. James D. Sims born on January 7, 10-6 in Stone Mountain, Ga to Mr.
        and Mrs. James Davis. He was reared by his grandparents and assumed Sims
        as his surname.
      </p>
      <p
        style={{
          margin: "10px 80px",
          textAlign: "left",
        }}
      >
        He was baptized by the late Reverand Babcock at Big Bethel A.M.E. Church
        in 1929 where he was very active in many areas of the church. J.D.
        attended David T. Howard evening school were he met Miss Vivian Andrene
        Jones (whom he married many yeas later). To this union of 41 years were
        born 3 children: James D. Sims Jr., Sibyl Andrene and Daphen Regina.
      </p>
    </div>
  )
}
