
import Nav from './components/Nav'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import { SessionContext } from './context/'
import { useMemo, useState, useEffect } from 'react';
import { supabase } from './client'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PostsLayout from './pages/Posts/PostsLayout';
import AddPost from './pages/Posts/AddPost';
function App()
{
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ session, setSession, user, setUser }), [session, user, setUser, setSession])



  const ProtectedRoute = () =>
  {
    let location = useLocation();
    const session = supabase.auth.session()
    if (!session)
    {
      return <Navigate to="/" state={{ from: location }} />
    }

    return <Outlet />
  }

  return (
    <div className="App" >
      <SessionContext.Provider value={providerValue}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="posts" element={<PostsLayout />}>
              <Route path="addPosts" element={<AddPost />} />
            </Route>
          </Route>
        </Routes>
      </SessionContext.Provider>
    </div>
  );
}


export default App;
