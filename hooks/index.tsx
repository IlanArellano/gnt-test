import { useEffect, useRef } from 'react';

/** Permite ejecutar un efecto de manera asíncrona */
export const useEffectAsync = (effect: () => Promise<any>, deps?: any[]) => {
    const ref = useRef<any>();
    useEffect(() => {
        effect().then(res => ref.current = res);

        return () => {
            const result = ref.current;
            if(result && typeof result === 'function') result();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}