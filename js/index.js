$("#myCarousel").carousel("pause");

/*scrollspy behavior -
 - add/remove hide class on brand when scrolling
*/

      // The event is fired when an item gets actived with the scrollspy
      $("#myNavbar").on('activate.bs.scrollspy', function () {
         var currentSection = $(".nav li.active > a").text();
         if (currentSection == 'Home'){
           $("#brand").removeClass("fade");
           $("#brand").addClass("fadein");

        } else {
           $("#brand").addClass('fade');
           $("#brand").removeClass("fadein");

         }

      });
      /* BootLint for reporting bootstrap errors
      javascript:(function(){var s=document.createElement("script");s.onload=function(){bootlint.showLintReportForCurrentDocument([]);};s.src="https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();
      */
