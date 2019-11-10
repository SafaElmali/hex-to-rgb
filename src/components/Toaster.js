import { toast } from 'react-toastify';

export const invalidHexCode = () => toast.warn('Please enter a valid hex code!', { autoClose: 3500 });
export const checkPoundSign = () => toast.warn('Please enter hex code without "#" sign!', { autoClose: 3500 });
export const notValidHexCode = () => toast.warn(`'${this.state.value}' is not a valid hex code!`, { autoClose: 3500 });
export const copyToClipboard = () => toast.success(`Color copied to clipboard! Wohoo! 🚀`, { autoClose: 3500 });
