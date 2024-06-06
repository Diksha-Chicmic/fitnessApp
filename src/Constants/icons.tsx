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