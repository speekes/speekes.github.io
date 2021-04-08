import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Blockchain from '../components/blockchain'
import Team from '../components/team'
import Layout from '../components/layout'
import { getPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Menu from '../components/menu'


type Props = {
  allPosts: {
    hero: Post
    stories: Post[]
  }
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts.hero
  const morePosts = allPosts.stories

  return (
    <>
      <Layout>
        <Head>
          <title>Speekes - Decentralized Social Media Platform based on Blockchain</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@speekescom" />
          <meta name="twitter:title" content="Speekes - Decentralized Social Media Platform based on Blockchain" />
          <meta name="twitter:description" content={`Welcome to your new 3rd Generation Social Media platform, 
          A blockchain based platform with a social media as layer two solution.`} />
          <meta name="twitter:image" content="https://speekes.com/images/landpage.jpg" />
          <meta
            name="og:description"
            content={`Welcome to your new 3rd Generation Social Media platform, 
            A blockchain based platform with a social media as layer two solution.`}
          />
          <meta property="og:image" content="/assets/images/landpage.jpg" />
        </Head>
        <Container>
          {/* <Menu /> */}
          <Intro />
          <Blockchain />
          <Team />
          {/* <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            News
          </h2> */}
          {/* {heroPost.title !== undefined && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              baseURL='/posts/'
            />
          )} */}
          {/* <section className="p-10 bg-gray-100 text-black">
            {morePosts.length > 0 && <MoreStories posts={morePosts} baseURL='/posts/' />}
          </section> */}
          {/* <Extra /> */}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'hero',
  ])

  return {
    props: { allPosts },
  }
}