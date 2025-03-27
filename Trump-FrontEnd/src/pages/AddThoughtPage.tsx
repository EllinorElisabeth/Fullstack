import AddThought from "../components/AddThought";

const AddThoughtPage = () => {

    return (
        <section>
            <h1 className='text-center text-6xl m-10'>ADD</h1>
            <p className='text-center p-4'>Have we forgotten any? Please add Trump's thoughts here!</p>
            <AddThought />
        </section>
    );

};

export default AddThoughtPage;