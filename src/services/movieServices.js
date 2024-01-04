const Movie = require('../models/Movie');
const User = require('../models/User');

exports.create = (movieData) => Movie.create(movieData);

exports.getAll = () => Movie.find().lean();

exports.getOne = (movieId) => Movie.findById(movieId).populate('voted');

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

exports.findOwner = (userId) => User.findById(userId).lean();

exports.getMyCreatedPost = (userId) => Movie.find({ owner: userId}).lean();

exports.updateOne = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData);