import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    
    const formatUserName = (userName) => `@${userName}`
   

    return (
        <section className="App">
        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Angel Duran"
        initialIsFollowing = {true}
        />

        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="elonmusk" 
        name="Elon Musk"
        />

        <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="vxnder" 
        name="Vanderhart"
        />
    </section>
    )
}