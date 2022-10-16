const getTasks = () => {
    let tasks = localStorage.getItem('tasks');
    if (!tasks) {
        tasks = []
    } else {
        tasks = JSON.parse(tasks)
    }
    return tasks;
}

const saveTask = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

module.exports = {
    getTasks,
    saveTask
}

// export default {
//     getTasks,
//     saveTask
// }