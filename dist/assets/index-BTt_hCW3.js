(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function M(){let e=window.scrollY;const l=document.getElementById("nav-bar");let o="";window.addEventListener("scroll",()=>{window.scrollY>e?(o!=="down"&&(l.style.top="-60px",o="down"),l.classList.remove("active")):(o!=="up"&&(l.style.top="0",o="up"),window.scrollY===0?l.classList.remove("active"):l.classList.add("active")),e=window.scrollY});const a=document.getElementById("featured-hover"),i=document.querySelector(".nav-hover-content");function s(){i.classList.add("active")}function n(){i.classList.remove("active")}a.addEventListener("mouseenter",s),a.addEventListener("mouseleave",n);const d=document.getElementById("men-hover"),r=document.querySelector(".nav-hover-content-men");function h(){r.classList.add("active")}function v(){r.classList.remove("active")}d.addEventListener("mouseenter",h),d.addEventListener("mouseleave",v);const c=document.getElementById("hideOnMobilewomen"),u=document.querySelector(".nav-hover-content-women");function m(){u.classList.add("active")}function t(){u.classList.remove("active")}c.addEventListener("mouseenter",m),c.addEventListener("mouseleave",t);const g=document.getElementById("hideOnMobilekids"),b=document.querySelector(".nav-hover-content-kids");function w(){b.classList.add("active")}function y(){b.classList.remove("active")}g.addEventListener("mouseenter",w),g.addEventListener("mouseleave",y);const f=document.getElementById("hideOnMobileAccessories"),p=document.querySelector(".nav-hover-content-accessories");function _(){p.classList.add("active")}function L(){p.classList.remove("active")}f.addEventListener("mouseenter",_),f.addEventListener("mouseleave",L);const S=document.getElementById("hideOnMobileSale"),k=document.querySelector(".nav-hover-content-sale");function A(){k.classList.add("active")}function C(){k.classList.remove("active")}S.addEventListener("mouseenter",A),S.addEventListener("mouseleave",C),document.querySelector(".menu-icon")}document.getElementById("header").innerHTML=`
<!-- /*---------- start navigation bar section ----------*/ -->
<div class="nav-bar">
  <!-- /*---------- start first navigation bar section ----------*/ -->
  <div class="nav-bar-background-color">
    <div class="max-width-nav-bar">
      <header class="hideOnMobile">
        <div class="nav-bar-left">
          <div class="jumper">
            <a href="../Nike-Landpage/landing_page.html">
              <img
                src="src/public/nike_Image/nike_logo/Jumpman_logo.svg.png"
                alt="jumpman-logo"
                height="20"/>
            </a>
          </div>
          <div class="converse">
            <img
              src="src/public/nike_Image/nike_logo/Converse-logo.png"
              alt="container-logo"
              height="20"/>
          </div>
        </div>
        <div class="nav-bar-right">
          <ul class="nav-bar-inner">
            <li>
              <a href="#">
                Find a Store
              </a>
            </li>
            <li>
              <a>
                |
              </a>
            </li>
            <li>
              <a href="#">
                Help
              </a>
            </li>
            <li>
              <a>
                |
              </a>
            </li>
            <li>
              <a href="#">
                Join Us
              </a>
            </li>
            <li>
              <a>
                |
              </a>
            </li>
            <li>
              <a href="src/sign_in_page.html">
                Sign In     
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
  <!-- /*---------- end of first navigation bar section ----------*/ -->
  <!-- /*---------- start second navigation bar section ----------*/ -->
  <div class="fixed-second-nav-bar" id="nav-bar">
    <div class="max-width-second-nav-bar">
      <div class="second-nav-bar">
        <a href="./home-page.html">
        <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" 
            role="img" width="24px" height="24px" fill="none"><path fill="currentColor" 
            fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 
            0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 
            1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 
            .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path>
        </svg>
        </a>
        <div class="center-nav-bar-feature">
          <div class="center-nav-bar">
            <div class="hideOnMobile">
            <!-- /*---------- start second navigation bar hover section ----------*/ -->
            <div href="#" id="featured-hover">
                <a href="#"> 
                  New & Feature 
                </a>
                <div class="nav-hover-content">
                  <div class="nav-hover-sub-content">
                    <div class="nav-hover-sub-content-header">
                      <h6>
                        Limited Time
                      </h6>
                      <ul class="nav-hover-sub-content-list">
                        <li>
                          <a> 
                            Sale: Up to 50% off 
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="nav-hover-sub-content">
                    <div class="nav-hover-sub-content-header">
                      <h6>
                        New & Featured
                      </h6>
                      <ul class="nav-hover-sub-content-list">
                        <li>
                          <a> 
                            Sale: News Arrivals 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Sale: Best Sellers 
                          </a>
                        </li>
                        <li>
                          <a> Sale: News & Upcoming Drops </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="nav-hover-sub-content">
                    <div class="nav-hover-sub-content-header">
                      <h6>Trending</h6>
                      <ul class="nav-hover-sub-content-list">
                        <li>
                          <a> ACG </a>
                        </li>
                        <li>
                          <a> Lifestyle Running </a>
                        </li>
                        <li>
                          <a> The Color Shop </a>
                        </li>
                        <li>
                          <a> Shop Sport </a>
                        </li>
                        <li>
                          <a> New in Jordan Shoes </a>
                        </li>
                        <li>
                          <a> Mother's Day Shop </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="nav-hover-sub-content">
                    <div class="nav-hover-sub-content-header">
                      <h6>Shop Classics</h6>
                      <ul class="nav-hover-sub-content-list">
                        <li>
                          <a> 
                            Dunk 
                          </a>
                        </li>
                        <li>
                          <a>
                             Air Jordan 1 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Air Force 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Air Max 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Blazer 
                          </a>
                        </li>
                        <li>
                          <a> 
                            vomeroo 
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="nav-hover-sub-content">
                    <div class="nav-hover-sub-content-header">
                      <h6>
                        Explore
                      </h6>
                      <ul class="nav-hover-sub-content-list">
                        <li>
                          <a> 
                            SNKRS Launch Calender 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Running Shoe Finder 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Bra Finder 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Product Care 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Member Rewards 
                          </a>
                        </li>
                        <li>
                          <a> 
                            Buying Guides 
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <!-- /*---------- end of second navigation bar hover section ----------*/ -->
            </div>
            <!-- /*---------- start second navigation bar hover section ----------*/ -->
            <div class="hideOnMobile" id="men-hover">
              <a href="#">
                Men
              </a>
              <div class="nav-hover-content-men">
                <div class="nav-hover-sub-content-men">
                  <div class="nav-hover-sub-content-men-header">
                    <h6>
                      Limited Time
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          Sale: Up to 50% off 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-men">
                  <div class="nav-hover-sub-content-men-header">
                    <h6>
                      New & Featured
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          Sale: News Arrivals 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sale: Best Sellers 
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      Collections
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                          Trail Running Essentials
                        </a>
                      </li>
                      <li>
                        <a>
                          New in Basketball
                        </a>
                      </li>
                      <li>
                        <a> 
                          ACG Essentials
                        </a>
                      </li>
                      <li>
                        <a> 
                          Nike Life
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-men">
                  <div class="nav-hover-sub-content-men-header">
                    <h6>
                      Shoes
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          All Shoe
                        </a>
                      </li>
                      <li>
                        <a> 
                          Lifestyle
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jordan
                        </a>
                      </li>
                      <li>
                        <a> 
                          Dunk 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Life Style Running
                        </a>
                      </li>
                      <li>
                        <a> 
                          Air Max 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Air Force 1 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Training & Gym
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Nike SB
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sandals & Slides
                        </a>
                      </li>
                      <li>
                        <a> 
                          Nike by You 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shoes $100 & Under 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-men">
                  <div class="nav-hover-sub-content-men-header">
                    <h6>
                      Clothing
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          All Clothing
                        </a>
                      </li>
                      <li>
                        <a> 
                          Hoodies & Sweatshirts 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Pants & Tights
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jackets & Vests 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tops & T-Shirts 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a> 
                          Matching Sets
                        </a>
                      </li>
                      <li>
                        <a> 
                          Big & Talk
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jordan
                        </a>
                      </li>
                    </ul>
                    <h6 id="accessories">
                      Accessories
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                          All Accessories
                        </a>
                      </li>
                      <li>
                        <a>
                          Bags & Backpcaks
                        </a>
                      </li>
                      <li>
                        <a>
                          Hats & Head wear
                        </a>
                      </li>
                      <li>
                        <a>Socks</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-men">
                  <div class="nav-hover-sub-content-men-header">
                    <h6>
                      Shop by Sport
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          Basketball 
                        </a>
                      </li>
                      <li>
                        <a>
                           Running 
                          </a>
                        </li>
                      <li>
                        <a> 
                          Golf 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Soccer
                        </a>
                      </li>
                      <li>
                        <a> 
                          Training & Gym 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tennis 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Baseball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Football 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Trail Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Swimming 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Pickleball
                        </a>
                      </li>
                      <li>
                        <a> 
                          Fan Gear 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /*---------- end of second navigation bar hover section ----------*/ -->
            <div id="hideOnMobilewomen">
              <a href="#">
                Women
              </a>
              <div class="nav-hover-content-women">
                <div class="nav-hover-sub-content-women">
                  <div class="nav-hover-sub-content-women-header">
                    <h6>
                      Limited Time
                    </h6>
                    <ul class="nav-hover-sub-content-women-list">
                      <li>
                        <a>
                          Sale: Up to 50% off 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-women">
                  <div class="nav-hover-sub-content-women-header">
                    <h6>
                      New & Featured
                    </h6>
                    <ul class="nav-hover-sub-content-women-list">
                      <li>
                        <a>
                          Sale: News Arrivals
                        </a>
                      </li>
                      <li>
                        <a>
                          Sale: Best Sellers 
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      Collections
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          The Color Shop
                        </a>
                      </li>
                      <li>
                        <a> 
                          Zeavy Collection 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Loungewear
                        </a>
                      </li>
                      <li>
                        <a> 
                          Trail Running Essentials 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Mother's Day Shop 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-women">
                  <div class="nav-hover-sub-content-women-header">
                    <h6>
                      Shoes
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          All Shoe
                        </a>
                      </li>
                      <li>
                        <a> 
                          Lifestyle
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jordan
                        </a>
                      </li>
                      <li>
                        <a> 
                          Dunk 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Life Style Running
                        </a>
                      </li>
                      <li>
                        <a> 
                          Air Max 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Air Force 1 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Training & Gym
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Nike SB
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sandals & Slides
                        </a>
                      </li>
                      <li>
                        <a> 
                          Nike by You 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shoes $100 & Under 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-women">
                  <div class="nav-hover-sub-content-women-header">
                    <h6>
                      Clothing
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                           All Clothing
                          </a>
                        </li>
                      <li>
                        <a>
                           Hoodies & Sweatshirts 
                          </a>
                        </li>
                      <li>
                        <a> 
                          Pants & Tights 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Leggings 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jackets & Vests 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tops & T-Shirts 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Skirts & Dresses 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Bras 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Matching Sets
                        </a>
                      </li>
                      <li>
                        <a> 
                          Plus Size 
                        </a>
                      </li>
                      <li>
                        <a> Jordan</a></li>
                    </ul>
                    <h6 id="accessories">
                      Accessories
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                          All Accessories
                        </a>
                      </li>
                      <li>
                        <a>
                          Bags & Backpcaks
                        </a>
                      </li>
                      <li>
                        <a>
                          Hats & Head wear
                        </a>
                      </li>
                      <li>
                        <a>
                          Socks
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-women">
                  <div class="nav-hover-sub-content-women-header">
                    <h6>
                      Shop by Sport
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                           Basketball 
                          </a>
                        </li>
                      <li>
                        <a> 
                          Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Golf 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Soccer
                        </a>
                      </li>
                      <li>
                        <a> 
                          Fitness 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tennis 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Yoga 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Trail Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Softball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Swimming 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Pickleball
                        </a>
                      </li>
                      <li>
                        <a> 
                          Fan Gear
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /*---------- start second navigation bar hover section ----------*/ -->
            <div id="hideOnMobilekids">
              <a href="#">
                Kids
              </a>
              <div class="nav-hover-content-kids">
                <div class="nav-hover-sub-content-kids">
                  <div class="nav-hover-sub-content-kids-header">
                    <h6>
                      Limited Time
                    </h6>
                    <ul class="nav-hover-sub-content-kids-list">
                      <li>
                        <a>
                          Sale: Up to 50% off 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-kids">
                  <div class="nav-hover-sub-content-kids-header">
                    <h6>
                      New & Featured
                    </h6>
                    <ul class="nav-hover-sub-content-kids-list">
                      <li>
                        <a>
                          Sale: News Arrivals
                        </a>
                      </li>
                      <li>
                        <a>
                          Sale: Best Sellers 
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      Collections
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          EasyOn 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Teen Essentials 
                        </a>
                      </li>
                      <li>
                        <a> 
                          New in Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          New in Basketball 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-kids">
                  <div class="nav-hover-sub-content-kids-header">
                    <h6>
                      Shoes by Size
                    </h6>
                    <ul class="nav-hover-sub-content-kids-list">
                      <li>
                        <a> 
                          Big Kids (1Y - 7Y) 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Little Kids (8C - 3Y) 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Baby & Toddler (1C - 10C) 
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      ALL Shoes
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          All Shoe
                        </a>
                      </li>
                      <li>
                        <a> 
                          Lifestyle
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jordan
                        </a>
                      </li>
                      <li>
                        <a>
                           Dunk 
                          </a>
                        </li>
                      <li>
                        <a> 
                          Air Max 
                        </a>
                      </li>
                      <li>
                        <a>
                          Air Force 1 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sandals & Slides
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-kids">
                  <div class="nav-hover-sub-content-kids-header">
                    <h6>
                      Clothing by Size
                    </h6>
                    <ul class="nav-hover-sub-content-kids-list">
                      <li>
                        <a> 
                          Big Kids (XS - XL) 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Littles Kids (4 - 7) 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Baby & Toddler (0M - 4T)
                        </a>
                      </li>
                      <li>
                        <a> 
                          Extended Size
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      All Clothing
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          All Clothing
                        </a>
                      </li>
                      <li>
                        <a> 
                          Hoodies & Sweatshirts 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Pants & Tights 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Leggings 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jackets & Vests 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tops & T-Shirts 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Skirts & Dresses
                        </a></li>
                      <li>
                        <a> 
                          Bras 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Matching Sets
                        </a>
                      </li>
                      <li>
                        <a> 
                          Plus Size 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Jordan
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-kids">
                  <div class="nav-hover-sub-content-kids-header">
                    <h6>
                      Shop by Sport
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          Basketball
                        </a>
                      </li>
                      <li>
                        <a> 
                          Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Golf 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Soccer
                        </a>
                      </li>
                      <li>
                        <a> 
                          Fitness 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Tennis 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Yoga 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Trail Running 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Softball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Swimming 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Pickleball
                        </a>
                      </li>
                      <li>
                        <a> 
                          Fan Gear
                        </a>
                      </li>
                    </ul>
                    <h6 id="accessories">
                      Accessories
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a>
                          All Accessories
                        </a>
                      </li>
                      <li>
                        <a>
                          Bags & Backpcaks
                        </a>
                      </li>
                      <li>
                        <a>
                          Hats & Head wear
                        </a>
                      </li>
                      <li>
                        <a>
                          Socks
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /*---------- end of second navigation bar hover section ----------*/ -->
            <div id="hideOnMobileAccessories">
              <a href="#">
                Jordan
              </a>
              <div class="nav-hover-content-accessories">
                <div class="nav-hover-sub-content-accessories">
                  <div class="nav-hover-sub-content-accessories-header">
                    <h6>
                      Limited Time
                    </h6>
                    <ul class="nav-hover-sub-content-accessories-list">
                      <li>
                        <a>
                          Sale: Up to 50% off 
                        </a>
                      </li>
                    </ul>
                    <h6 id="accessories">
                      New & Featured
                    </h6>
                    <ul class="nav-hover-sub-content-accessories-list">
                      <li>
                        <a>
                          Sale: News Arrivals
                        </a>
                      </li>
                      <li>
                        <a>
                          Sale: Best Sellers 
                        </a>
                      </li>
                      <li>
                        <a>
                          Sale: News & Upcoming Drops
                        </a>
                      </li>
                    </ul>
                    <h6 id="collections">
                      Collections
                    </h6>
                    <ul class="nav-hover-sub-content-men-list">
                      <li>
                        <a> 
                          Heat Check
                        </a>
                      </li>
                      <li>
                        <a> 
                          Trending Colors 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Golf Essentials 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Girls Lemonade Stand 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-accessories">
                  <div class="nav-hover-sub-content-accessories-header">
                    <h6>Men</h6>
                    <ul class="nav-hover-sub-content-accessories-list">
                      <li>
                        <a> 
                          Shop All
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shoes 
                        </a>
                      </li>
                      <li>
                        <a> 
                          AJ1
                        </a>
                      </li>
                      <li>
                        <a> 
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-accessories">
                  <div class="nav-hover-sub-content-accessories-header">
                    <h6>
                      Women
                    </h6>
                    <ul class="nav-hover-sub-content-accessories-list">
                      <li>
                        <a> 
                          Shop All
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shoes 
                        </a>
                      </li>
                      <li>
                        <a> 
                          AJ1 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-accessories">
                  <div class="nav-hover-sub-content-accessories-header">
                    <h6>
                      kids
                    </h6>
                    <ul class="nav-hover-sub-content-accessories-list">
                      <li>
                        <a> 
                          Shop All 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Shoes 
                        </a>
                      </li>
                      <li>
                        <a> 
                          AJ1
                        </a>
                      </li>
                      <li>
                        <a> 
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Basketball 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Big Kids 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Little Kids 
                        </a>
                      </li>
                      <li>
                        <a> 
                          Babby & Toddlers 
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /*---------- start second navigation bar hover section ----------*/ -->
            <div id="hideOnMobileSale">
              <a href="#">
                Sale
              </a>
              <div class="nav-hover-content-sale">
                <div class="nav-hover-sub-content-sale">
                  <div class="nav-hover-sub-content-sale-header">
                    <h6>
                      Sale: Up to 50% Off
                    </h6>
                    <ul class="nav-hover-sub-content-sale-list">
                      <li>
                        <a> 
                          Sale Shoes
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sale Clothng
                        </a>
                      </li>
                      <li>
                        <a> 
                          Sale Accessories
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-sale">
                  <div class="nav-hover-sub-content-sale-header">
                    <h6>
                      Men
                    </h6>
                    <ul class="nav-hover-sub-content-sale-list">
                      <li>
                        <a>
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a>
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a>
                          Accessories 
                        </a>
                      </li>
                      <li>
                        <a>
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-sale">
                  <div class="nav-hover-sub-content-sale-header">
                    <h6>
                      Women
                    </h6>
                    <ul class="nav-hover-sub-content-sale-list">
                      <li>
                        <a>
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a>
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a>
                          Accessories 
                        </a>
                      </li>
                      <li>
                        <a>
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-hover-sub-content-sale">
                  <div class="nav-hover-sub-content-sale-header">
                    <h6>
                      Kids
                    </h6>
                    <ul class="nav-hover-sub-content-sale-list">
                      <li>
                        <a>
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a>
                          Clothing 
                        </a>
                      </li>
                      <li>
                        <a>
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a>
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- /*---------- end of second navigation bar hover section ----------*/ -->
            <!-- /*---------- start side on menu iconbar section ----------*/ -->
            <ul class="mobile-nav-bar">
              <li class="hide-menu">
                <a class="nav-icon-hover" href="#">
                  <svg
                    aria-hidden="true"
                    class="pre-nav-design-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M13.962 16.296a6.716 6.716 0 0
                      1-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 
                      013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.55
                      1.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 
                      0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                    </path>
                    <!-- Closed the path element properly -->
                  </svg>
                </a>
              </li>
              <li class="hide-menu">
                <a id="nav-icon-hover-user" href="#">
                  <svg
                    aria-hidden="true"
                    class="pre-nav-design-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    role="img"
                    width="24px"
                    height="24px"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75
                      3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="hide-menu">
                <a id="nav-icon-hover" href="src/sign_in_page.html">
                  <?xml version="1.0" ?><svg
                    class="feather feather-user"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>
              </li>
              <li onclick="showSidebar()" class="hide-menu">
                <a class="nav-icon-hover" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                  </svg>
                </a>
              </li>
            </ul>
            <ul class="side-bar" id="hideCloseMenu">
              <li onclick="closeSidebar()">
                <a class="nav-icon-hover" href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224
                                             224-56 56-224-224-224 224Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  New $ Featured
                </a>
              </li>
              <li>
                <a href="#">
                  Men
                </a>
              </li>
              <li>
                <a href="#">
                  Women
                </a>
              </li>
              <li>
                <a href="#">
                  Kids
                </a>
              </li>
              <li>
                <a href="#">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#">
                  Sale
                </a>
              </li>
            </ul>
            <!-- /*---------- end of side bar  section ----------*/ -->
          </div>
        </div>
        <div class="right-nav-bar-icon-and-searchbar">
          <div class="searchbar">
            <form>
              <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
                <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" 
                    viewBox="0 0 24 24" role="img" width="24px" height="24px" 
                    fill="none"><path stroke="currentColor" stroke-width="1.5" 
                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 
                    01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 
                    1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755
                    4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 
                    01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                 </svg>
              </button>
              <input type="text" class="search-input" placeholder="Search" />
            </form>
          </div>
          <div class="icon">
          <svg aria-hidden="true" class="pre-nav-design-icon" 
            focusable="false" viewBox="0 0 24 24" role="img" 
            width="24px" height="24px" fill="none"><path 
            stroke="currentColor" stroke-width="1.5" 
            d="M16.794 3.75c1.324 0 2.568.516 3.504 
            1.451a4.96 4.96 0 010 7.008L12 
            20.508l-8.299-8.299a4.96 4.96 0 
            010-7.007A4.923 4.923 0 017.205 
            3.75c1.324 0 2.568.516 3.504 
            1.451l.76.76.531.531.53-.531.76-.76a4.926 
            4.926 0 013.504-1.451"></path>
          </svg>
            <svg
              aria-hidden="true"
              class="pre-nav-design-icon"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 
                                0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /*---------- end of second navigation bar section ----------*/ -->
</div>
<!-- /*---------- end of navigation bar section ----------*/ -->`;M(document.querySelector("header"));function B(){const e=document.querySelector(".carousel-img");console.log(e);let l=!1,o=0,a=0,i=0;const n=Array.from(e.children)[0].offsetWidth;e.addEventListener("mousedown",h),e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("mousemove",v),e.addEventListener("touchmove",v,{passive:!0});const d=document.getElementById("left"),r=document.getElementById("right");d.addEventListener("click",u),r.addEventListener("click",m);function h(t){t.type==="touchstart"?o=t.touches[0].clientX:(o=t.clientX,l=!0),i=a,e.style.transition="none"}function v(t){if(l){const b=(t.type==="touchmove"?t.touches[0].clientX:t.clientX)-o;a=i+b,e.style.transform=`translateX(${a}px)`}}function c(){l=!1,e.style.transition="transform 0.3s ease-out";const t=a%n;Math.abs(t)>n/2?a-=(n-Math.abs(t))*Math.sign(t):a-=t,a=Math.max(a,-e.scrollWidth+e.offsetWidth),a=Math.min(a,0),e.style.transform=`translateX(${a}px)`}function u(){a+=n,c()}function m(){a-=n,c()}}const E=[{img:"src/public/nike_Image/nike_shoe/air-force-1-07-womens-shoes-b19lqD.png"},{img:"src/public/nike_Image/nike_shoe/nike-just-Air-Max.jpg"},{img:"src/public/nike_Image/nike_shoe/nike-just-Blazer.jpg"},{img:"src/public/nike_Image/nike_shoe/nike-just-do-it (1).jpg"},{img:"src/public/nike_Image/nike_shoe/nike-shoe-Air-joradan.jpg"}],T=E.map(e=>`
        <img
            src="${e.img}"
            draggable="false"
        />
    `).join("");document.querySelector(".shoe-carousel").innerHTML=`
    <div class="shop-by-classic">
        <h1 id="shop-by-classics">
            SHOP BY CLASSICS
        </h1>
    </div>
    <div class="shoe-carousel">
        <div class="wrapper">
            <!-- Left navigation button -->
            <img
                class="left-button"
                id="left"
                src="src/public/nike_Image/nike_logo/arrow.png"
            />

            <!-- Container for carousel images -->
            <div class="carousel-img">
                ${T}
            </div>

            <!-- Right navigation button -->
            <img
                class="right-button"
                id="right"
                src="src/public/nike_Image/nike_logo/arrow.png"
            />
        </div>
    </div>
`;B(document.querySelector(".shoe-carousel"));const x=document.querySelector(".card-container"),I=[{img:"src/public/nike_Image/nke_images/balck_color_nike.jpeg",header:"Latest From Jordan",sub_header:"Air Jordan 11 Retro Low OG"},{img:"src/public/nike_Image/nke_images/fitness.jpg",header:"Make Your Move",sub_header:"Fitness Essentials"},{img:"src/public/nike_Image/nke_images/running.jpg",header:"Nike Trails GR11 Pack",sub_header:"Featuring the Zegama 2"},{img:"src/public/nike_Image/nke_images/golfman.jpg",header:"Brooks Koepka's Picks",sub_header:"AF1s, Golf Shoes & More"}];I.forEach(e=>{x.innerHTML+=`
        <div class="column">
            <div class="overlay">
                <p>${e.header}</p>
                <p class="big-paragraph">${e.sub_header}</p>
                <button type="button" class="btn btn-light" id="grit-shop-btn">shop</button>
            </div>
            <img src="${e.img}" draggable="false"/>
        </div>
    `});const N=document.querySelector(".hero-card"),H=[{img_desktop:"src/public/nike_Image/nke_images/nike play_at_peak_desktop_image.jpeg",img_mobile:"src/public/nike_Image/nke_images/nike_play_at_peak_mobile.jpg",header:"PLAY AT YOUR PEAK",sub_header:"From 5.20-5.24, shop fresh kicks, adventure essentials, and the best of summer style-with exclusive rewards for Nike Members",button:"Shop Summer Event"}];H.forEach(e=>{N.innerHTML+=`
    <div class="hero-card">
        <a href="#">
            <!-- Mobile version of the hero card image -->
            <img
                src="${e.img_mobile}"
                class="card-img-top"
                id="card-img-top-mobile"
                alt="Mobile version of the hero card image"
                draggable="false"
            />
        </a>
        <a href="#">
            <!-- Desktop version of the hero card image -->
            <img
                src="${e.img_desktop}"
                class="card-img-top"
                id="card-img-top-desktop"
                alt="Desktop version of the hero card image"
                draggable="false"
            />
        </a>
        <div class="card-body">
            <!-- Header text of the hero card -->
            <p class="card-text" id="jordan">
                ${e.header}
            </p>
            <!-- Sub-header text of the hero card -->
            <p class="card-text" id="exclusive">
                ${e.sub_header}
            </p>
        </div>
        <!-- Button for the hero card -->
        <button type="button" class="btn btn-dark">
            ${e.button}
        </button>
    </div>
    `});const R=document.querySelector(".nike-container"),O=document.querySelector(".nike-membership-header"),P=[{header:"Mother's Day",sub_header:"Gifts That Celebrate Mom",button:"shop",img:"src/public/nike_Image/nke_images/nike_membership-1.jpeg"},{header:"Mother's Day",sub_header:"Gifts That Celebrate Mom",button:"Move",img:"src/public/nike_Image/nke_images/nike_mebership-2.jpeg"},{header:"Mother's Day",sub_header:"Gifts That Celebrate Mom",button:"Custom",img:"src/public/nike_Image/nke_images/nike_membership_3.jpeg"}],K=[{nike_membership_header:"NIKE MEMBERSHIP"}];K.forEach(e=>{O.innerHTML+=`
    <h1 id="nike-membership">
        ${e.nike_membership_header}
    </h1>
    `});P.forEach(e=>{R.innerHTML+=`
        
        <div class="row-nike-membership">
            <div class="column-nike-membership">
                <!-- Overlay text for the membership item -->
                <div class="overlay-nike-membership-text">
                    <p>
                        ${e.header}
                    </p>
                    <p>
                        ${e.sub_header}
                    </p>
                    <!-- Button for the membership item -->
                    <button type="button" class="btn btn-light" id="grit-shop-btn">
                        ${e.button}
                    </button>
                </div>
                <!-- Image for the membership item -->
                <img
                    src="${e.img}"
                    draggable="false"
                />
            </div>
        </div>
    `});function F(){var e=document.getElementsByClassName("collapsible"),l;for(l=0;l<e.length;l++)e[l].addEventListener("click",function(){this.classList.toggle("active");var r=this.nextElementSibling;r.style.maxHeight?r.style.maxHeight=null:r.style.maxHeight=r.scrollHeight+"px"});const o=document.getElementById("featured-on-homepage-hover");function a(){this.style.maxHeight="400px"}function i(){this.style.maxHeight="150px"}function s(){o.addEventListener("mouseenter",a),o.addEventListener("mouseleave",i)}function n(){o.removeEventListener("mouseenter",a),o.removeEventListener("mouseleave",i)}function d(){window.innerWidth>=768?s():n()}d(),window.addEventListener("resize",d)}document.getElementById("footer").innerHTML=`
<!--  /*---------- start footer  section ----------*/ -->
<div class="feature-container-hide">
  <div class="featured-on-homepage" id="feature-on-homepage-small">
    <div class="feature">
      <button type="button" class="collapsible" href="...">
        Featured
      </button>
      <div class="content">
        <ul class="sub-feature">
          <li>
            <a>
              Air Force 1
            </a>
          </li>
          <li>
            <a>
              Jordan 1
            </a>
          </li>
          <li>
            <a>
              Metcon
            </a>
          </li>
          <li>
            <a>
              Air Max 270
            </a>
          </li>
          <li>
            <a>
              Air Max 97
            </a>
          </li>
          <li>
            <a>
              Air Max 90
            </a>
          </li>
          <li>
            <a>
              Blazer
            </a>
          </li>
          <li>
            <a>
              Pegasus
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="shoes">
      <button type="button" class="collapsible" href="...">
        Shoes
      </button>
      <div class="content">
        <ul class="sub-shoes">
          <li>
            <a>
              All Shoes
            </a>
          </li>
          <li>
            <a>
              Jordan Shoes
            </a>
          </li>
          <li>
            <a>
              Running Shoes
            </a>
          </li>
          <li>
            <a>
              Basketball Shoes
            </a>
          </li>
          <li>
            <a>
              Tennis Shoes
            </a>
          </li>
          <li>
            <a>
              Training Shoes
            </a>
          </li>
          <li>
            <a>
              Custom Shoes
            </a>
          </li>
          <li>
            <a>
              Sale Shoes
            </a>
          </li>
          <li>
            <a>
              Soccer Cleats
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="clothing">
      <button type="button" class="collapsible" href="...">
        Clothing
      </button>
      <div class="content">
        <ul class="sub-clothing">
          <li>
            <a>
              All Clothing
            </a>
          </li>
          <li>
            <a>
              Tops & T-Shirts
            </a>
          </li>
          <li>
            <a>
              Shorts
            </a>
          </li>
          <li>
            <a>
              Hoodies & Pullovers
            </a>
          </li>
          <li>
            <a>
              Joggers & Sweatpants
            </a>
          </li>
          <li>
            <a>
              Sports Bras
            </a>
          </li>
          <li>
            <a>
              Pants & Tights
            </a>
          </li>
          <li>
            <a>
              Socks
            </a>
          </li>
          <li>
            <a>
              Yoga
            </a>
          </li>
          <li>
            <a>
              Nikelab
            </a>
          </li>
          <li>
            <a>
              Plus Size
            </a>
          </li>
          <li>
            <a>
              Big & Tall
            </a>
          </li>
          <li>
            <a>
              Sale Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="kids">
      <button type="button" class="collapsible" href="...">
        Kids
      </button>
      <div class="content">
        <ul class="sub-kids">
          <li>
            <a>
              Infant & Toddler Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Basketball Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Running Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Jordan Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Clothing
            </a>
          </li>
          <li>
            <a>
              Kids Backpacks
            </a>
          </li>
          <li>
            <a>
              Kids Socks
            </a>
          </li>
          <li>
            <a>
              Kids Sales
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="feature-container">
  <div class="featured-on-homepage" id="featured-on-homepage-hover">
    <div class="feature">
      <button type="button" class="collapsible" href="...">
        Featured
      </button>
      <div class="content">
        <ul class="sub-feature">
          <li>
            <a>
              Air Force 1
            </a>
          </li>
          <li>
            <a>
              Jordan 1
            </a>
          </li>
          <li>
            <a>
              Metcon
            </a>
          </li>
          <li>
            <a>
              Air Max 270
            </a>
          </li>
          <li>
            <a>
              Air Max 97
            </a>
          </li>
          <li>
            <a>
              Air Max 90
            </a>
          </li>
          <li>
            <a>
              Blazer
            </a>
          </li>
          <li>
            <a>
              Pegasus
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="shoes">
      <button type="button" class="collapsible" href="...">
        Shoes
      </button>
      <div class="content">
        <ul class="sub-shoes">
          <li>
            <a>
              All Shoes
            </a>
          </li>
          <li>
            <a>
              Jordan Shoes
            </a>
          </li>
          <li>
            <a>
              Running Shoes
            </a>
          </li>
          <li>
            <a>
              Basketball Shoes
            </a>
          </li>
          <li>
            <a>
              Tennis Shoes
            </a>
          </li>
          <li>
            <a>
              Training Shoes
            </a>
          </li>
          <li>
            <a>
              Custom Shoes
            </a>
          </li>
          <li>
            <a>
              Sale Shoes
            </a>
          </li>
          <li>
            <a>
              Soccer Cleats
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="clothing">
      <button type="button" class="collapsible" href="...">
        Clothing
      </button>
      <div class="content">
        <ul class="sub-clothing">
          <li>
            <a>
              All Clothing
            </a>
          </li>
          <li>
            <a>
              Tops & T-Shirts
            </a>
          </li>
          <li>
            <a>
              Shorts
            </a>
          </li>
          <li>
            <a>
              Hoodies & Pullovers
            </a>
          </li>
          <li>
            <a>
              Joggers & Sweatpants
            </a>
          </li>
          <li>
            <a>
              Sports Bras
            </a>
          </li>
          <li>
            <a>
              Pants & Tights
            </a>
          </li>
          <li>
            <a>
              Socks
            </a>
          </li>
          <li>
            <a>
              Yoga
            </a>
          </li>
          <li>
            <a>
              Nikelab
            </a>
          </li>
          <li>
            <a>
              Plus Size
            </a>
          </li>
          <li>
            <a>
              Big & Tall
            </a>
          </li>
          <li>
            <a>
              Sale Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="kids">
      <button type="button" class="collapsible" href="...">
        Kids
      </button>
      <div class="content">
        <ul class="sub-kids">
          <li>
            <a>
              Infant & Toddler Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Basketball Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Running Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Jordan Shoes
            </a>
          </li>
          <li>
            <a>
              Kids Clothing
            </a>
          </li>
          <li>
            <a>
              Kids Backpacks
            </a>
          </li>
          <li>
            <a>
              Kids Socks
            </a>
          </li>
          <li>
            <a>
              Kids Sales
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<footer class="footer-container">
  <div class="footer-bottom">
    <div class="footer-list">
      <ul class="footer-info">
        <li>
          <a class="footer-info-list" href="...">
            RESOURCES
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            GIFT CARDS
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            FIND A STORE
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            BECOME A MEMER
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            NIKE X NBA
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            NIKE JOURNAL
          </a>
        </li>
        <li>
          <a class="footer-info-list" href="...">
            Site Feedback
          </a>
        </li>
      </ul>
      <ul class="footer-info-help">
        <button
          type="button"
          class="collapsible"
          href="..."
          id="footer-info-help-list-head">
          HELP
        </button>
        <div class="content">
          <li>
            <a class="footer-info-help-list" href="...">
              Get Help
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Order Status
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Shipping and Delivery
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Returns
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Order Cancelation
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Payment Options
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Gift Card Balance
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Contact Us
            </a>
          </li>
        </div>
      </ul>
      <ul class="footer-info-company">
        <button
          type="button"
          class="collapsible"
          href="..."
          id="footer-info-company-list-head">
          COMPANY
        </button>
        <div class="content">
          <li>
            <a class="footer-info-help-list" href="..">
              About Nike
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="..">
              News
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="..">
              Careers
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="..">
              Investors
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="..">
              Purpose
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="..">
              Sustainability
            </a>
          </li>
        </div>
      </ul>
      <ul class="footer-info-company">
        <button
          type="button"
          class="collapsible"
          href="..."
          id="footer-info-promotion-list-head">
          PROMOTION & DISCOUNTS
        </button>
        <div class="content">
          <li>
            <a class="footer-info-help-list" href="...">
              Student
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Military
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Teacher
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              First Responders & Medical
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Professionals
            </a>
          </li>
          <li>
            <a class="footer-info-help-list" href="...">
              Birthday
            </a>
          </li>
        </div>
      </ul>
      <div class="social-media-logo">
        <div class="twitter">
          <a href="https://twitter.com/Nike"
            ><img
              src="src/public/nike_Image/social_media_logo/5305170_bird_social media_social network_tweet_twitter_icon.svg"
          /></a>
        </div>
        <div class="facebook">
          <a href="https://www.facebook.com/nike"
            ><img
              src="src/public/nike_Image/social_media_logo/104498_facebook_icon.svg"
          /></a>
        </div>
        <div class="youtube">
          <a href="https://www.youtube.com/user/nike"
            ><img src="src/public/nike_Image/social_media_logo/104482_youtube_icon.svg"
          /></a>
        </div>
        <div class="instagram">
          <a href="https://www.instagram.com/nike/"
            ><img
              src="src/public/nike_Image/social_media_logo/1161953_instagram_icon.svg"
          /></a>
        </div>
      </div>
    </div>
    <div class="very-bot-of-footer">
      <div class="col">
        <div class="location">
          <div>
            <ul id="location-and-usa">
              <li>
                <img
                  src="src/public/nike_Image/social_media_logo/1071016_location_gps_pin marker_icon.svg"
                  height="20"
                /><a id="USA">United States</a>
              </li>
              <li>
                <a id="all-right-reserved">
                  © 2024 Nike, Inc. All Rights Reserved
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <ul class="very-bot-of-footer-guide">
          <li>
            <a href=".." class="very-bot-of-footer-guide-list">
              Guide
            </a>
          </li>
          <li>
            <a href=".." class="very-bot-of-footer-guide-list">
              Term of Sales
            </a>
          </li>
          <li>
            <a href=".." class="very-bot-of-footer-guide-list">
              Term of Use
            </a>
          </li>
          <li>
            <a href=".." class="very-bot-of-footer-guide-list">
              Nike Privacy Provicy
              </a>
          </li>
          <li>
            <a href=".." class="very-bot-of-footer-guide-list">
              Your Privacy Choices
            </a>
          </li>
          <li>
            <a href=".." class="very-bot-of-footer-guide-list-1">
              CA Supply Chain Act</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<!--  /*---------- end footer bar section ----------*/ -->


`;F(document.querySelector("footer"));const J=document.getElementsByClassName("new-this-week")[0],$=document.getElementsByClassName("just-img")[0],D=[{header:"NEW THIS WEEK",first_button:"Shop Men's New Arrivals",second_button:"Shop Women's New Arrivals"}],G=[{img_desktop:"src/public/nike_Image/nke_images/ball.png",img_mobile:"src/public/nike_Image/nke_images/manstanding.png"}];D.forEach(e=>{J.innerHTML+=`
        <h1 id="new-this-week">
            ${e.header}
        </h1>
        <div class="shop-button-for-new-feed">
            <button type="button" class="btn" id="new-feed-shop-button">
                ${e.first_button}
            </button>
            <button type="button" class="btn" id="new-feed-shop-button">
                ${e.second_button}
            </button>
        </div>
    `});G.forEach(e=>{$.innerHTML+=`
		<img
			src="${e.img_desktop}"
			id="man_standing_desktop"
			draggable="false"
		/>
		<img
			src="${e.img_mobile}"
			id="man_standing"
			draggable="false"
		/>
	`});
