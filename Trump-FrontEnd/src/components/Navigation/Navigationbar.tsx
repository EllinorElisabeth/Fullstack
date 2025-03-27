import { Link } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <nav className='flex justify-center items-center h-16 bg-blue-300'>
            <ul className='flex content-center space-x-8'>
                <li><Link to='/' className=''>Home</Link></li>
                <li><Link to='add'>Add Thought</Link></li>
                <li><Link to='search'>Search Thought</Link></li>
                <li><Link to='upload'>Upload Image</Link></li>
            </ul>
        </nav>
    )
}

export default Navigationbar;