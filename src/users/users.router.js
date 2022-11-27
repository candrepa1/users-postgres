const { getAllUsers, getUserById, postUser, patchUser, deleteUser } = require('./users.services');

const usersRouter = require('express').Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/', postUser);

usersRouter.patch('/:id', patchUser);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;