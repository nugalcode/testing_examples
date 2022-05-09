import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

// jest runs this after every test in this file completes
// if function returns a promise, Jest waits for that promise to resolve
// before continuing
// useful for cleaning up temporary state created by each test
afterEach(() => {
    cleanup();
})


test('should render non-completed todo', () => {
    const todo = {
        id: 1,
        title: 'wash dishes',
        completed: false,
    };

    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
    // check if element does NOT exist
    expect(todoElement.querySelector('s')).toBeNull();
})

test('should render completed todo', () => {
    const todo = {
        id: 2,
        title: 'wash car',
        completed: true,
    };

    render(<Todo todo={todo} />)
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
    // tests if todoElement has a child with a 's' tag
    expect(todoElement.querySelector('s')).toBeInTheDocument();
})

test('matches snapshot', () => {
    const todo = {
        id: 1,
        title: 'wash dishes',
        completed: false,
    };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();

})