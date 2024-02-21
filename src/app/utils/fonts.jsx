import {Manrope} from 'next/font/google';

export const manrope_init = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-manrope",
    weight: ["200","300","400","500","600"],
});

export const manrope = manrope_init.variable;