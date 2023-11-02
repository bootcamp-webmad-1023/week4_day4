const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index")
})



// ROUTE PARAMS EXAMPLE
// http://localhost:5005/vuelos/madrid/berlin/23-11-2022

router.get('/vuelos/:origin_city/:destination_city/:departure_date', (req, res) => {

  const { origin_city, destination_city, departure_date } = req.params

  res.send(`Aquí irán los vuelos de ${origin_city} a ${destination_city} el día ${departure_date}`)
})




// QUERY STRINGS EXAMPLE
// http://localhost:5005/tienda?prenda=pantalon&temporada=verano&talla=M&color=rojo

router.get('/tienda', (req, res) => {

  const { prenda, temporada, talla, color } = req.query

  res.send(`Aquí irán los ${prenda} de tempotada ${temporada}, talla ${talla} y de color ${color}`)

})



// FLIGHTS SEARCH FORM EXAMPLE


// Flights form (render)
router.get('/vuelos/buscar', (req, res) => {
  res.render('flights-search')
})


// Flights form (handling)
router.get('/vuelos/resultados', (req, res) => {

  const { origin, destination, date } = req.query

  res.render('flights-results', req.query)
})


module.exports = router