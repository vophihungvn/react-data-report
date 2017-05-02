import bodyParser from 'body-parser'
import express    from 'express'
import fs         from 'fs'      
import logger     from 'morgan'
import path       from 'path'
import Sequelize  from 'sequelize'


var sequelize = new Sequelize(
	'postgres', 
	'postgres', 
	'123456', 
	{
  	host: 'localhost',
  	dialect: 'postgres',
	}
)

//Model area
let Movie = sequelize.define('movie', {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true
  },
  genres: Sequelize.STRING,
  name: Sequelize.STRING
}, {
	freezeTableName: true
});

let AverageRating  = sequelize.define('average_rating', {
  movie_id: Sequelize.INTEGER, 
  rating: Sequelize.FLOAT
}, {
	freezeTableName: true
});
//////////
///


///////////////
/// Controller

///////////////
let app = express()

app
  app.use(logger('common'))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
  //cors
  .use((req, res, next) => {
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	  res.header('Access-Control-Allow-Headers', 'Content-Type');

	  next();
	})
  //read data file
  .use('/import/movie', (req, res) => {
  	// let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'movies.dat')).toString();
  	// let movies = data.split('\n')
  	// let tasks = []
  	// movies.forEach(movie => {
  	// 	let info = movie.split('::')
  	// 	let film = {
  	// 		id: info[0],
  	// 		name: info[1],
  	// 		genres: info[2]
  	// 	}
  	// 	tasks.push(Movie.create(film))
  	// })

  	// Promise.all(tasks)
  	// .then(() => {
  	// 	res.send('ok')
  	// })
  })
  .use('/import/rating', (req, res) => {
  	// let data = fs.readFileSync(path.join(__dirname, '..', 'data', 'result.csv')).toString();
  	// let ratings = data.split('\n')
  	// let tasks = []
  	// ratings.forEach(rating => {
  	// 	let info = rating.split(',')
  	// 	let ratingInfo = {
  	// 		movie_id: parseInt(info[0]),
  	// 		rating: parseFloat(info[1])
  	// 	}
  	// 	tasks.push(AverageRating.create(ratingInfo))
  	// })

  	// Promise.all(tasks)
  	// .then(() => {
  	// 	res.send('ok')
  	// })
  })
  .use('/report/rating', async (req, res) => {
  	let data = await sequelize.query(`
  		SELECT * 
  		FROM average_rating 
  		LEFT JOIN movie on average_rating.movie_id = movie.id 
  		LIMIT 10
  	`)
  	data = data[0]
  	data = data.reduce((items, item) => {
  		items.push([item.name, item.rating])
  		return items
  	}, [])

  	data = [['name', 'rating'], ...data]
  	res.send(data)
  })
//  .use(response_helper)


app.listen(4000, () => {
  console.log('Server started at port 400');
});

export default app;