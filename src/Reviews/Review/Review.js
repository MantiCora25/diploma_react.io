import styled from 'styled-components'

const Review = (props) => {
    return (   
        <div className="ReviewPost">
            <span className="ReviewPostName">{props.name}</span>
            <span className="ReviewPostText">{props.text}</span>
        </div>              
        
        
    );
  }
  
  export default Review;