
import Nav from './components/Nav'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import { SessionContext } from './context/'
import { useMemo, useState } from 'react';
import { supabase } from './client'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App()
{
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ session, setSession, user, setUser }), [session, user, setUser, setSession])

  return (
    <div className="App" >
      <SessionContext.Provider value={providerValue}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute session={session} />}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
      </SessionContext.Provider>
    </div>
  );
}

const ProtectedRoute = ({ session }) =>
{
  let location = useLocation();
  if (!session)
  {
    return <Navigate to="/" state={{ from: location }} />
  }

  return <Outlet />
}

export default App;
