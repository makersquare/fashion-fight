# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

one = Contest.create({
  title: "I have a job interview. Which is the better outfit?",
  left: "http://i.imgur.com/dIz7VAa.jpg",
  right: "http://i.imgur.com/bVX4GjH.jpg"
})
two = Contest.create({
  title: "I have two ideas for a fashion show outfit. Which do you think is better? Also I'm an assasin",
  right: "http://i.imgur.com/7kTy5ne.jpg",
  left: "http://i.imgur.com/48ev9Lz.jpg"
})

one.votes.create(side: 'left', username: 'Bob', comment: 'stilish')
one.votes.create(side: 'right', username: 'Carl', comment: 'brillient!')

two.votes.create(side: 'left', username: 'Bob', comment: 'haha kol')
two.votes.create(side: 'right', username: 'Alice', comment: 'Wonderful!')
