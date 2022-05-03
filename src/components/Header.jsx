import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title: titleName, onAdd, showAddTask})=>{
    return(
        <header className='header'>
            <h1>{titleName}</h1>
            <Button text={showAddTask?'Close':'Add'} color={showAddTask ? 'red':'green'} onClick={onAdd}/>    
        </header>        
    )
}

Header.defaultProps ={
    title: 'Hope you can enjoy your APP'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

//CSS in JS
// const headStyle = {
//     color: 'red'
// }

export default Header