import $ from 'jquery'
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints"
import smoothScroll from "jquery-smooth-scroll"


class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header"),
        this.headerTriggerElement = $(".large-hero__title")
        this.pageSections = $(".page-section")
        this.headerLinks = $(".primary-nav a")
        this.lazyimages = $(".lazyload")
        this.createHeaderWaypoint()
        this.createPageSectionWaypoints()
        this.addSmoothScroll()
        this.refreshWaypoints()
    }

    refreshWaypoints() {
        this.lazyimages.on('load', () => {
            Waypoint.refreshAll()
        })
    }

    addSmoothScroll() {
        this.headerLinks.smoothScroll()
    }

    createHeaderWaypoint() {
        const that = this
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: (direction) => {
                if(direction == "down") {
                    that.siteHeader.addClass("site-header--dark")
                } else {
                    that.siteHeader.removeClass("site-header--dark")
                }
            }
        })
    }

    createPageSectionWaypoints() {
        const that = this
        this.pageSections.each(function() {
            const currentPageSection = this
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if(direction == "down"){
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link")
                        that.headerLinks.removeClass("is-current-link")
                        $(matchingHeaderLink).addClass("is-current-link")
                    }
                },
                offset: "18%"
            })

            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if (direction == "up") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link")
                        that.headerLinks.removeClass("is-current-link")
                        $(matchingHeaderLink).addClass("is-current-link")
                    }
                },
                offset: "-40%"
            })
        })
    }
}

export default StickyHeader