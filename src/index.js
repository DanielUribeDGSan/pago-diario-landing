import React from 'react';
import ReactDOM from 'react-dom';

import { PagoDiarioApp } from './PagoDiarioApp';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './styles/styles.scss'

library.add(fab, faCheckSquare, faCoffee)



ReactDOM.render(
  <PagoDiarioApp />,
  document.getElementById('root')
);

