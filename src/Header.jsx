const Header = ({selectedTeam,teamMemberCount}) => {

  return (
    <div className = "container mt-3 mb-4">
      <div className = "row justify-content-center">
       <div className ="col-8">
    <h1>Team Memeber Allocation</h1>
    <h2>{selectedTeam} has {teamMemberCount} {teamMemberCount ==1?"Member":"Members"} </h2>
    </div>
       </div>
      </div>
  )
}

export default Header