import React from 'react'
import {  loadLists } from '../../services/api';

import List from '../List';

import { Container } from '../Header/styles'


const lists = loadLists();
export default function index() {
    return (
        <Container>
           {lists.map(list => <List key={list.title} data={list}/>)}
        </Container>
    );
}
