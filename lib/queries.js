'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  getCountries: async () => {
    let db
    let countries = []

    try {
      db = await connectDb()
      countries = await db.collection('countries').find().toArray()
    } catch (error) {
      console.error(error)
    }

    return countries
  },
  getCountry: async (root, {
    iso_code
  }) => {
    let db
    let country

    try {
      db = await connectDb()
      country = await db.collection('countries').findOne({
        iso_code: iso_code
      })
    } catch (error) {
      console.error(error)
    }

    return country
  },
  getProfessions: async () => {
    let db
    let professions = []

    try {
      db = await connectDb()
      professions = await db.collection('professions').find().toArray()
    } catch (error) {
      console.error(error)
    }

    return professions
  },
  getProfession: async (root, {
    id
  }) => {
    let db
    let profession

    try {
      db = await connectDb()
      profession = await db.collection('professions').findOne({
        _id: id
      })
    } catch (error) {
      console.error(error)
    }

    return profession
  },
  getTopics: async () => {
    let db
    let topics = []

    try {
      db = await connectDb()
      topics = await db.collection('topics').find().toArray()
    } catch (error) {
      console.error(error)
    }

    return topics
  },
  getTopic: async (root, {
    id
  }) => {
    let db
    let topic

    try {
      db = await connectDb()
      topic = await db.collection('topics').findOne({
        _id: id
      })
    } catch (error) {
      console.error(error)
    }

    return topic
  },
  getUsers: async () => {
    let db
    let users = []

    try {
      db = await connectDb()
      users = await db.collection('users').find().toArray()
    } catch (error) {
      console.error(error)
    }

    return users
  },
  getUser: async (root, {
    nickname
  }) => {
    let db
    let user

    try {
      db = await connectDb()
      user = await db.collection('users').findOne({
        nickname: nickname
      })
    } catch (error) {
      console.error(error)
    }

    return user
  }
}