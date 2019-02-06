import $ from 'jquery'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

const mobileMenu = new MobileMenu(),
stickyHeader = new StickyHeader(),
modal = new Modal()
new RevealOnScroll($(".feature-item"), "85%")
new RevealOnScroll($(".testimonial"), "70%")
