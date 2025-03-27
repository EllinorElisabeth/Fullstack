import ITrump from "./ITrump";

interface ITrumpContext {

    thoughts: ITrump[];
    addThought: (newThought: ITrump) => void;
    updateThought: (updateThought: ITrump) => void;
    deleteThought: (id: number) => void;
    setThoughts: React.Dispatch<React.SetStateAction<ITrump[]>>

}

export default ITrumpContext;