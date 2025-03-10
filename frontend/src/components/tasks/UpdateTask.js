import React from 'react'

const UpdateTask = ({updateCurrentTask, task, handleChange}) => {
  return (
    <>
        <div className="offcanvas offcanvas-start w-50 font-joan" id="updateCanvas">
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body d-flex flex-column align-items-center">
                <h5 className="offcanvas-title font-italiana mt-5">Update the task</h5>
                <form onSubmit={updateCurrentTask} className='d-flex flex-column pt-5 pb-3 w-75'>
                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            name='title' 
                            placeholder="title" 
                            value={task.title } 
                            onChange={handleChange} 
                            required />
                        <label htmlFor="title">Title</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            name='description' 
                            placeholder="description" 
                            value={task.description} 
                            onChange={handleChange} 
                            required />
                        <label htmlFor="description">Description</label>
                    </div>

                    <div className="form-floating mb-3">
                        <select name='status' className="form-select" aria-label="form-select-sm example" onChange={handleChange} required>
                            <option > </option>
                            <option value="Pending" selected={task.status === "Pending"}>Pending</option>
                            <option value="In Progress" selected={task.status === "In Progress"}>In progress</option>
                            <option value="Completed" selected={task.status === "Completed"}>Completed</option>
                        </select>
                        <label htmlFor="status">Status</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="date" 
                            className="form-control" 
                            id="dueDate" 
                            name='dueDate' 
                            placeholder="Due date"  
                            value={task.dueDate && task.dueDate.length>0? new Date(task.dueDate).toISOString().slice(0,10) : ''}  
                            onChange={handleChange} 
                            required />
                        <label htmlFor="dueDate">Due date</label>
                    </div>
                    <button type='submit' className='default-button mt-4'>Update task</button>
                </form>
                </div>
        </div>
    </>
  )
}

export default UpdateTask
