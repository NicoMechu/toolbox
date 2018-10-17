const request = require('supertest')
const expect = require('chai').expect

const app = require('./app')

console.log('--- Init ---')

describe('echo', function( ){

  it('should return the same string send', async function(){
    let testString = 'This is a test'
    let res = await request(app).post('/echo').send({echo:testString})
    expect(res.statusCode).to.be.equal(200)
    expect(res.body.response).to.be.equal(testString)
  })

  it('should work with large strings', async function(){
    let testString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    let res = await request(app).post('/echo').send({echo:testString})
    expect(res.statusCode).to.be.equal(200)
    expect(res.body.response).to.be.equal(testString)
  })

  it('should work with special characters', async function(){
    let testString = "This is a test áéíóú @łß¢”¶ħ→↓øþ"
    let res = await request(app).post('/echo').send({echo:testString})
    expect(res.statusCode).to.be.equal(200)
    expect(res.body.response).to.be.equal(testString)
  })

  it('should\'t work with empty strings', async function(){
    let testString = ""
    let res = await request(app).post('/echo').send({echo:testString})
    expect(res.statusCode).to.be.equal(400)
  })

  it('should\'t work if "echo" is not send ', async function(){
    let res = await request(app).post('/echo').send({})
    expect(res.statusCode).to.be.equal(400)
  })

  it('should\'t work with invalid paths', async function(){
    let testString = "This is a test"
    let res = await request(app).post('/invalid').send({echo:testString})
    expect(res.statusCode).to.be.equal(404)
  })
})