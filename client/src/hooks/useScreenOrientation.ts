import { useEffect } from 'react';

type OrientationType = 'portrait' | 'landscape';

export function useScreenOrientation(orientation: OrientationType, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const lockOrientation = async () => {
      try {
        if ('orientation' in screen && 'lock' in (screen.orientation as any)) {
          const lockType = orientation === 'portrait' 
            ? 'portrait-primary' 
            : 'landscape-primary';
          await (screen.orientation as any).lock(lockType);
        }
      } catch (error) {
        console.log('Screen orientation lock not supported or denied');
      }
    };

    const unlockOrientation = () => {
      try {
        if ('orientation' in screen && 'unlock' in (screen.orientation as any)) {
          (screen.orientation as any).unlock();
        }
      } catch (error) {
        console.log('Screen orientation unlock not supported');
      }
    };

    lockOrientation();

    return () => {
      unlockOrientation();
    };
  }, [orientation, enabled]);
}

export function useLockPortrait(enabled: boolean = true) {
  useScreenOrientation('portrait', enabled);
}

export function useLockLandscape(enabled: boolean = true) {
  useScreenOrientation('landscape', enabled);
}
