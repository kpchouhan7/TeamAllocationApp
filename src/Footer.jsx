const Footer = () => {
   const today = new Date();
  return (
    <div className = "container">
    <p> TeamAllocationApp - {today.getFullYear()} </p>
    </div>
    )
}

export default Footer;