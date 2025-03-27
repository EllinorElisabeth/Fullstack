import { useState, createContext, FC, ReactNode, useEffect } from "react";
import ITrumpContext from "../interfaces/ITrumpContext";
import ITrump from "../interfaces/ITrump";
import TrumpService from "../services/TrumpService";

export const TrumpContext = createContext<ITrumpContext | null>(null);

interface Props {
    children: ReactNode;
}

export const TrumpProvider: FC<Props> = ({ children }) => {

    const [thoughts, setThoughts] = useState<ITrump[]>([]);
    const { getAllTrumpThoughts, addTrumpThought, updateTrumpThought, deleteTrumpThought } = TrumpService;

    useEffect(() => {
        const getAllThoughts = async () => {
            try {
                const result = await getAllTrumpThoughts();
                setThoughts(result.data);
            } catch (error) {
                console.error("Error: get all thoughts", error);
            }
        };
        getAllThoughts();
    }, []);

    const addThought = async (newThought: ITrump) => {
        try {
            await addTrumpThought(newThought);
            const fetchTrumpThoughts = await getAllTrumpThoughts();
            setThoughts(fetchTrumpThoughts.data);
        } catch (error) {
            console.error("Error: add new thought", error);
        }
    };

    const updateThought = async (updateThought: ITrump) => {
        try {
            await updateTrumpThought(updateThought);
            const fetchTrumpThoughts = await getAllTrumpThoughts();
            setThoughts(fetchTrumpThoughts.data);
        } catch (error) {
            console.error("Error: update thought", error);
        }
    };

    const deleteThought = async (id: number) => {
        try {
            await deleteTrumpThought(id);
            const fetchTrumpThoughts = await getAllTrumpThoughts();
            setThoughts(fetchTrumpThoughts.data);
        } catch (error) {
            console.error("Error: delete thought", error);
        }
    };

    return (
        <TrumpContext.Provider value={{ thoughts, addThought, updateThought, deleteThought, setThoughts }}>
            {children}
        </TrumpContext.Provider>
    );

};