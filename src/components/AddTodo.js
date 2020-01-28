import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { useMutation } from '@apollo/react-hooks';
import { READ_TODOS } from '../queries/query';
import { CREATE_TODO } from '../mutations/mutation'

const AddTodo = () => {
  let textInput = React.createRef();
  const [todo, addTodo]= useState('');
  const [completed]= useState(false);
  const [ errors, setError ] = useState(false);
  const [createTodo] = useMutation(CREATE_TODO);

  const addNewTodo = (event) => {
    if(todo === null || todo === ''){
      setError(true);
      return;
    }
    textInput.current.value = '';
    return createTodo(
      { 
        variables: { text: todo, completed },
        refetchQueries: [{ query:READ_TODOS }]
     });
  }
  
  return (
    <div style={{ marginTop: '50px', paddingLeft: '100px' }}>
      <FormControl
        style={{ width: '500px' }}>
        <TextField
          error={errors}
          required
          autoFocus
          label="Required"
          placeholder="Enter Todo"
          variant="outlined"
          type="string"
          size='medium'
          color='primary'
          inputRef={textInput}
          onChange={e => addTodo(e.target.value)}
          />
        <Button
          variant="contained"
          color="primary"
          onClick={e => {
            addNewTodo(e)
          }}>
          Submit
  </Button>
      </FormControl>
    </div>
  );
}

export default AddTodo;