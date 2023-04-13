import React from 'react';


const Subfooter = () => {
  return (
    <div>
      
    <div className="subfooter">
        <div className="container flex subfooter-container">
            <a className="hover-link" href="#">Privacy policy</a>
            <a className="hover-link" href="#">Terms & Condition</a>
            <a className="hover-link" href="#">Security Information</a>
            <a className="hover-link" href="#"><i className="fa-brands fa-facebook"></i></a>
            <a className="hover-link" href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/c1fc3d2826.js" crossorigin="anonymous"></script>

    <script>
        const toggleButton = document.getElementById('nav-toggle');
        const navLinks = document.getElementById('nav-links');

        {/* toggleButton.addEventListener('click', () => {
            navLinks.classNameList.toggle('active');
        }) */}

    </script>
    </div>
  )
}

export default Subfooter

   