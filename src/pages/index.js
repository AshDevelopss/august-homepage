import * as React from "react"
import Layout from '../components/layout';
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import FAQs from "../components/Faq";
import Testimonials from "../components/Testimonials";

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <Testimonials />
    <FAQs />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title=" August Home" />

export default IndexPage
