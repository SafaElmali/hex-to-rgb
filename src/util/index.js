import { invalidHexCode, checkPoundSign, notValidHexCode } from '../components/Toaster';

export const convertHexToRgb = (value) => {
    if (value.trim() === '') {
        invalidHexCode();
        return false;
    } else {
        if (value.startsWith('#')) {
            checkPoundSign();
            return false;
        }

        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        let flag = 0;

        for (let i = 0; i < 6; i++) {
            let dig = value.charAt(i)
            for (let j = 0; j < 16; j++) {
                if (dig === digits[j])
                    flag = 1;
            }
        }

        if (flag === 0) {
            notValidHexCode(value);
            return false;
        }

        let red = parseInt(value.slice(0, 2), 16);
        let green = parseInt(value.slice(2, 4), 16);
        let blue = parseInt(value.slice(4, 6), 16);

        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) return notValidHexCode(value);

        return { red, green, blue };
    }
}