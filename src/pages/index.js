import React from "react"
import Sims from "../../static/jdsims.jpg"
import Layout from "../components/layout"
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps"

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 33.77639, lng: -84.36926 }}
    >
      <Marker
        position={{ lat: 33.77639, lng: -84.36926 }}
        label="JD Sims Recreation Center"
      />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const isClient = typeof window !== "undefined"

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "cornflowerBlue",
          height: "100%",
          border: "2px solid chocolate",
          margin: "10px",
          padding: "0 0 100px",
        }}
      >
        <h1>JD Sims</h1>
        <img src={Sims} alt="James Davis Sims" width="90%" height="90%"></img>

        {isClient && (
          <>
            <h2>Recreation Center</h2>
            <div style={{ width: "80%", height: "300px" }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </div>
          </>
        )}
        <h2>BIO</h2>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
          }}
        >
          Mr. James D. Sims born on January 7, 10-6 in Stone Mountain, Ga to Mr.
          and Mrs. James Davis. He was reared by his grandparents and assumed
          Sims as his surname.
        </p>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
          }}
        >
          He was baptized by the late Reverand Babcock at Big Bethel A.M.E.
          Church in 1929 where he was very active in many areas of the church.
          J.D. attended David T. Howard evening school were he met Miss Vivian
          Andrene Jones (whom he married many yeas later). To this union of 41
          years were born 3 children: James D. Sims Jr., Sibyl Andrene and
          Daphen Regina.
        </p>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
          }}
        >
          J.D.served in the armed for 4 years, 4 months and 18 days. His tour of
          duty was in the Pacific Theater of War. He spent 3 years of this time
          in the Jungles of India. He loved to relate his experiences in the
          service. He was honorably discharged in August, 1945 at the end of
          World War II. He changed his church membership to Denson Temple
          People's Free Methodist Church and married a month or so later.
        </p>
      </div>
    </Layout>
  )
}
