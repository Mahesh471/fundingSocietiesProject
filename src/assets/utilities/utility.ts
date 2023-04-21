import { BUTTON } from "../constants/colorCodes"

export const getButtonColor = (enable: boolean) => {
    return enable? BUTTON.PRIMARY.BG: BUTTON.DISABLED.BG;
}

export const getTextColor = (enable: boolean) => {
    return enable? BUTTON.PRIMARY.TEXT: BUTTON.DISABLED.TEXT;
}