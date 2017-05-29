# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Movie.create!([
  {
    title: "The Nice Guys"
  },
  {
    title: "Hell Or High Water"
  },
  {
    title: "Super"
  },
  {
    title: "Fight Club"
  }
  ])

Actor.create!([
  {
    name: "Brad Pitt"
  },
  {
    name: "Edward Norton"
  },
  {
    name: "Rainn Wilson"
  },
  {
    name: "Ellen Page"
  },
  {
    name: "Russell Crowe"
  },
  {
    name: "Ryan Gosling"
  },
  {
    name: "Russell Crowe"
  },
  {
    name: "Ben Foster"
  },
  {
    name: "Chris Pine"
  },
  {
    name: "Jeff Bridges"
  },
  ])


  # Movie.find_by(title: "The Nice Guys").actors << Actor.find_by(name: "Russell Crowe")
  # Movie.find_by(title: "The Nice Guys").actors << Actor.find_by(name: "Ryan Gosling")
  # Movie.find_by(title: "Hell Or High Water").actors << Actor.find_by(name: "Jeff Bridges")
  # Movie.find_by(title: "Hell Or High Water").actors << Actor.find_by(name: "Ben Foster")
  # Movie.find_by(title: "Hell Or High Water").actors << Actor.find_by(name: "Chris Pine")
  # Movie.find_by(title: "Super").actors << Actor.find_by(name: "Rainn Wilson")
  # Movie.find_by(title: "Super").actors << Actor.find_by(name: "Ellen Page")
  # Movie.find_by(title: "Fight Club").actors << Actor.find_by(name: "Brad Pitt")
  # Movie.find_by(title: "Fight Club").actors << Actor.find_by(name: "Edward Norton")


# Comment.create!([
#   {
#     author: "Horace",
#     content: "Love this film",
#   },
#   {
#     author: "Louis",
#     content: "What a good film"
#   },
#   {
#     author: "Tim",
#     content: "Very funny"
#   },
#   {
#     author: "Sophie",
#     content: "Excellent!"
#   }
#   ])
#
# Movie.find_by(title: "The Nice Guys").comments << Comment.find_by(author: "Sophie")
# Movie.find_by(title: "Fight Club").comments << Comment.find_by(author: "Tim")
# Movie.find_by(title: "Super").comments << Comment.find_by(author: "Louis")
# Movie.find_by(title: "Hell Or High Water").comments << Comment.find_by(author: "Horace")
