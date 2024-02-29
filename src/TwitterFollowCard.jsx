import { useState } from 'react'

export function TwitterFollowCard({formatUserName, userName, name, initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)




    const imageSrc =  `https://unavatar.io/${userName}` 
  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick= () => {
    setIsFollowing(!isFollowing)
  }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={imageSrc} 
                alt="Avatar de " />
            <div className='tw-followCard-info'>
                <strong>
                    {name}
                </strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className = 'tw-followCard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}