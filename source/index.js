import './styles.css';
import './styles.scss';
import moment from 'moment';
// import { fetchTodos } from './api';

const getTodos = () => import('./api')

console.log('Im from source!');

const func = () => console.log('this is a function');

func();

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    getTodos().then(({fetchTodos}) => {
        fetchTodos().then(resp => console.log(resp))
    })
})
