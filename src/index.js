import React from 'react';
import ReactDOM from 'react-dom';

import { PagoDiarioApp } from './PagoDiarioApp';

// import your icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles/styles.scss'

library.add(fab)


ReactDOM.render(
  <PagoDiarioApp />,
  document.getElementById('root')
);

