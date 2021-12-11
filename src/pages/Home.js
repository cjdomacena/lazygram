import React from 'react'

const Home = () =>
{
	return (
		<div className='text-gray-50 mt-8 container mx-auto h-auto'>
			<p className='font-semibold  text-sm'>Recent Posts: </p>
			<hr className='my-2 border-gray-700' />
			<div className='w-full h-auto  drop-shadow grid xl:grid-cols-3 lg:grid-cols-3 gap-8 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>

				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow  p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>
				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow  p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>
				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow  p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>
				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow  p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>
				<div className='bg-gradient-to-b from-gray-900 to-slate-900 rounded shadow  p-4'>
					<h1 className='font-bold font-sans capitalize'>What? Do something please....</h1>
				</div>

			</div>

		</div>
	)
}

export default Home
