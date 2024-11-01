import moment from 'moment'
import Capture from './images/image-2.jpeg'
import Logo from './images/Logo-2.jpeg'

export const userList = [
    {
        id: 1,
        image: Logo,
        userdate: moment().startOf('day').fromNow(),
        icon: Capture,
        username: 'Sheriffuddeen ibn Nuruddeen',
        userTitle: 'welcome to the userPage of Sheriffuddeen ibn Nuruddeen'
    }
]