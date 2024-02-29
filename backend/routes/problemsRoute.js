import express from 'express'
import { Problem } from '../models/problemModel.js'

const router = express.Router();

// Route to SAVE a new Problem
router.post('/', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.closeDate ||
            !request.body.shortDescription ||
            !request.body.detailedDescription
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, closeDate, shortDescription, detailedDescription',
            });
        }
        const newProblem = {
            title: request.body.title,
            closeDate: request.body.closeDate,
            reward: request.body.reward,
            shortDescription: request.body.shortDescription,
            subject: request.body.subject,
            isGov: request.body.isGov,
            detailedDescription: request.body.detailedDescription,
            // image: request.body.image,
        };

        const problem = await Problem.create(newProblem);

        return response.status(201).send(problem);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to GET all problems from DataBase
router.get('/', async (request, response) => {
    try {
        let query = {};

        // Check if subject query parameter is present
        if (request.query.subject) {
            query.subject = request.query.subject;
        }

        if (request.query.isGov) {
            query.isGov = request.query.isGov;
        }

        const problems = await Problem.find(query);

        return response.status(200).json({
            count: problems.length,
            data: problems,
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Getting ONE Problem from Database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const problem = await Problem.findById(id);

        // if (!problem) {
        //     return response.status(404).json({ message: 'Problem not found' });
        // }

        return response.status(200).json(problem);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for UPDATING a Problem
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.closeDate ||
            !request.body.shortDescription ||
            !request.body.detailedDescription
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, closeDate, shortDescription, detailedDescription',
            });
        }

        const { id } = request.params;

        const result = await Problem.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Problem not found' });
        }

        return response.status(200).send({ message: 'Problem updated successfully' });

    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to DELTEing a Problem
router.delete('/:id', async(request, response) => {
    try {
        const { id } = request.params;

        const result = await Problem.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Problem not found' });
        }

        return response.status(200).send({ message: 'Problem deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;