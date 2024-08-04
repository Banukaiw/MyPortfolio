import React from 'react'
import './Index.css'

export const Index = () => {
  return (
    <div>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    

    <div class="social-buttons">
      <a href="5" class="social-button facebook">Facebook<i class="fa-brands fa-square-facebook"></i></a>
      <a href="1" class="social-button twitter">Twitter<i class="fa-brands fa-square-twitter"></i></a>
      <a href="2" class="social-button instagram">GitHub<i class="fa-brands fa-square-github"></i></a>
      <a href="3" class="social-button instagram">linkedIn<i class="fa-brands fa-linkedin"></i></a>
      
    </div>

    <button id="stickyButton"><i class="fa-solid fa-jet-fighter-up"></i></button>
    <script src="script.js"></script>
    </div>
  )
}
