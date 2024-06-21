import { RFValue } from "react-native-responsive-fontsize";
import Lock from '../Assets/Svgs/lock.svg'
import User from '../Assets/Svgs/user.svg'
import Google from '../Assets/Svgs/googleLogo.svg'
import Facebook from '../Assets/Svgs/facebookLogo.svg'
import Twitter from '../Assets/Svgs/twitterLogo.svg'
import Logo from '../Assets/Svgs/logo.svg'
import LeftArrow from '../Assets/Svgs/leftArrow.svg'
import Plant from '../Assets/Svgs/plant.svg'
import Meditation from '../Assets/Svgs/meditation.svg'
import Sleep from '../Assets/Svgs/sleep_1.svg'
import Running from '../Assets/Svgs/running.svg'
import NoSmoking from '../Assets/Svgs/No-Smoking_1.svg'
import Vegan from '../Assets/Svgs/vegan.svg'
import Health from '../Assets/Svgs/health.svg'
import Fitness from '../Assets/Svgs/fitness.svg'
import Fashion from '../Assets/Svgs/fashion.svg'
import Male from '../Assets/Svgs/man.svg'
import Female from '../Assets/Svgs/female.svg'
import Fingerprint from '../Assets/Svgs/fingerprint.svg'
import RightArrow from '../Assets/Svgs/right-arrow.svg'
import Drawer from '../Assets/Svgs/drawer.svg'
import Home from '../Assets/Svgs/home.svg'
import Community from '../Assets/Svgs/community.svg'
import Bell from '../Assets/Svgs/bell.svg'
import Settings from '../Assets/Svgs/settings.svg'
import Cross from '../Assets/Svgs/cross-svgrepo-com.svg'
import RedSmile from '../Assets/Svgs/redSmile.svg'
import YellowSmile  from '../Assets/Svgs/yellowSmile.svg'
import EmptyGlass from '../Assets/Svgs/EmptyGlass.svg'
import FilledGlass from '../Assets/Svgs/filledGlass.svg'
import Plus from '../Assets/Svgs/plus.svg'
import Heart from '../Assets/Svgs/heart.svg'
import Comment from '../Assets/Svgs/comment.svg'
import Camera from '../Assets/Svgs/camera.svg'
import AddImage from '../Assets/Svgs/add-image.svg'
import AddPhoto from '../Assets/Svgs/add-photo.svg'

import Avatar1 from '../Assets/Svgs/Avatars/avatar_1.svg'
import Avatar2 from '../Assets/Svgs/Avatars/avatar_2.svg'
import Avatar3 from '../Assets/Svgs/Avatars/avatar_3.svg'
import Avatar4 from '../Assets/Svgs/Avatars/avatar_4.svg'


type iconProps = {
    width: number;
    height: number;
    color?: string;
    borderColor?: string;
};


const iconStyle = ({
    width = 0,
    height = 0,
    color = "black",
    borderColor = "none",
}) => ({
    width: RFValue(width),
    height: RFValue(height),
    fill: color,
    stroke: borderColor,
});

export const ICONS = {
    User: (params: iconProps) => User({ ...iconStyle({ ...params }) }),
    Lock: (params: iconProps) => Lock({ ...iconStyle({ ...params }) }),
    Google: (params: iconProps) => Google({ ...iconStyle({ ...params }) }),
    Twitter: (params: iconProps) => Twitter({ ...iconStyle({ ...params }) }),
    Facebook: (params: iconProps) => Facebook({ ...iconStyle({ ...params }) }),
    Logo: (params: iconProps) => Logo({ ...iconStyle({ ...params }) }),
    LeftArrow: (params: iconProps) => LeftArrow({ ...iconStyle({ ...params }) }),
    PLANT: (params: iconProps) => Plant({ ...iconStyle({ ...params }) }),
    MEDITATION: (params: iconProps) => Meditation({ ...iconStyle({ ...params }) }),
    SLEEP: (params: iconProps) => Sleep({ ...iconStyle({ ...params }) }),
    RUNNING: (params: iconProps) => Running({ ...iconStyle({ ...params }) }),
    NOSMOKING: (params: iconProps) => NoSmoking({ ...iconStyle({ ...params }) }),
    VEGAN: (params: iconProps) => Vegan({ ...iconStyle({ ...params }) }),
    FITNESS: (params: iconProps) => Fitness({ ...iconStyle({ ...params }) }),
    FASHION: (params: iconProps) => Fashion({ ...iconStyle({ ...params }) }),
    HEALTH: (params: iconProps) => Health({ ...iconStyle({ ...params }) }),
    MALE: (params: iconProps) => Male({ ...iconStyle({ ...params }) }),
    FEMALE: (params: iconProps) => Female({ ...iconStyle({ ...params }) }),
    FINGERPRINT: (params: iconProps) => Fingerprint({ ...iconStyle({ ...params }) }),
    RIGHTARROW: (params: iconProps) => RightArrow({ ...iconStyle({ ...params }) }),
    DRAWER:(params: iconProps) => Drawer({ ...iconStyle({ ...params }) }),
    HOME:(params: iconProps) => Home({ ...iconStyle({ ...params }) }),
    SETTINGS:(params: iconProps) => Settings({ ...iconStyle({ ...params }) }),
    BELL:(params: iconProps) => Bell({ ...iconStyle({ ...params }) }),
    COMMUNITY:(params: iconProps) => Community({ ...iconStyle({ ...params }) }),
    CROSS:(params: iconProps) => Cross({ ...iconStyle({ ...params }) }),
    REDSMILE:(params: iconProps) => RedSmile({ ...iconStyle({ ...params }) }),
    YELLOWSMILE:(params: iconProps) => YellowSmile({ ...iconStyle({ ...params }) }),
    EMPTYGLASS:(params: iconProps) => EmptyGlass({ ...iconStyle({ ...params }) }),
    GLASSFILLED:(params: iconProps) => FilledGlass({ ...iconStyle({ ...params }) }),
    PLUS:(params: iconProps) => Plus({ ...iconStyle({ ...params }) }),
    COMMENT:(params: iconProps) => Comment({ ...iconStyle({ ...params }) }),
    HEART:(params: iconProps) => Heart({ ...iconStyle({ ...params }) }),
    CAMERA:(params: iconProps) => Camera({ ...iconStyle({ ...params }) }),
    ADDIMAGE:(params: iconProps) => AddImage({ ...iconStyle({ ...params }) }),
    ADDPHOTO:(params: iconProps) => AddPhoto({ ...iconStyle({ ...params }) }),
}

const Avatar={
    width:75,
    height:75
}

export const AVATARS={
    AVATAR1 : ()=>Avatar1({...iconStyle(Avatar)}),
    AVATAR2 : ()=>Avatar2({...iconStyle(Avatar)}),
    AVATAR3 : ()=>Avatar3({...iconStyle(Avatar)}),
    AVATAR4 : ()=>Avatar4({...iconStyle(Avatar)}),

}
export type AvatarKey = keyof typeof AVATARS;