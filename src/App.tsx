import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Layout from './Layout'
import PostContextPrvoider from './Store/Post.context'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className='min-h-[100vh] w-full bg-gray' >
     <QueryClientProvider client={queryClient}>
      <PostContextPrvoider>
        <Layout/>
      </PostContextPrvoider>
     </QueryClientProvider>
    </div>
  )
}

export default App
