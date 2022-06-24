const movies=[{title:'doctorstrange',score:'6.1'},
              {title:'superman',score:'3.2'},
              {title:'batman',score:'9.2'},
              {title:'spiderman',score:'9.2'},
            ]

//  const newMovies=movies.map(function (movie){
//      return `${movie.title} - ${movie.score / 10}`
//  })

const newMovies=movies.map(movie=>`${movie.title} - ${movie.score / 10}`)
