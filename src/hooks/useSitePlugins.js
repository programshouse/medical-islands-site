import { useEffect } from 'react'

const WINDOW_NAMESPACE = '.medicalIslands'

function initOwlCarousel($, selector, options) {
  const $elements = $(selector)
  if (!$elements.length || !$.fn.owlCarousel) return

  $elements.owlCarousel(options)
}

export default function useSitePlugins() {
  useEffect(() => {
    const $ = window.jQuery
    if (!$) return undefined

    const $window = $(window)
    const $backToTop = $('.back-to-top')

    function toggleNavbarMethod() {
      const $dropdowns = $('.navbar .dropdown')
      $dropdowns.off(WINDOW_NAMESPACE)

      if ($window.width() <= 992) return

      $dropdowns
        .on(`mouseover${WINDOW_NAMESPACE}`, function handleMouseOver() {
          $('.dropdown-toggle', this).trigger('click')
        })
        .on(`mouseout${WINDOW_NAMESPACE}`, function handleMouseOut() {
          $('.dropdown-toggle', this).trigger('click').blur()
        })
    }

    function toggleBackToTop() {
      if ($window.scrollTop() > 100) {
        $backToTop.fadeIn('slow')
      } else {
        $backToTop.fadeOut('slow')
      }
    }

    toggleNavbarMethod()
    toggleBackToTop()

    $window
      .on(`resize${WINDOW_NAMESPACE}`, toggleNavbarMethod)
      .on(`scroll${WINDOW_NAMESPACE}`, toggleBackToTop)

    $backToTop.on(`click${WINDOW_NAMESPACE}`, (event) => {
      event.preventDefault()
      $('html, body').animate({ scrollTop: 0 }, 0, 'swing')
    })

    if ($.fn.datetimepicker) {
      $('.date').datetimepicker({ format: 'L' })
      $('.time').datetimepicker({ format: 'LT' })
    }

    initOwlCarousel($, '.price-carousel', {
      autoplay: true,
      smartSpeed: 1000,
      margin: 45,
      dots: false,
      loop: true,
      nav: false,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    })

    initOwlCarousel($, '.team-carousel, .related-carousel', {
      autoplay: true,
      smartSpeed: 1000,
      margin: 45,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        992: { items: 2 },
      },
    })

    initOwlCarousel($, '.testimonial-carousel', {
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      dots: true,
      loop: true,
    })

    return () => {
      $window.off(WINDOW_NAMESPACE)
      $backToTop.off(WINDOW_NAMESPACE)
      $('.navbar .dropdown').off(WINDOW_NAMESPACE)
    }
  }, [])
}
