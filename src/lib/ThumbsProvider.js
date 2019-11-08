import sw_1 from '../assets/sw_1.jpg'
import sw_2 from '../assets/sw_2.jpg'
import sw_3 from '../assets/sw_3.jpg'
import sw_4 from '../assets/sw_4.jpg'
import sw_5 from '../assets/sw_5.jpg'
import sw_6 from '../assets/sw_6.jpg'
import sw_7 from '../assets/sw_7.jpg'
import sw_8 from '../assets/sw_8.jpg'
import sw_9 from '../assets/sw_9.jpg'

const ThumbsProvider = function () {
  if (!(this instanceof ThumbsProvider)) return new ThumbsProvider()
}

ThumbsProvider.prototype.getThumb = function (ep_id) {
  const thumbs = [sw_1, sw_2, sw_3, sw_4, sw_5, sw_6, sw_7, sw_8, sw_9]
  return thumbs[ep_id] || thumbs[thumbs.length - 1]
}

export default ThumbsProvider
