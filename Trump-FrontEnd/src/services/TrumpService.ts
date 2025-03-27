import axios from 'axios';
import ITrump from '../interfaces/ITrump';

const TrumpService = (
    () => {

        const url = 'http://localhost:5115/Trump'

        // Get
        const getAllTrumpThoughts = async () => {
            const response = await axios.get(url);
            return response;
        }

        const getTrumpThoughtById = async (id: number) => {
            const response = await axios.get(`${url}/${id}`);
            console.log(response)
            return response;
        }

        const getTrumpThoughtByText = async (thought: string) => {
            const response = await axios.get(`${url}/GetByThought/${thought}`);
            return response;
        }

        // Post
        const addTrumpThought = async (newThought: ITrump) => {
            const response = await axios.post(url, newThought);
            console.log(response);
        }

        // Update
        const updateTrumpThought = async (updateThought: ITrump) => {
            const response = await axios.put(url, updateThought);
            console.log(response);
        }

        // Delete
        const deleteTrumpThought = async (id: number) => {
            const response = await axios.delete(`${url}/${id}`);
            console.log(response);
        }

        return {
            getAllTrumpThoughts,
            getTrumpThoughtById,
            getTrumpThoughtByText,
            addTrumpThought,
            updateTrumpThought,
            deleteTrumpThought
        }

    }
)();

export default TrumpService;

