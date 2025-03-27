import { useContext, useRef, useState } from 'react';
import TrumpService from '../services/TrumpService';
import ITrump from '../interfaces/ITrump';
import { TrumpContext } from '../context/TrumpContext';
import ITrumpContext from '../interfaces/ITrumpContext';

const SearchThought = () => {

    const { getTrumpThoughtById, getTrumpThoughtByText } = TrumpService;
    const { deleteThought } = useContext(TrumpContext) as ITrumpContext;

    // Search by ID.
    const [searchResultId, setSearchResultId] = useState<ITrump | null>(null);
    const userInputId = useRef<HTMLInputElement>(null);
    const [feedbackId, setFeedbackId] = useState<string>("");

    // Search by Thought.
    const [searchResultText, setSearchResultText] = useState<ITrump[]>([]);
    const userInputText = useRef<HTMLInputElement>(null);
    const [feedbackText, setFeedbackText] = useState<string>("");

    const searchByIdBtn = async () => {
        if (userInputId.current != null) {
            const inputId = parseInt(userInputId.current.value);
            if (!inputId) {
                setFeedbackId("Enter ID to search");
                setSearchResultId(null);
                return null;
            }
            try {
                const result = await getTrumpThoughtById(inputId);
                setSearchResultId(result.data);
                setFeedbackId("");
            } catch (error) {
                setSearchResultId(null);
                setFeedbackId(`No thought match ID: "${userInputId.current.value}"`);
                console.error("Error: feil under søk", error);
            }
        }
    };

    const searchByThoughtBtn = async () => {
        if (userInputText.current != null) {
            const inputText = userInputText.current.value;
            if (!inputText) {
                setSearchResultText([]);
                setFeedbackText("Enter text to search")
                return ([]);
            }
            try {
                const result = await getTrumpThoughtByText(inputText);
                if (result.data.length > 0) {
                    setSearchResultText(result.data);
                    setFeedbackText("");
                } else {
                    setSearchResultText([]);
                    setFeedbackText(`No thought match with: "${userInputText.current.value}"`);
                }
            } catch (error) {
                console.error("Error: feil oppstod under søk", error);
                setSearchResultText([]);

            }
        }
    };

    const deleteById = (id: number) => {
        deleteThought(id);
        setSearchResultId(null);
    };

    const deleteByText = (id: number) => {
        deleteThought(id);
        setSearchResultText(result => result.filter(thought => thought.id !== id))
    }

    return (
        <section className='sm:grid sm:grid-cols-12'>

            {/*Styling purposes only*/}
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>
            <div className='style'></div>

            <div className='col-start-4 col-span-6 place-items-center rounded-2xl'>
                <div className='place-items-center glass-container p-6 m-6 rounded-2xl'>
                    <div className='font-bold m-6'>Search by ID:</div>
                    <input className='border border-blue-600 rounded-lg p-2' ref={userInputId} type="text" placeholder="Enter ID..." />
                    <button className='primary-btn ml-6' onClick={searchByIdBtn}>Search</button>

                    <div className='text-red-600'>{feedbackId}</div>
                    {searchResultId != null &&
                        <>
                            <p className='py-4 font-medium'>ID search found:</p>
                            <div className='grid grid-cols-4'>
                                <div className='col-start-1 col-span-3'>{searchResultId?.thought}</div>
                                <div>
                                    <button className='secondary-btn' onClick={() => {
                                        deleteById(searchResultId?.id || 0);
                                        setSearchResultId(null)
                                    }}>Delete</button>
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className='place-items-center glass-container p-6 m-6 rounded-2xl'>
                    <div className='font-bold m-6'>Search by Thought:</div>
                    <input className='border border-blue-600 rounded-lg p-2' ref={userInputText} type="text" placeholder="Enter text..." />
                    <button className='primary-btn ml-6' onClick={searchByThoughtBtn}>Search</button>


                    <div className='text-red-600'>{feedbackText && <div>{feedbackText}</div>}</div>
                    {searchResultText.length > 0 && (
                        <>
                            <p className='py-2 font-medium'>Thoughts found: {searchResultText.length}</p>
                            <ul>
                                {searchResultText.map((thoughtObject, i) => (
                                    <div>
                                        <li className='py-4' key={i}>
                                            <div className='grid grid-cols-4'>
                                                <div className='col-start-1 col-span-3'>{thoughtObject.thought}</div>
                                                <div>
                                                    <button className='secondary-btn' onClick={() => deleteByText(thoughtObject.id || 0)}>Delete</button>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                            </ul>

                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SearchThought;