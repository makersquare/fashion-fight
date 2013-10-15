# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Contest.create([
  {
    title: "I have a job interview. Which is the better outfit?",
    left: "http://i.imgur.com/dIz7VAa.jpg",
    right: "http://i.imgur.com/bVX4GjH.jpg"
  },
  {
    title: "i am a assassin and want 2 bee pretty. witch shuld i where?",
    right: "http://i.imgur.com/7kTy5ne.jpg",
    left: "http://i.imgur.com/48ev9Lz.jpg"
  }
])
