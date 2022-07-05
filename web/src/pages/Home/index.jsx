import './styles.css';

import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className="container">
       <h1>Attendance Register</h1>
       <input type="text" placeholder="Enter your name" />
       <button>Register</button>

       <Card />
    </div>
   
  )
}
