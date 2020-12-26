import React from "react"
import ArmySims from "../../static/jdsims.jpg"
import Sims from "../../static/SimsPortrait.jpg"
import ArmyGroup from "../../static/SimsArmyPhoto.jpg"
import Layout from "../components/layout"

import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query StaticMapQuery {
    staticMap {
      childFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const isClient = typeof window !== "undefined"

const simRecUrl =
  "https://www.google.com/maps/uv?pb=!1s0x88f5041aa532941b%3A0xcba7d18deb2319f3!3m1!7e115!4s%2Fmaps%2Fplace%2Fjd%2Bsims%2F%4033.766456%2C-84.3695551%2C3a%2C75y%2C23.11h%2C90t%2Fdata%3D*213m4*211e1*213m2*211syMmKEOvSrYQtngTy2CSzYQ*212e0*214m2*213m1*211s0x88f5041aa532941b%3A0xcba7d18deb2319f3%3Fsa%3DX!5sjd%20sims%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2syMmKEOvSrYQtngTy2CSzYQ&hl=en&sa=X&ved=2ahUKEwiC6sqOhOvtAhVSjlkKHb1GBT8Qpx8wCnoECBMQCA"

export default function Home({ data }) {
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
        <img
          src={Sims}
          alt="James Davis Sims"
          width="90%"
          height="90%"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        ></img>

        <>
          <h2>Recreation Center</h2>
          <p
            style={{
              margin: "10px 40px",
              textAlign: "left",
              maxWidth: "600px",
            }}
          >
            Atlanta is home to{" "}
            <span>
              <a
                style={{ color: "white", textDecoration: "underline" }}
                href={simRecUrl}
                target="_blank"
              >
                J.D. Sims Recreation Center
              </a>
            </span>
            .
          </p>

          <a
            style={{
              width: "80%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
            }}
            href={simRecUrl}
            target="_blank"
          >
            <Img
              fluid={data.staticMap.childFile.childImageSharp.fluid}
              alt="rec center"
              style={{ width: "100%", height: "300px" }}
            />
          </a>
        </>
        <h2>ARMY PHOTOS</h2>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
            maxWidth: "600px",
          }}
        >
          Photos from his time in the military.
        </p>
        <img
          src={ArmyGroup}
          alt="Florida Army 1941"
          width="90%"
          height="90%"
        ></img>
        <div style={{ paddingTop: "20px" }}></div>
        <img
          src={ArmySims}
          alt="James Davis Sims"
          width="90%"
          height="90%"
          style={{ maxWidth: "500px", maxHeight: "500px" }}
        ></img>
        <h2>BIO</h2>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
            maxWidth: "600px",
          }}
        >
          Mr. James D. Sims born on January 7, 1906 in Stone Mountain, Ga to Mr.
          and Mrs. James Davis. He was reared by his grandparents and assumed
          Sims as his surname.
        </p>
        <p
          style={{
            margin: "10px 40px",
            textAlign: "left",
            maxWidth: "600px",
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
            maxWidth: "600px",
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
