$("#myCarousel").carousel("pause");

/*scrollspy behavior -
 - add/remove hide class on brand when scrolling
*/

      // The event is fired when an item gets actived with the scrollspy
      $("#myNavbar").on('activate.bs.scrollspy', function () {
         var currentSection = $(".nav li.active > a").text();
         if (currentSection == 'Home'){
           $("#brand").removeClass("hide");

        } else {
           $("#brand").addClass('hide');
          
         }

      });
