
import Lock from '../Assets/Svgs/lock.svg'
import User from '../Assets/Svgs/user.svg'
import Google from '../Assets/Svgs/googleLogo.svg'
import Facebook from '../Assets/Svgs/facebookLogo.svg'
import Twitter from '../Assets/Svgs/twitterLogo.svg'
import Logo from '../Assets/Svgs/logo.svg'
import LeftArrow from '../Assets/Svgs/leftArrow.svg'
import { RFValue } from "react-native-responsive-fontsize";

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