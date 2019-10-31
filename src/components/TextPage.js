import React from 'react';
import { Link } from 'react-router-dom';

import './styles/TextPage.css';

function TextPage() {
  return (
    <div className="TextPage">
      <h1>Du texte d'intro</h1>
      <Link to="/actions"><span className='start-btn'>OK</span></Link>
    </div>
  );
}

export default TextPage;