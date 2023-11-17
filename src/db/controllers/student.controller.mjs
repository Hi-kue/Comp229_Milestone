// i will create here a simple template for the next person
import users from '../models/student.model.mjs';

const createUser = async (req, res) => {
    // put logic to create a user
};

const listAllUsers = async (req, res) => {
    // put logic to list all users
    // trying a sample to check the current db values made by Dongli
    try {
        // query db to find all users
        const userList = await users.find({});
    
        // send list of users as a json format
        res.json(userList);
      } catch (error) {
        // handle error
        console.error('Error listing all users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};

const fetchUser = async (req, res) => {
    // put logic to fetch a user by ID
};

const updateUser = async (req, res) => {
    // put logic to update a user
};

const deleteUser = async (req, res) => {
    // put logic to delete a user
};

export { createUser, listAllUsers, fetchUser, updateUser, deleteUser };