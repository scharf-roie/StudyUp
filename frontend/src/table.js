import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Table = () => (
  <div>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <title>My Schedule</title>
    <link rel="stylesheet" href="styles/table.css"/>
  </head>
  <body>
    <div class="schedule">
        <h2>My Schedule</h2>
        <table>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            <tr>
                <th rowspan="4">6 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">7 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">8 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">9 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">10 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">11 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">12 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">1 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">2 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">3 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">4 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">5 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            
            <tr>
                <th rowspan="4">6 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">7 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">8 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">9 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">10 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    
            <tr>
                <th rowspan="4">11 P.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        
            <tr>
                <th rowspan="4">12 A.M.</th>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </table>
    </div>
    

    
  </body>
  </div>
)

export default Table