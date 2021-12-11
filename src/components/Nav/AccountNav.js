import React, { useState, useEffect } from 'react'
import { supabase } from '../../client'
import Loading from '../Utils/Loading'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, HomeIcon, ArchiveIcon, CogIcon, LogoutIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
const AccountNav = () =>
{
	const [isLoading, setLoading] = useState(false)
	const [user, setUser] = useState(null)
	let count = 0;
	const handleLogout = () =>
	{
		setLoading(true)
		setInterval(async () =>
		{
			try
			{
				const { error } = await supabase.auth.signOut()
				if (error) throw error
			} catch (error)
			{
				alert(error.error_description || error.message)
			} finally
			{
				setLoading(false)
			}
		}, 1000)


	}

	const getProfile = async () =>
	{

		const user = supabase.auth.user()
		setUser(user.user_metadata)
	}

	useEffect(() =>
	{
		getProfile();

	}, [])

	return (
		<div>
			{isLoading && <Loading />}

			{user && <Menu as='div' className="relative inline-block text-left">
				<Menu.Button as='button' className="flex items-center space-x-2 p-2 hover:bg-slate-700 rounded">
					<img alt={`${ user.name }'s profile`} src={user.avatar_url}
						className='w-8 h-8 rounded-full object-cover' />
					<div className='inline-flex items-center space-x-1'>
						<p>{user.name}</p>
						<ChevronDownIcon className='w-4 h-4 fill-current' />
					</div>
				</Menu.Button>
				<Menu.Items as="ul" className="absolute right-2 top-14 bg-slate-900 w-52  rounded-lg border border-slate-800 shadow grid grid-flow-row py-2 px-1 text-sm gap-1 ">
					<Menu.Item as="li" className="w-full">
						<NavLink to="/dashboard" className={({ isActive }) =>
							`inline-flex items-center w-full p-2 rounded transition ease-linear ${ isActive
								? "bg-slate-600"
								: 
								"hover:bg-slate-600 "
							}`
						}>
							<HomeIcon className='w-5 h-5 fill-current mr-2' />
							Dashboard
						</NavLink>
					</Menu.Item>
					<Menu.Item as="li" className="w-full">
						<NavLink to="/posts" className={({ isActive }) =>
							`inline-flex items-center w-full p-2 rounded transition ease-linear ${ isActive
								? "bg-slate-600"
								: 
								"hover:bg-slate-600 "
							}`
						}>
							<ArchiveIcon className='w-5 h-5 fill-current mr-2' />
							Posts
						</NavLink>
					</Menu.Item>

					<hr className='border-slate-800'/>
					<Menu.Item as="li" className="w-full">
						<NavLink to="/posts" className={({ isActive }) =>
							`inline-flex items-center w-full p-2 rounded transition ease-linear ${ isActive
								? "bg-slate-600"
								:
								"hover:bg-slate-600 "
							}`
						}>
							<CogIcon className='w-5 h-5 fill-current mr-2' />
							Account Settings
						</NavLink>
					</Menu.Item>
					<Menu.Item as="li" className="w-full " onClick={(e) =>
					{
						e.preventDefault();
						handleLogout();
					}}>
						<button className='inline-flex items-center w-full p-2 rounded transition ease-linear hover:bg-red-600'>
							<LogoutIcon className='w-5 h-5 fill-current mr-2' />
							Signout
						</button>
					</Menu.Item>
				</Menu.Items>
			</Menu>
			}

		</div>
	)
}

export default AccountNav
