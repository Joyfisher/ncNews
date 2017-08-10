process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const server = require('../server');
const saveTestData = require('../seed/test.seed');
const config = require('../config');
var mongoose = require('mongoose');
const db = config.DB[process.env.NODE_ENV] || process.env.DB;

describe('API', function () {
  before((done) => {
    mongoose.connection.dropDatabase()
      .then(() => saveTestData(db, done));
  });
  describe('GET /', function () {
    it('responds with status code 200', function (done) {
      request(server)
        .get('/')
        .end((err, res) => {
          if (err) done(err);
          else {
            expect(res.status).to.equal(200);
            done();
          }
        });
    });
  });
  describe('GET /topics', function () {
    it('responds with all topics', function (done) {

      request(server)
        .get('/api/topics')
        .end((err, res) => {
          if (err) return console.log(err);
          expect(res.status).to.equal(200);
          expect(res.body.topics.length).to.equal(3);
          done();

        });
    });
  });
  describe('GET /api/topics/:topic_id/articles', function () {
    it('should return all of the articles that match the requested topic', function (done) {

      request(server)
        .get('/api/topics/football/articles')
        .end((err, res) => {
          if (err) return console.log(err);
          expect(res.status).to.equal(200);
          expect(res.body.articlesByTopic.length).to.equal(1);
          done();
        });
    });
  });

   describe('GET /articles', function () {
     it('responds with all articles', function (done) {
      
       request(server)
         .get('/api/articles')
         .end((err, res) => {
           if (err) return console.log(err);
             expect(res.status).to.equal(200);
             expect(res.body.articles.length).to.equal(2);
             done();
   
         });
     });
   });
});