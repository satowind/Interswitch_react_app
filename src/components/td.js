import React from 'react';

const Td = ({ user })=> {
      return (
      
        <tr>
        <td className="border-left">{ user.id }</td>
        <td>{ user.firstname }</td>
        <td>{ user.lastname }</td>
        <td>{ user.email }</td>
        <td>{ user.phone }</td>
        <td className="border-right">{ user.last_login_date }</td>
      </tr>
       
      );
    }
  
  
  export default Td;