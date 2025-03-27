import { useContext, useRef, useState } from "react";
import ITrumpContext from "../interfaces/ITrumpContext";
import { TrumpContext } from "../context/TrumpContext";
import ITrump from "../interfaces/ITrump";

const TrumpThoughtList = () => {

    const { thoughts, updateThought, deleteThought } = useContext(TrumpContext) as ITrumpContext;
    const thoughtsCount = thoughts.length;

    const [thoughtObjectIdEditMode, setThoughtObjectIdEditMode] = useState<number | undefined>(undefined);
    const updateThoughtValue = useRef<HTMLTextAreaElement>(null);

    const saveNewThought = (id: number) => {
        if (updateThoughtValue.current !== null) {
            const newText = updateThoughtValue.current.value;
            const updatedObject: ITrump = {
                id: id,
                thought: newText
            }
            updateThought(updatedObject)
            setThoughtObjectIdEditMode(undefined);
        }
    }

    const ShowAllThoughts = () => {
        return thoughts.map((thoughtObject, i) => (
            <li className='sm:col-start-4 sm:col-span-6 sm:grid sm:grid-cols-4 glass-container p-6 rounded-xl' key={i}>
                <div className='sm:col-span-2 place-content-center text-wrap'>
                    {thoughtObjectIdEditMode === thoughtObject.id ? (<textarea className='max-w-max w-full bg-white' ref={updateThoughtValue} defaultValue={thoughtObject.thought} />) : (thoughtObject.thought)}
                </div>
                <div className="sm:col-span-2 flex gap-4 justify-end">
                    {thoughtObjectIdEditMode === thoughtObject.id ? (
                        <div className='flex gap-4 place-items-center'>
                            <button className='secondary-btn' onClick={() => setThoughtObjectIdEditMode(undefined)}>Cancel</button>
                            <button className='primary-btn' onClick={() => { if (thoughtObject.id) { saveNewThought(thoughtObject.id) } }}>Save</button>
                        </div>
                    ) : (
                        <>
                            <div className='flex gap-4 place-items-center'>
                                <button className='secondary-btn' onClick={() => setThoughtObjectIdEditMode(thoughtObject.id)}>Edit</button>
                                <button className='primary-btn' onClick={() => { if (thoughtObject.id) { deleteThought(thoughtObject.id) } }}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            </li>
        ));

    };

    return (
        <section className='grid grid-cols-1 place-items-center m-4'>

            {/*Styling purposes only*/}
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>

            <h2 className='text-3xl'>Trump's thoughts and visions:</h2>

            <div className='py-4'>
                {`${thoughtsCount} Trump's thoughts`}
            </div>

            <ul className='grid sm:grid-cols-12 gap-4 sm:w-full'>
                {ShowAllThoughts()}
            </ul>



        </section>
    )

};

export default TrumpThoughtList;