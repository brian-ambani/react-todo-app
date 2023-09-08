import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><button>All Tasks</button></li>
            <li><button>Incomplete</button></li>
            <li><button>Completed</button></li>
            <li><button>Notes</button></li>
        </ul>
    </nav>
  )
}

export default Nav