export default function () {
    return {
        todoList:[
            {   
                id: 1,
                name: 'Liste 1',
                todos:[
                    {
                        id: 1,
                        name: 'tâche 1',
                        completed : false
                    },
                    {
                        id: 2,
                        name: 'tâche 2',
                        completed: true
                    }
                ],
            },
            {   
                id: 2,
                name: 'Liste 2',
                todos:[
                    {
                        id: 1,
                        name: 'tâche 12',
                        completed : false
                    },
                    {
                        id: 2,
                        name: 'tâche 21',
                        completed: true
                    }
                ],
            }
        ],
        filter: 'all', //(all | remaining | done)
    }
}