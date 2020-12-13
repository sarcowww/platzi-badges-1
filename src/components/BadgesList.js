import React from 'react';
import './styles/BadgesList.css'
import twitterLogo from '../images/twitter.png'
import { Link } from 'react-router-dom'
import Gravatar from "../components/Gravatar"

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);
    
    React.useMemo(() => {
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })
        setFilteredBadges(result);
    }, [badges, query]);
    
    return {query, setQuery, filteredBadges}
}

function BadgesList(props) {
const badges = props.badges
const {query, setQuery, filteredBadges} = useSearchBadges(badges)

        if(filteredBadges.length === 0){
            return (
                <div>
             <div className="form-group">
               <label htmlFor="">Filter Badges</label>
                <input type="text" className='form-control'
                value={query}
                onChange={(e) => {
                   setQuery(e.target.value);
                }}/>
            </div>
                    <h3>No Badges were found</h3>
                    <Link className='btn btn-primary' to='/badges/new'> Create New Badge</Link>
                </div>
            )
        }
        return(
            <div>
             <div className="form-group">
               <label htmlFor="">Filter Badges</label>
                <input type="text" className='form-control'
                value={query}
                onChange={(e) => {
                   setQuery(e.target.value);
                }}/>
            </div>
            <ul className="list-unstyled">
            {filteredBadges.map((badge) => {
                return(
                    <div className="Badges__list-container">
                        <div className='Badges__display-image'>
                        <Gravatar email={badge.email}/>
                        </div>
                        <div className='Badges__display-content'>
                            <li key={badge.id}>
                            <Link to={`badges/${badge.id}`} className='text-reset text-decoration-none'>
                            <p>{badge.firstName} {badge.lastName}</p>
                            <p className='Badges__twitter-text'><img className="Badges__twitter-logo" src={twitterLogo} alt=""/> @{badge.twitter}</p>
                            <p>{badge.jobTitle}</p>
                            </Link>
                            </li>
                        </div>
                    </div>
                )
            })}
        </ul>
        </div>
        )
}

export default BadgesList;