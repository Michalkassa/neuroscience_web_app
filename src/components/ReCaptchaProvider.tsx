'use client'

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"


interface ReCaptchaProviderProps{
    children: React.ReactNode
}

const ReCaptchaProvider : React.FC<ReCaptchaProviderProps> = ({children}) => {

    return(
        <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY as string}>
            {children}
        </GoogleReCaptchaProvider>
    )
}


export default ReCaptchaProvider;
