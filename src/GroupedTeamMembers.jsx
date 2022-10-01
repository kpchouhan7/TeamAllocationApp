import { useState } from "react";

const GroupedTeamMembers = ({employees,selectedTeam,setTeam}) => {

  const [groupedEmployees,setGroupedData] = useState(groupedTeamMembers());

  function groupedTeamMembers(){

    var teams = [];
    var teamMemebers = employees.filter((employee)=> employee.teamName == 'TeamA');
    var teamA  = {team : 'TeamA',members:teamMemebers,collasped:selectedTeam == 'TeamA' ? false: true}
    teams.push(teamA);

     var teamMemebers = employees.filter((employee)=> employee.teamName == 'TeamB');
    var teamB  = {team : 'TeamB',members:teamMemebers,collasped:selectedTeam == 'TeamB' ? false: true}
    teams.push(teamB);
    
     var teamMemebers = employees.filter((employee)=> employee.teamName == 'TeamC');
    var teamC = {team : 'TeamC',members:teamMemebers,collasped:selectedTeam == 'TeamC' ? false: true}
    teams.push(teamC);
    
     var teamMemebers = employees.filter((employee)=> employee.teamName == 'TeamD');
    var teamD  = {team : 'TeamD',members:teamMemebers,collasped:selectedTeam == 'TeamD' ? false: true}
    teams.push(teamD);

    return teams;
  }
  function handleClick(event){

    var transfromedGroupeddata = groupedEmployees.map((groupedData)=> groupedData.team == event.currentTarget.id?{...groupedData,collasped:!groupedData.collasped}:groupedData)


    setGroupedData(transfromedGroupeddata);
    setTeam(event.currentTarget.id);
    
  }
  return (
    <div className = "container mt-3 mb-4">
      {

        groupedEmployees.map((item)=>{
          return (

            <div key = {item.team} className =  "card mt-2" style = {{cursor:"pointer"}}>
              <h4 id = {item.team} className = "card-header text-secondary" onClick={handleClick}>
              TeamName : {item.team}
              </h4>

              <div id = {"collapse_"+item.team} className  ={item.collasped === true?"collapse":""}>
                <hr/>
               {
                 item.members.map(member => {
                   return (
                     <div className = "mt-2">
                       <h5 className = "card-title mt-2">
                          <span className = "text-dark">FullName :{member.fullName}</span>
                       </h5>
                       <p>Designation: {member.designation}</p>
                     </div>
                   )
                 })    
                }
              
              </div>
            </div>
          )
        })
      }
      </div>
  )
}

export default GroupedTeamMembers;