import React, { useContext, useEffect, useState } from 'react'
import { CubeTransparentIcon } from '@heroicons/react/solid'
import { SessionContext } from './../../context/'
import { supabase } from './../../client/'
import Loading from '../Utils/Loading'
import Auth from './Auth'
const Nav = () =>
{
	const {  session, user, setSession } = useContext(SessionContext);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() =>
	{
		setSession(supabase.auth.session());
		supabase.auth.onAuthStateChange((_event, session) =>
		{
			setSession(session)
		})

	}, [session])
	


	return (
		<header className='w-full h-auto p-2 bg-slate-900 shadow'>
			<nav className='xl:container lg:container mx-auto w-full text-slate-50 flex justify-between items-center h-14'>
				{isLoading ? <Loading /> : 
				<div className='flex space-x-2 items-center'>
					<CubeTransparentIcon className='w-8 h-8 fill-current text-slate-50' />
					<p className=' text-lg font-semibold'>lazygram</p>
				</div>
			
				}
				{user ? "" : <Auth />}
			</nav>
		</header>
	)
}

export default Nav
