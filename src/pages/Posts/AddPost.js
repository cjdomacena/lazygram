import React, { useState } from 'react'
import Loading from './../../components/Utils/Loading'
import { supabase } from './../../client/'
import { ToastContainer, toast } from 'react-toastify'
const AddPost = () =>
{
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(false)

	const handleCategory = (e) =>
	{
		const temp = [...category, e.currentTarget.value]
		setCategory(temp)
	}

	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		if(category.length === 0){
			toast.warning('Category must not be empty. Please press enter after you enter the category.', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		else {
			try
			{
				setIsLoading(true);
				const user = supabase.auth.user().user_metadata
				console.log(user)
				const uid = supabase.auth.user().id
				const { error } = await supabase
					.from('posts')
					.insert([
						{
							uuid: uid,
							title: title,
							content: content,
							author: user.name,
							category: category
						}
					])
				if (error) throw error
			} catch (e)
			{
				alert(e.error_description || e.message)
			} finally
			{
				setIsLoading(false);
				toast.success('Post Successfully Added!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			handleReset();
		}
		
	
		
	}

	const handleReset = () =>{
		setCategory([]);
		setTitle('');
		setContent('');
	}


	return (
		<div className='container mx-auto'>
			{isLoading && <Loading />}
		 <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className='w-full mx-auto h-auto  rounded space-y-4 p-4 bg-slate-900'>
				<label className='text-white'>What are you up to today?</label>
				<input type="text" placeholder="Write about something interesting!" className='rounded-md px-2 border-0 w-full shadow bg-gray-800 focus:ring-slate-400 text-gray-50 tracking-wider text-sm' maxLength={150} value={title} onChange={(e) =>
				{
					setTitle(e.target.value)
				}}>
				</input>
				<textarea type="text" placeholder="What's on your mind?" className='rounded-md px-2 border-0 w-full shadow bg-gray-800 focus:ring-slate-400 text-gray-50 tracking-wider text-sm' rows={10} value={content} onChange={(e) =>
				{
					setContent(e.target.value)
				}}>
				</textarea>
				<input type="text" placeholder="Category (e.g. Technology)" className='rounded-md px-2 border-0 w-full shadow bg-gray-800 focus:ring-slate-400 text-gray-50 tracking-wider text-sm' maxLength={150} onKeyDown={(e) =>
				{
					if (e.key === 'Enter') 
					{
						handleCategory(e)
						e.target.value = ''
					}
				}}>
				</input>
				<div className='my-2 h-auto' >
					<ul className='space-x-4 flex items-center'>
						{category && category.map((cat) => <li className='text-sm px-4 py-0 rounded-full min-w-min bg-indigo-400'>{cat}</li>)}
					</ul>
				</div>
				<div className="space-x-2">
					<button className='bg-blue-600 px-4 py-2 text-white rounded' onClick={(e) => handleSubmit(e)}>Submit</button>
					<button className='bg-gray-600 px-4 py-2 text-white rounded' onClick={(e) => handleReset()}>Clear</button>
				</div>
			</div>
		</div>
	)
}


export default AddPost
