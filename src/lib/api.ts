import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import React from 'react'

const postsDirectory = join(process.cwd(), '_posts')
const carsDirectory = join(process.cwd(), '_cars')
const motorbikesDirectory = join(process.cwd(), '_motorbikes')


let Posts: any[]  = [];

export function getPostSlugs(dir) {
  let fullPath = ''
  if (!dir)  fullPath = postsDirectory
  else fullPath = postsDirectory +'/'+ dir
  if(fs.statSync(fullPath).isFile()) return Posts.push(dir);
  fs.readdirSync(fullPath).forEach(file => {
    const absolute = join(dir, file);
    console.log(absolute)
    if (fs.statSync(fullPath).isDirectory()) return getPostSlugs(absolute);
    else return Posts.push(absolute);
  });
}

type Items = {
  [key: string]: string
}

export function getPostBySlug(slug: string[], fields: string[] = []) {
  let realSlug = slug.toString().replace(/,/g, '/').replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  Posts = []
  getPostSlugs('')
  const slugs = Posts
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  console.log(posts)
  
  return posts
}

export function getPosts(fields: string[] = []) {
  Posts = []
  getPostSlugs('')
  const slugs = Posts
  const allPosts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  const posts = {
    hero: {},
    stories: {}
  }

  posts.hero = allPosts.filter((post) => (Boolean(post.hero) === true)).shift() || {}
  posts.stories = allPosts.filter((post) => (Boolean(post.hero) === false)) || []

  return posts
}

// Cars API
export function getCarSlugs(dir) {
  let fullPath = ''
  if (!dir)  fullPath = carsDirectory
  else fullPath = carsDirectory +'/'+ dir
  if(fs.statSync(fullPath).isFile()) return Posts.push(dir);
  fs.readdirSync(fullPath).forEach(file => {
    const absolute = join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) return getCarSlugs(absolute);
    else return Posts.push(absolute);
  });
}

export function getCarBySlug(slug: string[], fields: string[] = [], adaPrice: string) {
  let realSlug = slug.toString().replace(/,/g, '/').replace(/\.md$/, '')
  const fullPath = join(carsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'adaPrice') {
      items[field] = adaPrice
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllCars(fields: string[] = []) {
  Posts = []
  getCarSlugs('')
  const adaPrice = await getADAPrice()
  const slugs = Posts
  const posts = slugs
    .map((slug) => getCarBySlug(slug, fields, adaPrice['price']))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  return posts
}

export async function getCars(fields: string[] = []) {
  Posts = []
  getCarSlugs('')
  
  const adaPrice = await getADAPrice()
  const slugs = Posts
  const allPosts = slugs
    .map((slug) => getCarBySlug(slug, fields, adaPrice['price']))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  const posts = {
    hero: {},
    stories: {}
  }

  posts.hero = allPosts.filter((post) => (Boolean(post.hero) === true)).shift() || {}
  posts.stories = allPosts.filter((post) => (Boolean(post.hero) === false)) || []

  return posts
}

// Motorbikes API
export function getMotorbikeSlugs(dir) {
  let fullPath = ''
  if (!dir)  fullPath = motorbikesDirectory
  else fullPath = motorbikesDirectory +'/'+ dir
  if(fs.statSync(fullPath).isFile()) return Posts.push(dir);
  fs.readdirSync(fullPath).forEach(file => {
    const absolute = join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) return getMotorbikeSlugs(absolute);
    else return Posts.push(absolute);
  });
}

export function getMotorbikeBySlug(slug: string[], fields: string[] = [], adaPrice: string) {
  let realSlug = slug.toString().replace(/,/g, '/').replace(/\.md$/, '')
  const fullPath = join(motorbikesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'adaPrice') {
      items[field] = adaPrice
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllMotorbikes(fields: string[] = []) {
  Posts = []
  getMotorbikeSlugs('')
  const adaPrice = await getADAPrice()
  const slugs = Posts
  const posts = slugs
    .map((slug) => getMotorbikeBySlug(slug, fields, adaPrice['price']))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  return posts
}

export async function getMotorbikes(fields: string[] = []) {
  Posts = []
  getMotorbikeSlugs('')

  const adaPrice = await getADAPrice()
  const slugs = Posts
  const allPosts = slugs
    .map((slug) => getMotorbikeBySlug(slug, fields, adaPrice['price']))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  const posts = {
    hero: {},
    stories: {}
  }

  posts.hero = allPosts.filter((post) => (Boolean(post.hero) === true)).shift() || {}
  posts.stories = allPosts.filter((post) => (Boolean(post.hero) === false)) || []

  return posts
}


//Price API
export async function getADAPrice() {
  const url = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCBUSD'
  const response = await fetch(url)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

  return response
}
