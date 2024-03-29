import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carte from "../components/Carte/Carte"
import Infos from "../components/Contact/Infos"
import Hotes from "../components/Contact/Hotes"

import SubTitle from "../components/Title/SubTitle"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Infos />
    <SubTitle title="VOS HÔTES" />
    <Hotes />
    <SubTitle title="ACCÉDER AU CHÂTEAU" />
    <div
      className="carte_wrapper"
      style={{ width: "100vw", position: "relative", zIndex: "1" }}
    >
      <Carte />
    </div>
  </Layout>
)

export default SecondPage
