import { useState } from "react"

const AddTask = ({onAdd}) =>{

    const [text, setText] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('Please enter a Task!')
            return
        }

        onAdd({text, dateTime, reminder})
        setText('')
        setDateTime('')
        setReminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <input
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Add a Task" 
                />
            </div>
            <div className="form-control">
                <input 
                    type="text" 
                    value={dateTime} 
                    onChange={(e) => setDateTime(e.target.value)} 
                    placeholder='Add Day/Time' 
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set a Reminder</label>
                <input 
                    type="checkbox" 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input 
                className="btn btn-block" 
                type="submit" 
                value='Save Task'                
            />
        </form>
    )
}

export default AddTask