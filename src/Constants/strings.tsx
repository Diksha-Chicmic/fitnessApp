export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w]{1,}$/;
export const nameRegex = /^[a-zA-Z]*$/;
export const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const STRINGS={
    BUTTON:{
        TITLE:'Continue'
    },
    LANDING:{
        HEADING:'Welcome to Fitness App',
        TEXT:'The best UI kit for your next health and fitness project',
        TEXT2:'Already have an account? ',
        TEXT3:'Sign in',

    },
    EMAIL:{
        HEADING:'What is your Email address?',
        PLACEHOLDERTEXT:'Enter your email address'
    },
    PASSWORD:{
        HEADING:"Now let's set up your password",
        PLACEHOLDERTEXT:"Password"
    },
    FINGERPRINT:{
        HEADING:"Enable Fingerprint",
        TEXT:"If you enable touch ID, you don't need to enter your password when you log in.",
        TEXT2:"Not Now"
    },
    PROFILE:{
        HEADING:"Profile Picture",
        TEXT:"You can select a photo from one of these emojis or add your own photo as a profile picture",
        TEXT2:"Add Custom Photo",
        CAMERA:"Take Photo",
        LIBRARY:"Choose from Library"

    },
    PREFERENCES:{
        HEADING:"Let us know how we can help you",
        TEXT:"You always can change this later",

    },
    INTEREST:{
        HEADING:"Time to customize your interests",

    },
    GENDER:{
        HEADING:"Which one are you?",
        TEXT:"To give you a better experience we need to know your gender"
    },
    LAST:{
        HEADING:"YOU ARE READY TO GO!",
        TEXT:"Thanks for taking your time to create acoount with us.Now this is the fun part, let's explore the app",

    },
    SIGNIN:{
        TEXT:"Sign in with"
    }
}
