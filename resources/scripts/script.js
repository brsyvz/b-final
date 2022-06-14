function openOfficeContent(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

jQuery('ul.tabs').each(function () {
  // For each set of tabs, we want to keep track of
  // which tab is active and it's associated content
  var $active,
    $content,
    $links = jQuery(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = jQuery(
    $links.filter('[href="' + location.hash + '"]')[0] || $links[0]
  );
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    jQuery(this.hash).hide();
  });

  // Bind the click event handler
  jQuery(this).on('click', 'a', function (e) {
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = jQuery(this);
    $content = jQuery(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    perPage: 1,
    lazyLoad: 'sequential',
  }).mount();
});

function openBrandContent(evt, brandName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('brand-tabContent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('brand-tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(brandName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function navigationBarHandler() {
  let headerCheckBox = document.querySelector('#headerCheckbox');
  let siteBody = document.querySelector('body');
  siteBody.addEventListener('click', function (e) {
    if (
      e.target.id !== 'headerCheckbox' &&
      e.target.className !== 'menu-items' &&
      e.target.className !== 'link-items'
    ) {
      headerCheckBox.checked = false;
    }
  });
}

navigationBarHandler();

window.addEventListener('hashchange', function () {
  window.scrollTo(window.scrollX, window.scrollY - 80);
});
