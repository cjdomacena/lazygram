import React from 'react'
import { Outlet } from 'react-router-dom'

const PostsLayout = () =>
{
	return (
		<div className='container mx-auto my-8'>
			<div className='mt-8 w-full'>
				<Outlet />
			</div>
		</div>
	)
}

export default PostsLayout
