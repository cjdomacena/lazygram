import React from 'react'
import { Outlet } from 'react-router-dom'

const PostsLayout = () =>
{
	return (
		<div className='container mx-auto my-8'>
			<h1>You're in the post layout!!</h1>
			<div className='mt-8 w-full'>
				<Outlet />
			</div>
		</div>
	)
}

export default PostsLayout
