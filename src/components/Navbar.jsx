import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../shared/Button";
import Container from "../shared/Container";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<NavLink className='mx-1 py-1' to='/home'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/about'>
					About
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/departments'>
					Departments
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/pages'>
					Pages
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/blog'>
					Blog
				</NavLink>
			</li>
			<li>
				<NavLink className='mx-1 py-1' to='/contact'>
					Contact
				</NavLink>
			</li>
		</>
	);

	return (
		<div className='navbar bg-[#F7F7F7]'>
			<Container>
				<div className='navbar-start py-4'>
					<div className='dropdown'>
						<label tabIndex='0' className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex='0'
							className='menu menu-compact dropdown-content mt-3 shadow bg-base-100 text-paragraph rounded-box w-52'>
							{menuItems}
						</ul>
					</div>
					<Link to='/' className='font-bold text-base'>
						<span className='text-primary'>Doc</span>
						<span className='text-secondary'>mic</span>
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal p-0 text-base'>{menuItems}</ul>
				</div>
				<div className='navbar-end hidden lg:flex'>
					<Button>Free Consulation</Button>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
