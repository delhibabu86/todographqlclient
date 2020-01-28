import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useMutation } from '@apollo/react-hooks';
import { READ_TODOS } from '../queries/query';
import { REMOVE_TODO } from '../mutations/mutation';

const DeleteTodos = (props) => {
    const [deleteTodo] = useMutation(REMOVE_TODO);
    return(
               <ListItemSecondaryAction>
                      <IconButton edge={false} aria-label="delete"
                      onClick={() => {
                        deleteTodo({ 
                          variables: { id: props.id },
                          refetchQueries:[{ query:READ_TODOS }]
                         });
                      }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
    );
}

export default DeleteTodos;