'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  createCountry: async (root, { input }) => {

    let db
    let country

    try {
      db = await connectDb()
      country = await db.collection('countries').insertOne(input)
      input._id = country.insertedId
    } catch (error) {
      console.error(error)
    }

    return input
  },
  createUser: async (root, { input }) => {

    let db
    let user

    try {
      db = await connectDb()
      console.log(input)
      user = await db.collection('users').insertOne(input)

    } catch (error) {
      console.error(error)
    }

    return input
  },
  addCountry: async (root, { nickname, iso_code }) => {

    let db
    let user
    let country

    try {
      db = await connectDb()
      user = await db.collection('users').findOne({
        nickname: nickname
      })
      country = await db.collection('countries').findOne({
        iso_code: iso_code
      })

      if (!user || !country) {
        throw new Error('El usuario o el pais no existe.')
      }

      await db.collection('users').updateOne({
        nickname: nickname
      },
        { $set: { country: { name: country.name, iso_code: country.iso_code } } }
      )

    } catch (error) {
      console.error(error)
    }

    return user
  }
}