import { useEffect, useRef } from 'react';

// Calls `handler` when the user clicks/taps outside of every element in `refs`,
// or presses Escape. `refs` can be a single ref or an array of refs.
function useClickOutside(refs, handler, enabled = true) {
    const refsRef = useRef(refs);
    const handlerRef = useRef(handler);

    useEffect(() => {
        refsRef.current = refs;
        handlerRef.current = handler;
    });

    useEffect(() => {
        if (!enabled) return;

        const handlePointerDown = (e) => {
            const refList = Array.isArray(refsRef.current) ? refsRef.current : [refsRef.current];
            const clickedInside = refList.some((ref) => ref.current?.contains(e.target));
            if (!clickedInside) handlerRef.current();
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handlerRef.current();
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [enabled]);
}

export default useClickOutside;
