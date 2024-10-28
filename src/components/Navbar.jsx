import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='mb-20 flex items-center justify-between py-6 text-xl'>
			<div className='flex flex-shrink-0 items-center'>
				<Link to='/'>CivBuddy</Link>
			</div>

			<Link to='/randomGame' className='rounded bg-slate-600 p-2'>
				Random Game
			</Link>
			<Link to='/challenges' className='rounded bg-slate-600 p-2'>
				Challenges
			</Link>
		</div>
	);
};

export default Navbar;
