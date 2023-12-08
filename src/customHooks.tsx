import { useEffect } from 'react';

export const useClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
        const listener = (event: any) => {
            const el = ref?.current;
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event)
        };

        document.addEventListener('mousedown', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [ref, handler])
}