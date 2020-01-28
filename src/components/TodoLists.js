import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { useQuery } from '@apollo/react-hooks';
import DeleteTodos from './DeleteTodos';
import { READ_TODOS } from '../queries/query';

const TodoLists = () => {
    const { data, loading, error } = useQuery(READ_TODOS);
    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    return(
        <Card style={{width: '700px', marginTop:'50px' }}>
        <List style={{paddingLeft: '0px', width: '700px'}}>
          {data.getTodos.map((todo) =>
            <ListItem key={todo.id} style={{width: '500px'}}>
              <span className={todo.completed ? "done" : "pending"}>{todo.text}</span>
                    <DeleteTodos id={todo.id} />
            </ListItem>
          )}
        </List>
        </Card>
    );
}

export default TodoLists;